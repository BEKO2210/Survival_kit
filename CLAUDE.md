# WW3 Survival Guide

Umfassender Krisenvorsorge-Guide als Progressive Web App. Alle Informationen, Checklisten und PDFs die du brauchst, um deine Familie im Ernstfall zu schützen.

**Live:** [https://BEKO2210.github.io/WW3](https://BEKO2210.github.io/WW3)

## Tech Stack

- **Astro 4.16** - Static Site Generator
- **Tailwind CSS** - Styling
- **jsPDF** - Client-seitige PDF-Generierung
- **JSZip** - ZIP-Download aller PDFs
- **TypeScript** - Typsicherheit

## Projekt-Struktur

```
src/
  components/          # Astro-Komponenten
    Navigation.astro   # Sticky Navbar mit mobilem Menü
    SectionHeader.astro # Wiederverwendbare Section-Überschriften
    BentoCard.astro    # Karten-Layout-Komponente
    PdfButton.astro    # PDF-Download-Buttons
  data/
    survivalData.ts    # Komplette Datenbasis (Nahrung, Wasser, Ausrüstung, Bomben, Tech...)
  layouts/
    Layout.astro       # HTML-Shell mit globalem CSS und Animationen
  lib/
    pdfGenerator.ts    # PDF-Generierung (Portrait A4, 9 verschiedene PDFs)
  pages/
    index.astro        # Hauptseite mit allen Sektionen
public/
  icon-*.png           # PWA-Icons
  manifest.json        # PWA-Manifest
  sw.js                # Service Worker für Offline-Nutzung
```

## Sektionen

1. **Wasser** - Tagesbedarf, Vorrat, Aufbereitung + Wasserrechner
2. **Nahrung** - 246+ Lebensmittel mit Haltbarkeit & Kalorien + Kalorienrechner
3. **Einkaufslisten** - 3 fertige Listen (1 Person, 2 Personen, Familie) inkl. Hygiene/Erste Hilfe/Ausrüstung
4. **Erste Hilfe** - 22 Artikel mit Prioritäten
5. **Ausrüstung** - 29 Werkzeuge in 5 Kategorien
6. **Hygiene** - 13 Artikel
7. **Kinder** - 3 Altersgruppen (0-2, 2-6, 6-14)
8. **Dokumente** - 13 wichtige Unterlagen
9. **Notfallplan** - 10 Schritte
10. **Szenarien** - 5 realistische Situationen
11. **Schutzräume & Bomben** - Sprengradien (nuklear + konventionell), Schutzräume, Abschirmung, Fallout-Regeln + Entfernungsrechner
12. **Offline-Technik** - 12 Apps/Tools (Kiwi, Ollama, LM Studio, OsmAnd, Briar...) + Speicherrechner
13. **Schnellübersicht** - 3er Regel, Fluchtrucksack, Notrufnummern, Rotation
14. **PDF Downloads** - Alle 11 PDFs einzeln oder als ZIP

## Interaktive Rechner

- **Wasserrechner** - Berechnet Bedarf nach Personenzahl und Tagen
- **Kalorienrechner** - Gesamtkalorienbedarf mit Reis/NRG-5 Äquivalent
- **Entfernungsrechner** - Sicherheitsanalyse bei verschiedenen Waffentypen
- **Speicherrechner** - Offline-Tools Speicherbedarf

## PDFs

Alle PDFs werden client-seitig im Browser generiert (kein Server):
- Portrait A4 Format
- Professionelles Layout mit Farbcodierung
- Checkboxen zum Abhaken
- Prioritäts-Indikatoren (rot/gelb/blau)

## Development

```bash
npm install
npm run dev     # Entwicklungsserver
npm run build   # Production Build
```

## Deployment

Automatisch via GitHub Pages. Base-Path: `/WW3`

## Datenquellen

- **Nährwerte:** Bundeslebensmittelschlüssel (BLS) 4.0, Max Rubner-Institut
- **Vorsorge:** Bundesamt für Bevölkerungsschutz (BBK), Deutsches Rotes Kreuz (DRK)
- **Sprengradien:** NUKEMAP-Referenzdaten, Glasstone & Dolan
- **Abschirmung:** FEMA/Ready.gov, ICRP-Empfehlungen

## Datenschutz

- Keine Cookies, kein Tracking, keine Analytics
- Keine externen Fonts oder Scripts
- PDF-Generierung komplett client-seitig
- Offline-fähig via Service Worker
