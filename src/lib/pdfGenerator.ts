// =============================================================
// Be PREPared SURVIVAL GUIDE - PDF Generator v4
// Hochformat (Portrait), perfekt formatiert, kein Überlappen
// =============================================================
import { jsPDF } from 'jspdf';

// --- Page (Portrait A4) ---
const PW = 210;
const PH = 297;
const M = 14;
const CW = PW - 2 * M;
const FOOTER_H = 10;
const USABLE_H = PH - M - FOOTER_H;

// --- Colors ---
type RGB = [number, number, number];
const BRAND: RGB = [13, 139, 79];
const DARK: RGB  = [30, 30, 38];
const MID: RGB   = [100, 100, 110];
const LIGHT: RGB = [160, 160, 170];
const WHITE: RGB = [255, 255, 255];
const RED: RGB   = [200, 40, 40];
const AMBER: RGB = [200, 130, 10];
const BLUE: RGB  = [40, 100, 210];
const VIOLET: RGB = [100, 80, 195];
const CYAN: RGB  = [6, 150, 180];
const PINK: RGB  = [200, 55, 130];

const GRAY_BG: RGB = [245, 245, 248];
const GRAY_LINE: RGB = [210, 210, 215];
const ALT_ROW: RGB = [250, 250, 253];

function newDoc(): jsPDF {
  return new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
}

// =============================================================
// SHARED: Header, Footer, New Page
// =============================================================
function drawHeader(doc: jsPDF, title: string, sub: string, color: RGB): number {
  doc.setFillColor(...color);
  doc.rect(0, 0, PW, 20, 'F');

  doc.setTextColor(...WHITE);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, M, 9);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  const subLines = doc.splitTextToSize(sub, CW - 40);
  doc.text(subLines[0] || sub, M, 15);

  const d = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  doc.setFontSize(6.5);
  doc.text(`Stand: ${d}`, PW - M - 40, 15);

  doc.setFillColor(...WHITE);
  doc.roundedRect(PW - M - 14, 4, 14, 8, 1.5, 1.5, 'F');
  doc.setTextColor(...color);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('PREP', PW - M - 7, 9, { align: 'center' });

  return 26;
}

function drawFooter(doc: jsPDF) {
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    const fy = PH - FOOTER_H + 2;
    doc.setDrawColor(...GRAY_LINE);
    doc.setLineWidth(0.15);
    doc.line(M, fy, PW - M, fy);
    doc.setFontSize(6);
    doc.setTextColor(...LIGHT);
    doc.text('Be PREPared Survival Guide  ·  Nährwerte: BLS 4.0 (MRI)  ·  Vorsorge: BBK/DRK', M, fy + 4);
    const pg = pages > 1 ? `Seite ${i} / ${pages}` : '';
    doc.text(pg, PW / 2, fy + 4, { align: 'center' });
    doc.text('Keine Gewähr  ·  Stand 2026', PW - M, fy + 4, { align: 'right' });
  }
}

function needsNewPage(y: number, needed: number): boolean {
  return y + needed > USABLE_H;
}

function addPage(doc: jsPDF, title: string, color: RGB): number {
  doc.addPage();
  doc.setFillColor(...color);
  doc.rect(0, 0, PW, 9, 'F');
  doc.setTextColor(...WHITE);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(`${title} (Fortsetzung)`, M, 6);
  return 14;
}

// =============================================================
// SHARED: Drawing helpers
// =============================================================
function sectionBar(doc: jsPDF, y: number, title: string, color: RGB): number {
  doc.setFillColor(...color);
  doc.rect(M, y, 2, 5, 'F');
  doc.setTextColor(...DARK);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(title, M + 5, y + 3.8);
  return y + 9;
}

function drawCheckbox(doc: jsPDF, x: number, y: number, text: string, rightText?: string, maxTextW: number = 70) {
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.25);
  doc.rect(x, y - 2.2, 3.5, 3.5);

  doc.setTextColor(...DARK);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  const line = doc.splitTextToSize(text, maxTextW)[0] || text;
  doc.text(line, x + 5.5, y + 0.5);

  if (rightText) {
    doc.setTextColor(...MID);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(rightText, x + maxTextW + 8, y + 0.5, { align: 'right' });
  }
}

