// Service Worker for Be PREPared PWA
// Version is injected at build time by CI/CD pipeline
const CACHE_VERSION = '__BUILD_VERSION__';
const CACHE_NAME = 'survival-kit-' + CACHE_VERSION;
const BASE = '/Survival_kit/';

// Core assets to pre-cache on install
const PRECACHE_URLS = [
  BASE,
  BASE + 'manifest.json',
  BASE + 'icon-192x192.png',
  BASE + 'icon-512x512.png',
  BASE + 'favicon.svg',
  BASE + 'apple-touch-icon.png',
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches; only notify clients when this was a real UPDATE
// (i.e. there was a previous "survival-kit-*" cache) — not on first install.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      const oldCaches = keys.filter(
        (key) => key !== CACHE_NAME && key.startsWith('survival-kit-')
      );
      const isRealUpdate = oldCaches.length > 0 && CACHE_VERSION !== '__BUILD_VERSION__';

      return Promise.all(oldCaches.map((key) => caches.delete(key)))
        .then(() => self.clients.claim())
        .then(() => (isRealUpdate ? self.clients.matchAll() : []))
        .then((clients) => {
          clients.forEach((client) =>
            client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION })
          );
        });
    })
  );
});

// Allow the page to trigger an immediate activation of a waiting worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch: network-first for HTML, stale-while-revalidate for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) return;

  // HTML pages: network-first (fallback to cache for offline)
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((r) => r || caches.match(BASE)))
    );
    return;
  }

  // Static assets: stale-while-revalidate
  // Serve from cache immediately, but also fetch from network to update cache
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((response) => {
          if (response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => cached);

        return cached || fetchPromise;
      });
    })
  );
});

// Push notification support
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title || 'Be PREPared', {
        body: data.body || 'Neue Updates verfügbar',
        icon: BASE + 'icon-192x192.png',
        badge: BASE + 'icon-192x192.png',
      })
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      if (clients.length > 0) {
        return clients[0].focus();
      }
      return self.clients.openWindow(BASE);
    })
  );
});
