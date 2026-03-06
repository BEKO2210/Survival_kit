// Version wird beim Build automatisch ersetzt (Format: YYYY-MM-DD_HH-MM)
const CACHE_VERSION = '2026-03-06_v1';
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

// Activate: clean up old caches, notify clients of update
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => {
      self.clients.claim();
      // Notify all clients that a new version is active
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION }));
      });
    })
  );
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) return;

  // HTML pages: network-first (fallback to cache)
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

  // Static assets (JS, CSS, images, fonts): cache-first with network fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