function prioDot(doc: jsPDF, x: number, y: number, p: string) {
  const c = p === 'hoch' ? RED : p === 'mittel' ? AMBER : BLUE;
  doc.setFillColor(...c);
  doc.circle(x, y - 0.3, 1.2, 'F');
}

function drawLegend(doc: jsPDF, y: number) {
  doc.setFontSize(6.5);
  doc.setTextColor(...MID);
  doc.text('Legende:', M, y);
  doc.setFillColor(...RED); doc.circle(M + 14, y - 0.4, 1, 'F');
  doc.text('hoch', M + 16.5, y);
  doc.setFillColor(...AMBER); doc.circle(M + 27, y - 0.4, 1, 'F');
  doc.text('mittel', M + 29.5, y);
  doc.setFillColor(...BLUE); doc.circle(M + 42, y - 0.4, 1, 'F');
  doc.text('niedrig', M + 44.5, y);
}

// =============================================================
// EINKAUFSLISTEN
// =============================================================
interface ShopItem { name: string; amount: string; category: string }
interface ShopList { title: string; description: string; people: string; duration: string; items: ShopItem[] }

function generateShoppingListPdf(list: ShopList) {
  const doc = newDoc();
  const color = BRAND;
  const pageTitle = `Einkaufsliste: ${list.title}`;
  let y = drawHeader(doc, pageTitle, `${list.description}  ·  ${list.items.length} Artikel  ·  ${list.duration}`, color);

  const cats = [...new Set(list.items.map(i => i.category))];
  const ROW_H = 5.5;
  const CAT_HEAD = 8;
  const COL_W = CW / 2;

  const colY = [y, y];

  for (const cat of cats) {
    const items = list.items.filter(i => i.category === cat);
    const blockH = CAT_HEAD + items.length * ROW_H + 3;

    let col = colY[1] < colY[0] ? 1 : 0;

    if (needsNewPage(colY[col], blockH)) {
      y = addPage(doc, pageTitle, color);
      colY[0] = y; colY[1] = y;
      col = 0;
    }

    const xBase = M + col * COL_W;

    // Category header
    doc.setFillColor(...color);
    doc.rect(xBase, colY[col], COL_W - 4, 0.5, 'F');
    colY[col] += 2.5;
    doc.setTextColor(...color);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text(cat.toUpperCase(), xBase, colY[col] + 2.5);
    colY[col] += 5.5;

    for (const item of items) {
      drawCheckbox(doc, xBase, colY[col], item.name, item.amount, COL_W - 30);
      colY[col] += ROW_H;
    }
    colY[col] += 2;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// NAHRUNGSMITTEL TABELLE
// =============================================================
interface FoodItem {
  name: string; shelf_life: string; storage: string;
  calories_per_100g: number; category: string; priority: string;
}

function generateFoodPdf(items: FoodItem[]) {
  const doc = newDoc();
  const color = AMBER;
  const pageTitle = 'Nahrungsmittel & Haltbarkeit';
  let y = drawHeader(doc, pageTitle, `Komplette Übersicht  ·  ${items.length} Lebensmittel mit Haltbarkeit, Lagerung und Kalorien`, color);

  function drawTableHead(yPos: number): number {
    doc.setFillColor(...color);
    doc.rect(M, yPos, CW, 6, 'F');
    doc.setTextColor(...WHITE);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('LEBENSMITTEL', M + 2, yPos + 4);
    doc.text('HALTBARKEIT', M + 72, yPos + 4);
    doc.text('LAGERUNG', M + 107, yPos + 4);
    doc.text('KCAL', M + 155, yPos + 4);
    doc.text('PRIO', M + 170, yPos + 4);
    return yPos + 8;
  }

  y = drawTableHead(y);

  let altRow = false;
  let currentCat = '';
  const ROW_H = 5;

  for (const food of items) {
    if (needsNewPage(y, ROW_H + 2)) {
      y = addPage(doc, pageTitle, color);
      y = drawTableHead(y);
      altRow = false;
      currentCat = '';
    }

    // Category separator
    if (food.category !== currentCat) {
      currentCat = food.category;
      doc.setFillColor(235, 240, 235);
      doc.rect(M, y - 1, CW, 5.5, 'F');
      doc.setTextColor(...color);
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      doc.text(currentCat.toUpperCase(), M + 2, y + 2);
      y += 6;
      altRow = false;
    }

    if (altRow) {
      doc.setFillColor(...ALT_ROW);
      doc.rect(M, y - 1.5, CW, ROW_H, 'F');
    }
    altRow = !altRow;

    // Name
    doc.setTextColor(...DARK);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    const nameTrunc = doc.splitTextToSize(food.name, 65)[0] || food.name;
    doc.text(nameTrunc, M + 2, y + 1.5);

    // Shelf life
    doc.setTextColor(...AMBER);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(food.shelf_life, M + 72, y + 1.5);

    // Storage
    doc.setTextColor(...MID);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    const storageTrunc = doc.splitTextToSize(food.storage, 44)[0] || food.storage;
    doc.text(storageTrunc, M + 107, y + 1.5);

    // Calories
    doc.setTextColor(...DARK);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(String(food.calories_per_100g), M + 160, y + 1.5, { align: 'center' });

    // Priority dot
    const prioColor = food.priority === 'hoch' ? RED : food.priority === 'mittel' ? AMBER : BLUE;
    doc.setFillColor(...prioColor);
    doc.circle(M + 174, y + 0.7, 1.2, 'F');

    y += ROW_H;
  }

  // Legend
  y += 3;
  if (!needsNewPage(y, 6)) {
    drawLegend(doc, y);
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// ERSTE HILFE
// =============================================================
interface AidItem { item: string; amount: string; priority: string }

function generateFirstAidPdf(items: AidItem[]) {
  const doc = newDoc();
  const color = RED;
  let y = drawHeader(doc, 'Erste-Hilfe Checkliste', `Grundausstattung  ·  ${items.length} Artikel  ·  Medizin wird im Krieg knapp`, color);

  const ROW_H = 7;

  for (const item of items) {
    if (needsNewPage(y, ROW_H)) {
      y = addPage(doc, 'Erste-Hilfe Checkliste', color);
    }

    prioDot(doc, M + CW - 4, y, item.priority);
    drawCheckbox(doc, M, y, item.item, item.amount, CW - 40);

    // Light separator
    doc.setDrawColor(...GRAY_LINE);
    doc.setLineWidth(0.08);
    doc.line(M + 5, y + 3.5, PW - M, y + 3.5);

    y += ROW_H;
  }

  // Legend
  y += 4;
  if (!needsNewPage(y, 6)) {
    drawLegend(doc, y);
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// NOTFALLPLAN
// =============================================================
interface PlanStep { step: number; title: string; description: string }

function generateEmergencyPlanPdf(steps: PlanStep[]) {
  const doc = newDoc();
  const color = RED;
  let y = drawHeader(doc, 'Notfallplan  ·  10 Schritte', 'Wenn es losgeht: Ruhig bleiben und diesem Plan folgen.', color);

  const stepH = Math.min((USABLE_H - y - 4) / steps.length, 25);

  for (const step of steps) {
    if (needsNewPage(y, stepH)) {
      y = addPage(doc, 'Notfallplan', color);
    }

    // Number circle
    doc.setFillColor(...color);
    doc.circle(M + 6, y + 5, 5.5, 'F');
    doc.setTextColor(...WHITE);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text(String(step.step), M + 6, y + 6.8, { align: 'center' });

    // Title
    doc.setTextColor(...DARK);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(step.title, M + 16, y + 4);

    // Description
    doc.setTextColor(...MID);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(step.description, CW - 20);
    doc.text(lines, M + 16, y + 9.5);

    // Separator
    if (step.step < steps.length) {
      doc.setDrawColor(...GRAY_LINE);
      doc.setLineWidth(0.08);
      doc.line(M + 16, y + stepH - 2, PW - M, y + stepH - 2);
    }

    y += stepH;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// DOKUMENTE
// =============================================================
interface DocItem { document: string; note: string }

function generateDocumentsPdf(docs: DocItem[]) {
  const doc = newDoc();
  const color = VIOLET;
  let y = drawHeader(doc, 'Wichtige Dokumente', `${docs.length} Dokumente  ·  Bei Flucht griffbereit halten`, color);

  const rowH = Math.min((USABLE_H - y - 4) / docs.length, 18);

  for (let i = 0; i < docs.length; i++) {
    const d = docs[i];

    if (needsNewPage(y, rowH)) {
      y = addPage(doc, 'Wichtige Dokumente', color);
    }

    // Number badge
    doc.setFillColor(...color);
    doc.roundedRect(M, y, 9, 7, 1.2, 1.2, 'F');
    doc.setTextColor(...WHITE);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(String(i + 1).padStart(2, '0'), M + 4.5, y + 4.5, { align: 'center' });

    // Checkbox
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.rect(M + 12, y + 1.5, 3.5, 3.5);

    // Name
    doc.setTextColor(...DARK);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(d.document, M + 19, y + 4);

    // Note
    doc.setTextColor(...MID);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text(d.note, M + 19, y + 8.5);

    // Separator
    if (i < docs.length - 1) {
      doc.setDrawColor(...GRAY_LINE);
      doc.setLineWidth(0.08);
      doc.line(M + 12, y + rowH - 1.5, PW - M, y + rowH - 1.5);
    }

    y += rowH;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// HYGIENE
// =============================================================
interface HygieneItem { name: string; amount: string; priority: string }

function generateHygienePdf(items: HygieneItem[]) {
  const doc = newDoc();
  const color = CYAN;
  let y = drawHeader(doc, 'Hygiene Checkliste', `${items.length} Artikel  ·  Seuchen töten im Krieg mehr als Waffen`, color);

  const ROW_H = 7;

  for (const item of items) {
    if (needsNewPage(y, ROW_H)) {
      y = addPage(doc, 'Hygiene Checkliste', color);
    }

    prioDot(doc, M + CW - 4, y, item.priority);
    drawCheckbox(doc, M, y, item.name, item.amount, CW - 40);

    doc.setDrawColor(...GRAY_LINE);
    doc.setLineWidth(0.08);
    doc.line(M + 5, y + 3.5, PW - M, y + 3.5);

    y += ROW_H;
  }

  const ly = y + 4;
  if (!needsNewPage(ly, 6)) {
    drawLegend(doc, ly);
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// WASSER
// =============================================================
interface WaterNeed { situation: string; perPersonPerDay: string; notes: string }
interface WaterStorageItem { group: string; amount: string; note: string }
interface WaterPurify { method: string; description: string; effectiveness: string; effort: string }

function generateWaterPdf(needs: WaterNeed[], storage: { items: WaterStorageItem[] }, purify: WaterPurify[]) {
  const doc = newDoc();
  const color = BLUE;
  let y = drawHeader(doc, 'Wasser  ·  Übersicht & Vorrat', 'Ohne Wasser nur 3 Tage. Im Krieg bricht die Versorgung zuerst zusammen.', color);

  // === TAGESBEDARF ===
  y = sectionBar(doc, y, 'TÄGLICHER WASSERBEDARF', color);

  doc.setFillColor(...GRAY_BG);
  const tbH = needs.length * 8 + 4;
  doc.roundedRect(M, y - 1, CW, tbH, 2, 2, 'F');

  for (const n of needs) {
    doc.setTextColor(...DARK);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(n.situation, M + 4, y + 3);

    doc.setTextColor(...color);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(n.perPersonPerDay, PW - M - 4, y + 3, { align: 'right' });

    doc.setTextColor(...MID);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.text(n.notes, M + 4, y + 7);

    y += 8;
  }
  y += 6;

  // === VORRAT 14 TAGE ===
  y = sectionBar(doc, y, 'VORRAT FÜR 14 TAGE', BRAND);

  for (const s of storage.items) {
    if (needsNewPage(y, 8)) {
      y = addPage(doc, 'Wasser', color);
    }
    drawCheckbox(doc, M, y, s.group);

    doc.setTextColor(...BRAND);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(s.amount, PW - M - 4, y + 0.5, { align: 'right' });

    doc.setTextColor(...MID);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.text(s.note, M + 45, y + 0.5);

    y += 7;
  }
  y += 8;

  // === AUFBEREITUNG ===
  if (needsNewPage(y, 30)) {
    y = addPage(doc, 'Wasser', color);
  }
  y = sectionBar(doc, y, 'WASSERAUFBEREITUNG', color);

  for (const p of purify) {
    const cardH = 24;
    if (needsNewPage(y, cardH)) {
      y = addPage(doc, 'Wasser', color);
    }

    doc.setFillColor(...GRAY_BG);
    doc.roundedRect(M, y - 1, CW, cardH - 2, 2, 2, 'F');

    doc.setTextColor(...DARK);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(p.method, M + 4, y + 4);

    doc.setTextColor(...MID);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(p.description, CW - 10);
    doc.text(descLines.slice(0, 2), M + 4, y + 9);

    doc.setTextColor(...color);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(`Effektivität: ${p.effectiveness}`, M + 4, y + 17);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text(`Aufwand: ${p.effort}`, M + 70, y + 17);

    y += cardH;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// AUSRÜSTUNG
// =============================================================
interface ToolItem { name: string; amount: string; note: string }
interface ToolGroup { category: string; items: ToolItem[] }

function generateEquipmentPdf(groups: ToolGroup[]) {
  const doc = newDoc();
  const color = AMBER;
  const pageTitle = 'Ausrüstung & Werkzeuge';
  let y = drawHeader(doc, pageTitle, 'Autark überleben ohne Strom und Infrastruktur', color);

  const ROW_H = 5.5;

  for (const group of groups) {
    const blockH = 10 + group.items.length * ROW_H + 3;

    if (needsNewPage(y, blockH)) {
      y = addPage(doc, pageTitle, color);
    }

    // Category header
    doc.setFillColor(...color);
    doc.rect(M, y, CW, 0.5, 'F');
    y += 3;
    doc.setTextColor(...color);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(group.category.toUpperCase(), M, y + 3);
    y += 7;

    for (const item of group.items) {
      drawCheckbox(doc, M, y, item.name, item.amount, CW - 40);
      y += ROW_H;
    }
    y += 3;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// KINDER
// =============================================================
interface ChildGroup { category: string; items: string[] }

function generateChildrenPdf(groups: ChildGroup[]) {
  const doc = newDoc();
  const color = PINK;
  const pageTitle = 'Kinder im Krieg schützen';
  let y = drawHeader(doc, pageTitle, 'Spezielle Bedürfnisse nach Altersgruppe  ·  0 bis 14 Jahre', color);

  const ROW_H = 6;

  for (const group of groups) {
    const blockH = 10 + group.items.length * ROW_H + 4;

    if (needsNewPage(y, blockH)) {
      y = addPage(doc, pageTitle, color);
    }

    // Category header
    doc.setFillColor(...color);
    doc.rect(M, y, CW, 0.5, 'F');
    y += 3;
    doc.setTextColor(...color);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(group.category.toUpperCase(), M, y + 3);
    y += 7;

    for (const item of group.items) {
      if (needsNewPage(y, ROW_H)) {
        y = addPage(doc, pageTitle, color);
      }

      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.25);
      doc.rect(M, y - 2.2, 3.5, 3.5);

      doc.setTextColor(...DARK);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(item, CW - 10);
      doc.text(lines[0] || item, M + 5.5, y + 0.5);
      if (lines[1]) {
        doc.text(lines[1], M + 5.5, y + 4);
      }
      y += ROW_H;
    }
    y += 4;
  }

  drawFooter(doc);
  return doc;
}

// =============================================================
// EXPORT
// =============================================================
export function downloadPdf(doc: jsPDF, filename: string) {
  doc.save(filename);
}

export {
  generateShoppingListPdf,
  generateFoodPdf,
  generateFirstAidPdf,
  generateEmergencyPlanPdf,
  generateDocumentsPdf,
  generateHygienePdf,
  generateWaterPdf,
  generateEquipmentPdf,
  generateChildrenPdf,
};

export type {
  ShopList,
  ShopItem,
  FoodItem,
  AidItem,
  PlanStep,
  DocItem,
  HygieneItem,
  WaterNeed,
  WaterStorageItem,
  WaterPurify,
  ToolGroup,
  ToolItem,
  ChildGroup,
};
