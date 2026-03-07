// ============================================================
// SURVIVAL GUIDE - KOMPLETTE DATENBANK
// Nährwerte basierend auf BLS 4.0 (Bundeslebensmittelschlüssel)
// Max Rubner-Institut (MRI), Dezember 2025
// Quelle: https://blsdb.de/bls
// ============================================================

// --- WASSER ---
export interface WaterInfo {
  situation: string;
  perPersonPerDay: string;
  notes: string;
}

export const waterNeeds: WaterInfo[] = [
  { situation: "Trinken (Minimum)", perPersonPerDay: "1,5 Liter", notes: "Absolutes Minimum zum Überleben" },
  { situation: "Trinken + Kochen", perPersonPerDay: "2,5 Liter", notes: "Empfohlen für normale Versorgung" },
  { situation: "Trinken + Kochen + Hygiene", perPersonPerDay: "3-4 Liter", notes: "Komfortversorgung" },
  { situation: "Kinder unter 6 Jahren", perPersonPerDay: "1-1,5 Liter", notes: "Weniger Trinken, aber häufiger" },
  { situation: "Stillender Elternteil", perPersonPerDay: "3-4 Liter", notes: "Erhöhter Bedarf durch Stillen" },
  { situation: "Hitze / körperliche Arbeit", perPersonPerDay: "4-5 Liter", notes: "Deutlich mehr bei Anstrengung" },
];

export const waterStorage = {
  title: "Wasservorrat Empfehlung (14 Tage)",
  items: [
    { group: "1 Person", amount: "35 Liter", note: "2,5L x 14 Tage", liters: 35 },
    { group: "2 Personen", amount: "70 Liter", note: "Paar / Duo", liters: 70 },
    { group: "Familie (2 Erw. + 1 Kind)", amount: "91 Liter", note: "Kind ca. 1,5L/Tag", liters: 91 },
    { group: "Familie (2 Erw. + 2 Kinder)", amount: "112 Liter", note: "Standardfamilie", liters: 112 },
    { group: "Familie (2 Erw. + 3 Kinder)", amount: "133 Liter", note: "z.B. deine Familie", liters: 133 },
  ],
};

export const waterPurification = [
  { method: "Abkochen", description: "Mindestens 3 Minuten sprudelnd kochen", effectiveness: "99,9%", effort: "Mittel" },
  { method: "Entkeimungstabletten", description: "Micropur, Katadyn etc. - 30 Min. einwirken", effectiveness: "99,5%", effort: "Gering" },
  { method: "Wasserfilter", description: "Sawyer, LifeStraw, Katadyn", effectiveness: "99,99%", effort: "Gering" },
  { method: "UV-Behandlung", description: "SteriPEN oder Sonnenlicht (SODIS, 6h in PET)", effectiveness: "99,9%", effort: "Mittel" },
  { method: "Destillation", description: "Wasser verdampfen und Kondensat auffangen", effectiveness: "99,99%", effort: "Hoch" },
];

// --- LEBENSMITTEL HALTBARKEIT (BLS 4.0) ---
export interface FoodItem {
  name: string;
  shelf_life: string;
  storage: string;
  calories_per_100g: number;
  category: string;
  priority: "hoch" | "mittel" | "niedrig";
}

export const foodItems: FoodItem[] = [
  // ========== GETREIDE & KOHLENHYDRATE (BLS 4.0: B-Gruppe) ==========
  { name: "Reis, weiß, trocken", shelf_life: "10-30 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 354, category: "Getreide", priority: "hoch" },
  { name: "Reis, Vollkorn, trocken", shelf_life: "5-8 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 358, category: "Getreide", priority: "hoch" },
  { name: "Nudeln, Hartweizen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, original verpackt", calories_per_100g: 348, category: "Getreide", priority: "hoch" },
  { name: "Nudeln, Vollkorn, trocken", shelf_life: "5-8 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 347, category: "Getreide", priority: "hoch" },
  { name: "Haferflocken, zart", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 372, category: "Getreide", priority: "hoch" },
  { name: "Haferflocken, kernig", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 372, category: "Getreide", priority: "hoch" },
  { name: "Mehl, Weizenmehl Type 405", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, Schädlingsschutz", calories_per_100g: 348, category: "Getreide", priority: "hoch" },
  { name: "Mehl, Roggenmehl Type 1150", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, Schädlingsschutz", calories_per_100g: 326, category: "Getreide", priority: "mittel" },
  { name: "Mehl, Dinkelmehl Type 630", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, Schädlingsschutz", calories_per_100g: 348, category: "Getreide", priority: "mittel" },
  { name: "Maismehl / Maisstärke", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 361, category: "Getreide", priority: "mittel" },
  { name: "Knäckebrot", shelf_life: "1-2 Jahre", storage: "Trocken, original verpackt", calories_per_100g: 334, category: "Getreide", priority: "mittel" },
  { name: "Zwieback", shelf_life: "1-2 Jahre", storage: "Trocken, original verpackt", calories_per_100g: 401, category: "Getreide", priority: "mittel" },
  { name: "Couscous", shelf_life: "3-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 353, category: "Getreide", priority: "mittel" },
  { name: "Bulgur", shelf_life: "3-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 343, category: "Getreide", priority: "mittel" },
  { name: "Polenta / Maisgrieß", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 350, category: "Getreide", priority: "mittel" },
  { name: "Griess, Weizengrieß", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 345, category: "Getreide", priority: "mittel" },
  { name: "Hirse", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 378, category: "Getreide", priority: "mittel" },
  { name: "Quinoa", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 370, category: "Getreide", priority: "hoch" },
  { name: "Amaranth", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 370, category: "Getreide", priority: "mittel" },
  { name: "Buchweizen", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 340, category: "Getreide", priority: "mittel" },
  { name: "Pumpernickel (vakuumiert)", shelf_life: "1-2 Jahre", storage: "Original verpackt, trocken", calories_per_100g: 181, category: "Getreide", priority: "mittel" },
  { name: "Dosenbrot (Vollkorn)", shelf_life: "2-10 Jahre", storage: "Kühl, trocken", calories_per_100g: 200, category: "Getreide", priority: "hoch" },
  { name: "Hartkekse (Panzerplatten)", shelf_life: "5-10 Jahre", storage: "Trocken", calories_per_100g: 433, category: "Getreide", priority: "hoch" },
  { name: "Cracker / Salzstangen", shelf_life: "6-12 Monate", storage: "Trocken, luftdicht", calories_per_100g: 440, category: "Getreide", priority: "niedrig" },
  { name: "Paniermehl / Semmelbrösel", shelf_life: "1-2 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 395, category: "Getreide", priority: "niedrig" },
  { name: "Cornflakes / Cerealien", shelf_life: "6-12 Monate", storage: "Trocken, luftdicht", calories_per_100g: 378, category: "Getreide", priority: "niedrig" },
  { name: "Kartoffelpüree, Pulver", shelf_life: "2-3 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 340, category: "Getreide", priority: "hoch" },
  { name: "Kartoffeln, getrocknet (Flocken)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 345, category: "Getreide", priority: "mittel" },
  { name: "Speisestärke (Maisstärke)", shelf_life: "3-5 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 365, category: "Getreide", priority: "mittel" },

  // ========== KONSERVEN FLEISCH & FISCH (BLS 4.0: F/J-Gruppen) ==========
  { name: "Corned Beef (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 146, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Dosenwurst, Bratwurst", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 244, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Dosenwurst, Bockwurst", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 275, category: "Konserven Fleisch", priority: "mittel" },
  { name: "Dosenwurst, Wiener", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 250, category: "Konserven Fleisch", priority: "mittel" },
  { name: "Dosenwurst, Leberwurst", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 320, category: "Konserven Fleisch", priority: "mittel" },
  { name: "Gulasch (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 115, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Huhn in Gelee (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 140, category: "Konserven Fleisch", priority: "mittel" },
  { name: "Thunfisch in Öl (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 189, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Thunfisch in Wasser (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 103, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Sardinen in Öl (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 220, category: "Konserven Fleisch", priority: "hoch" },
  { name: "Makrele in Tomatensoße (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 156, category: "Konserven Fleisch", priority: "mittel" },
  { name: "Hering in Öl / Sauce (Dose)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 185, category: "Konserven Fleisch", priority: "mittel" },

  // ========== KONSERVEN GEMUESE & OBST (BLS 4.0: G-Gruppe) ==========
  { name: "Erbsen (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 72, category: "Konserven Gemüse", priority: "hoch" },
  { name: "Bohnen, weiss (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 95, category: "Konserven Gemüse", priority: "hoch" },
  { name: "Kidneybohnen (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 95, category: "Konserven Gemüse", priority: "hoch" },
  { name: "Kichererbsen (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 115, category: "Konserven Gemüse", priority: "hoch" },
  { name: "Mais (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 76, category: "Konserven Gemüse", priority: "mittel" },
  { name: "Karotten / Möhren (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 25, category: "Konserven Gemüse", priority: "mittel" },
  { name: "Tomaten, geschält (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 24, category: "Konserven Gemüse", priority: "hoch" },
  { name: "Tomatenmark (Dose/Tube)", shelf_life: "2-3 Jahre", storage: "Kühl, trocken", calories_per_100g: 90, category: "Konserven Gemüse", priority: "mittel" },
  { name: "Sauerkraut (Dose/Glas)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 17, category: "Konserven Gemüse", priority: "mittel" },
  { name: "Rotkohl (Glas)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 40, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Rote Bete (Glas)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 30, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Gurken, Gewürzgurken (Glas)", shelf_life: "2-3 Jahre", storage: "Kühl, trocken", calories_per_100g: 11, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Champignons (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 12, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Pfirsiche (Dose)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 60, category: "Konserven Gemüse", priority: "mittel" },
  { name: "Ananas (Dose)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 60, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Mandarinen (Dose)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 50, category: "Konserven Gemüse", priority: "niedrig" },
  { name: "Apfelmus (Glas)", shelf_life: "2-3 Jahre", storage: "Kühl, trocken", calories_per_100g: 68, category: "Konserven Gemüse", priority: "mittel" },

  // ========== KONSERVEN FERTIGGERICHTE ==========
  { name: "Eintopf, Linsen (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 95, category: "Konserven Fertig", priority: "hoch" },
  { name: "Eintopf, Erbsen (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 128, category: "Konserven Fertig", priority: "hoch" },
  { name: "Gulaschsuppe (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 80, category: "Konserven Fertig", priority: "mittel" },
  { name: "Ravioli (Dose)", shelf_life: "2-4 Jahre", storage: "Kühl, trocken", calories_per_100g: 100, category: "Konserven Fertig", priority: "mittel" },
  { name: "Chili con Carne (Dose)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken", calories_per_100g: 105, category: "Konserven Fertig", priority: "mittel" },
  { name: "Kokosmilch (Dose)", shelf_life: "2-3 Jahre", storage: "Kühl, trocken", calories_per_100g: 180, category: "Konserven Fertig", priority: "niedrig" },

  // ========== HÜLSENFRÜCHTE, trocken (BLS 4.0: H-Gruppe) ==========
  { name: "Rote Linsen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 348, category: "Hülsenfrüchte", priority: "hoch" },
  { name: "Braune Linsen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 352, category: "Hülsenfrüchte", priority: "hoch" },
  { name: "Kidney-Bohnen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 333, category: "Hülsenfrüchte", priority: "hoch" },
  { name: "Weiße Bohnen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 336, category: "Hülsenfrüchte", priority: "hoch" },
  { name: "Schwarze Bohnen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 341, category: "Hülsenfrüchte", priority: "mittel" },
  { name: "Erbsen, gelb, trocken", shelf_life: "5-8 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 340, category: "Hülsenfrüchte", priority: "mittel" },
  { name: "Kichererbsen, trocken", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 364, category: "Hülsenfrüchte", priority: "hoch" },
  { name: "Sojabohnen, trocken", shelf_life: "5-8 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 446, category: "Hülsenfrüchte", priority: "mittel" },
  { name: "Soja-Granulat (TVP)", shelf_life: "3-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 330, category: "Hülsenfrüchte", priority: "hoch" },

  // ========== NÜSSE & SAMEN (BLS 4.0: H-Gruppe) ==========
  { name: "Erdnüsse, geröstet", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 585, category: "Nüsse", priority: "hoch" },
  { name: "Mandeln", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 575, category: "Nüsse", priority: "hoch" },
  { name: "Walnüsse", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 654, category: "Nüsse", priority: "hoch" },
  { name: "Haselnüsse", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 628, category: "Nüsse", priority: "mittel" },
  { name: "Cashewkerne", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 572, category: "Nüsse", priority: "mittel" },
  { name: "Paranüsse", shelf_life: "6 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 659, category: "Nüsse", priority: "niedrig" },
  { name: "Macadamia", shelf_life: "6 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 718, category: "Nüsse", priority: "niedrig" },
  { name: "Sonnenblumenkerne", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 584, category: "Nüsse", priority: "mittel" },
  { name: "Kürbiskerne", shelf_life: "6-12 Monate", storage: "Kühl, trocken, luftdicht", calories_per_100g: 559, category: "Nüsse", priority: "mittel" },
  { name: "Leinsamen", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 534, category: "Nüsse", priority: "mittel" },
  { name: "Chiasamen", shelf_life: "2-4 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 486, category: "Nüsse", priority: "hoch" },
  { name: "Sesam", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 570, category: "Nüsse", priority: "niedrig" },
  { name: "Kokosraspeln", shelf_life: "6-12 Monate", storage: "Trocken, luftdicht", calories_per_100g: 635, category: "Nüsse", priority: "niedrig" },
  { name: "Erdnussbutter / Erdnussmus", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 588, category: "Nüsse", priority: "hoch" },
  { name: "Mandelmus", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 614, category: "Nüsse", priority: "mittel" },

  // ========== TROCKENFRÜCHTE (BLS 4.0: D-Gruppe) ==========
  { name: "Rosinen / Sultaninen", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 302, category: "Trockenfrüchte", priority: "hoch" },
  { name: "Datteln, getrocknet", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 282, category: "Trockenfrüchte", priority: "hoch" },
  { name: "Feigen, getrocknet", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 250, category: "Trockenfrüchte", priority: "mittel" },
  { name: "Aprikosen, getrocknet", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 280, category: "Trockenfrüchte", priority: "mittel" },
  { name: "Pflaumen, getrocknet", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 240, category: "Trockenfrüchte", priority: "mittel" },
  { name: "Cranberries, getrocknet", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 312, category: "Trockenfrüchte", priority: "niedrig" },
  { name: "Bananenchips", shelf_life: "1-2 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 520, category: "Trockenfrüchte", priority: "niedrig" },

  // ========== FETTE & ÖLE (BLS 4.0: P-Gruppe) ==========
  { name: "Sonnenblumenöl", shelf_life: "1-2 Jahre", storage: "Dunkel, kühl", calories_per_100g: 884, category: "Fette", priority: "hoch" },
  { name: "Rapsöl", shelf_life: "1-2 Jahre", storage: "Dunkel, kühl", calories_per_100g: 884, category: "Fette", priority: "hoch" },
  { name: "Olivenöl, extra vergine", shelf_life: "1.5-2 Jahre", storage: "Dunkel, kühl", calories_per_100g: 884, category: "Fette", priority: "mittel" },
  { name: "Ghee / Butterschmalz", shelf_life: "2-3 Jahre", storage: "Kühl, dunkel, luftdicht", calories_per_100g: 897, category: "Fette", priority: "hoch" },
  { name: "Kokosöl / Kokosfett", shelf_life: "2-4 Jahre", storage: "Kühl, dunkel", calories_per_100g: 870, category: "Fette", priority: "mittel" },
  { name: "Schweineschmalz", shelf_life: "1-2 Jahre", storage: "Kühl, dunkel, luftdicht", calories_per_100g: 895, category: "Fette", priority: "mittel" },
  { name: "Margarine (Becher)", shelf_life: "6-9 Monate", storage: "Kühl", calories_per_100g: 720, category: "Fette", priority: "niedrig" },

  // ========== ZUCKER & SÜSSES (BLS 4.0: S-Gruppe) ==========
  { name: "Zucker, weiss", shelf_life: "Unbegrenzt", storage: "Trocken, luftdicht", calories_per_100g: 405, category: "Süßes", priority: "hoch" },
  { name: "Zucker, braun", shelf_life: "Unbegrenzt", storage: "Trocken, luftdicht", calories_per_100g: 380, category: "Süßes", priority: "mittel" },
  { name: "Honig", shelf_life: "Unbegrenzt", storage: "Trocken, verschlossen", calories_per_100g: 304, category: "Süßes", priority: "hoch" },
  { name: "Ahornsirup", shelf_life: "3-4 Jahre", storage: "Kühl, dunkel", calories_per_100g: 260, category: "Süßes", priority: "niedrig" },
  { name: "Marmelade / Konfiture", shelf_life: "2-3 Jahre", storage: "Kühl, dunkel", calories_per_100g: 250, category: "Süßes", priority: "mittel" },
  { name: "Schokolade, Zartbitter 70%", shelf_life: "2 Jahre", storage: "Kühl, trocken", calories_per_100g: 586, category: "Süßes", priority: "mittel" },
  { name: "Schokolade, Vollmilch", shelf_life: "1-1.5 Jahre", storage: "Kühl, trocken", calories_per_100g: 535, category: "Süßes", priority: "niedrig" },
  { name: "Müsliriegel", shelf_life: "6-12 Monate", storage: "Kühl, trocken", calories_per_100g: 450, category: "Süßes", priority: "mittel" },
  { name: "Energieriegel (Hafer)", shelf_life: "6-12 Monate", storage: "Kühl, trocken", calories_per_100g: 420, category: "Süßes", priority: "mittel" },
  { name: "Traubenzucker (Dextrose)", shelf_life: "3-5 Jahre", storage: "Trocken", calories_per_100g: 370, category: "Süßes", priority: "mittel" },
  { name: "Butterkekse", shelf_life: "6-12 Monate", storage: "Trocken", calories_per_100g: 450, category: "Süßes", priority: "niedrig" },
  { name: "Fruchtgelee", shelf_life: "1-2 Jahre", storage: "Kühl nach Öffnen", calories_per_100g: 260, category: "Süßes", priority: "niedrig" },

  // ========== MILCHPRODUKTE, haltbar (BLS 4.0: M-Gruppe) ==========
  { name: "H-Milch 3,5%", shelf_life: "3-6 Monate", storage: "Ungekühlt bis zum Öffnen", calories_per_100g: 64, category: "Milchprodukte", priority: "mittel" },
  { name: "H-Milch 1,5%", shelf_life: "3-6 Monate", storage: "Ungekühlt bis zum Öffnen", calories_per_100g: 47, category: "Milchprodukte", priority: "mittel" },
  { name: "Milchpulver, Vollmilch", shelf_life: "2-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 497, category: "Milchprodukte", priority: "hoch" },
  { name: "Milchpulver, Magermilch", shelf_life: "3-5 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 355, category: "Milchprodukte", priority: "hoch" },
  { name: "Kondensmilch 7,5% (Dose)", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 131, category: "Milchprodukte", priority: "mittel" },
  { name: "Kondensmilch 10% (Dose)", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 177, category: "Milchprodukte", priority: "mittel" },
  { name: "Parmesan, vakuumiert", shelf_life: "6-12 Monate", storage: "Kühl", calories_per_100g: 392, category: "Milchprodukte", priority: "mittel" },
  { name: "Hartkäse, vakuumiert", shelf_life: "6-12 Monate", storage: "Kühl", calories_per_100g: 400, category: "Milchprodukte", priority: "niedrig" },
  { name: "Schmelzkäse (Portion)", shelf_life: "6-9 Monate", storage: "Kühl", calories_per_100g: 305, category: "Milchprodukte", priority: "niedrig" },
  { name: "H-Sahne", shelf_life: "3-6 Monate", storage: "Ungekühlt bis zum Öffnen", calories_per_100g: 310, category: "Milchprodukte", priority: "niedrig" },

  // ========== WURST & FLEISCH, haltbar (BLS 4.0: F-Gruppe) ==========
  { name: "Kabanossi / Trockenwurst", shelf_life: "3-6 Monate", storage: "Kühl, trocken", calories_per_100g: 305, category: "Wurst", priority: "mittel" },
  { name: "Salami, vakuumiert", shelf_life: "3-6 Monate", storage: "Kühl", calories_per_100g: 397, category: "Wurst", priority: "mittel" },
  { name: "Landjäger", shelf_life: "3-6 Monate", storage: "Kühl, trocken", calories_per_100g: 340, category: "Wurst", priority: "mittel" },
  { name: "Beef Jerky / Trockenfleisch", shelf_life: "1-2 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 250, category: "Wurst", priority: "hoch" },
  { name: "Pemmikan (Trockenfleisch+Fett)", shelf_life: "5-10 Jahre", storage: "Kühl, trocken, vakuum", calories_per_100g: 520, category: "Wurst", priority: "hoch" },

  // ========== FERTIGPRODUKTE & INSTANT (BLS 4.0: W-Gruppe) ==========
  { name: "Instantsuppen (Tütensuppe)", shelf_life: "1-2 Jahre", storage: "Trocken", calories_per_100g: 380, category: "Fertigprodukte", priority: "hoch" },
  { name: "Instantnudeln (Ramen)", shelf_life: "1-2 Jahre", storage: "Trocken", calories_per_100g: 440, category: "Fertigprodukte", priority: "mittel" },
  { name: "Nudeln mit Soße, Fertigmix", shelf_life: "1-2 Jahre", storage: "Trocken", calories_per_100g: 370, category: "Fertigprodukte", priority: "mittel" },
  { name: "Eipulver / Volleipulver", shelf_life: "3-10 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 580, category: "Fertigprodukte", priority: "hoch" },
  { name: "Brühwürfel / Instant-Brühe", shelf_life: "1-2 Jahre", storage: "Trocken", calories_per_100g: 149, category: "Fertigprodukte", priority: "hoch" },
  { name: "Soßenpulver (dunkel/hell)", shelf_life: "1-2 Jahre", storage: "Trocken", calories_per_100g: 350, category: "Fertigprodukte", priority: "niedrig" },
  { name: "Trockenhefe", shelf_life: "1-2 Jahre", storage: "Kühl, trocken", calories_per_100g: 288, category: "Fertigprodukte", priority: "mittel" },
  { name: "Backpulver", shelf_life: "Unbegrenzt", storage: "Trocken, verschlossen", calories_per_100g: 53, category: "Fertigprodukte", priority: "mittel" },
  { name: "Natron (Speisenatron)", shelf_life: "Unbegrenzt", storage: "Trocken", calories_per_100g: 0, category: "Fertigprodukte", priority: "mittel" },
  { name: "Kakaopulver (ungezuckert)", shelf_life: "2-3 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 390, category: "Fertigprodukte", priority: "mittel" },

  // ========== GEWÜRZE & WÜRZMITTEL (BLS 4.0: R-Gruppe) ==========
  { name: "Salz (Speisesalz)", shelf_life: "Unbegrenzt", storage: "Trocken", calories_per_100g: 0, category: "Gewürze", priority: "hoch" },
  { name: "Pfeffer, schwarz, ganz", shelf_life: "Unbegrenzt", storage: "Trocken, dunkel", calories_per_100g: 255, category: "Gewürze", priority: "mittel" },
  { name: "Paprikapulver", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel", calories_per_100g: 282, category: "Gewürze", priority: "niedrig" },
  { name: "Currypulver", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel", calories_per_100g: 325, category: "Gewürze", priority: "niedrig" },
  { name: "Zimt", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel", calories_per_100g: 247, category: "Gewürze", priority: "niedrig" },
  { name: "Oregano, getrocknet", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel", calories_per_100g: 265, category: "Gewürze", priority: "niedrig" },
  { name: "Essig (Branntweinessig)", shelf_life: "Unbegrenzt", storage: "Dunkel, verschlossen", calories_per_100g: 20, category: "Gewürze", priority: "mittel" },
  { name: "Senf", shelf_life: "1-2 Jahre", storage: "Kühl nach Öffnen", calories_per_100g: 80, category: "Gewürze", priority: "niedrig" },
  { name: "Sojasoße", shelf_life: "2-3 Jahre", storage: "Kühl nach Öffnen", calories_per_100g: 60, category: "Gewürze", priority: "niedrig" },
  { name: "Ketchup", shelf_life: "1-2 Jahre", storage: "Kühl nach Öffnen", calories_per_100g: 100, category: "Gewürze", priority: "niedrig" },

  // ========== GETRÄNKE (BLS 4.0: N-Gruppe) ==========
  { name: "Tee, schwarz (lose)", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel, luftdicht", calories_per_100g: 0, category: "Getränke", priority: "mittel" },
  { name: "Tee, Kräutertee", shelf_life: "1-2 Jahre", storage: "Trocken, dunkel, luftdicht", calories_per_100g: 0, category: "Getränke", priority: "mittel" },
  { name: "Kaffee, vakuumiert", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 0, category: "Getränke", priority: "niedrig" },
  { name: "Instantkaffee", shelf_life: "2-5 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 0, category: "Getränke", priority: "niedrig" },
  { name: "Kakao, Instant (Pulver)", shelf_life: "1-2 Jahre", storage: "Trocken, luftdicht", calories_per_100g: 390, category: "Getränke", priority: "niedrig" },
  { name: "Multivitaminsaft (Tetra)", shelf_life: "6-12 Monate", storage: "Kühl, dunkel", calories_per_100g: 45, category: "Getränke", priority: "mittel" },
  { name: "Elektrolyt-Pulver", shelf_life: "2-3 Jahre", storage: "Trocken", calories_per_100g: 350, category: "Getränke", priority: "hoch" },

  // ========== SPEZIAL / NOTNAHRUNG ==========
  { name: "NRG-5 Notfallriegel", shelf_life: "15-20 Jahre", storage: "Trocken, Raumtemperatur", calories_per_100g: 460, category: "Notnahrung", priority: "hoch" },
  { name: "BP-WR Notfallnahrung", shelf_life: "7-10 Jahre", storage: "Trocken, Raumtemperatur", calories_per_100g: 486, category: "Notnahrung", priority: "hoch" },
  { name: "Seven OceanS Notration", shelf_life: "5 Jahre", storage: "Trocken, Raumtemperatur", calories_per_100g: 484, category: "Notnahrung", priority: "hoch" },
  { name: "Gefriergetrocknete Mahlzeiten", shelf_life: "10-25 Jahre", storage: "Kühl, trocken", calories_per_100g: 400, category: "Notnahrung", priority: "hoch" },
  { name: "Proteinpulver (Whey)", shelf_life: "1-2 Jahre", storage: "Kühl, trocken, luftdicht", calories_per_100g: 380, category: "Notnahrung", priority: "mittel" },
  { name: "Vitaminpräparate (Tabletten)", shelf_life: "2-3 Jahre", storage: "Trocken, dunkel", calories_per_100g: 0, category: "Notnahrung", priority: "hoch" },
  { name: "Glucosegel (Energie)", shelf_life: "1-2 Jahre", storage: "Kühl", calories_per_100g: 280, category: "Notnahrung", priority: "mittel" },
];

// --- EINKAUFSLISTEN ---
export interface ShoppingList {
  title: string;
  description: string;
  people: string;
  duration: string;
  items: { name: string; amount: string; category: string }[];
}

export const shoppingLists: ShoppingList[] = [
  {
    title: "1 Person - 14 Tage",
    description: "Notvorrat für eine Einzelperson",
    people: "1",
    duration: "14 Tage",
    items: [
      { name: "Wasser (Flaschen/Kanister)", amount: "35 Liter", category: "Wasser" },
      { name: "Wasserentkeimungstabletten", amount: "1 Packung", category: "Wasser" },
      { name: "Reis", amount: "3 kg", category: "Grundnahrung" },
      { name: "Nudeln", amount: "2,5 kg", category: "Grundnahrung" },
      { name: "Haferflocken", amount: "1,5 kg", category: "Grundnahrung" },
      { name: "Knäckebrot", amount: "4 Packungen", category: "Grundnahrung" },
      { name: "Dosensuppen / Eintöpfe", amount: "8 Dosen", category: "Konserven" },
      { name: "Dosenfleisch (Corned Beef etc.)", amount: "4 Dosen", category: "Konserven" },
      { name: "Dosenfisch (Thunfisch/Makrele)", amount: "4 Dosen", category: "Konserven" },
      { name: "Dosengemüse (Erbsen, Mais, Bohnen)", amount: "6 Dosen", category: "Konserven" },
      { name: "Dosenobst", amount: "3 Dosen", category: "Konserven" },
      { name: "Tomatenmark", amount: "3 Tuben", category: "Konserven" },
      { name: "Linsen (trocken)", amount: "1 kg", category: "Hülsenfrüchte" },
      { name: "Bohnen (trocken)", amount: "500g", category: "Hülsenfrüchte" },
      { name: "Speiseöl", amount: "1 Liter", category: "Fette" },
      { name: "Zucker", amount: "1 kg", category: "Süßes" },
      { name: "Honig", amount: "500g", category: "Süßes" },
      { name: "Müsliriegel", amount: "10 Stück", category: "Süßes" },
      { name: "Schokolade", amount: "3 Tafeln", category: "Süßes" },
      { name: "Erdnussbutter", amount: "1 Glas", category: "Süßes" },
      { name: "H-Milch", amount: "4 Liter", category: "Milchprodukte" },
      { name: "Milchpulver", amount: "500g", category: "Milchprodukte" },
      { name: "Salz", amount: "500g", category: "Gewürze" },
      { name: "Pfeffer", amount: "1 Dose", category: "Gewürze" },
      { name: "Brühwürfel", amount: "20 Stück", category: "Gewürze" },
      { name: "Tee (Beutel)", amount: "2 Packungen", category: "Getränke" },
      { name: "Kaffee / Instantkaffee", amount: "1 Packung", category: "Getränke" },
      { name: "NRG-5 oder BP-WR", amount: "2 Packungen", category: "Notnahrung" },
      { name: "Nüsse & Trockenfrüchte", amount: "500g", category: "Notnahrung" },
      // Hygiene
      { name: "Toilettenpapier", amount: "14 Rollen", category: "Hygiene" },
      { name: "Feuchttücher", amount: "2 Packungen", category: "Hygiene" },
      { name: "Seife (Stückseife)", amount: "2 Stück", category: "Hygiene" },
      { name: "Handdesinfektionsmittel", amount: "1 Flasche", category: "Hygiene" },
      { name: "Zahnbürste + Zahnpasta", amount: "1 Set", category: "Hygiene" },
      { name: "Müllbeutel (groß)", amount: "1 Rolle", category: "Hygiene" },
      { name: "Damenhygiene / Windeln", amount: "nach Bedarf", category: "Hygiene" },
      // Erste Hilfe
      { name: "Pflaster-Set", amount: "1 Packung", category: "Erste Hilfe" },
      { name: "Sterile Kompressen", amount: "5 Stück", category: "Erste Hilfe" },
      { name: "Mullbinden", amount: "2 Rollen", category: "Erste Hilfe" },
      { name: "Wunddesinfektionsmittel", amount: "1 Flasche", category: "Erste Hilfe" },
      { name: "Schmerzmittel (Ibuprofen)", amount: "1 Packung", category: "Erste Hilfe" },
      { name: "Rettungsdecke", amount: "2 Stück", category: "Erste Hilfe" },
      { name: "Persönliche Medikamente", amount: "30 Tage", category: "Erste Hilfe" },
      // Ausrüstung
      { name: "Taschenlampe + Batterien", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Kurbelradio", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Powerbank (20.000mAh)", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Campingkocher + Kartuschen", amount: "1 Set + 5 Stk", category: "Ausrüstung" },
      { name: "Feuerzeug / Streichhölzer", amount: "3 Stück", category: "Ausrüstung" },
      { name: "Dosenöffner (manuell)", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Kerzen + Teelichter", amount: "10 + 20 Stk", category: "Ausrüstung" },
      { name: "Multitool / Taschenmesser", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Schlafsack", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Bargeld (kleine Scheine)", amount: "200 EUR", category: "Ausrüstung" },
    ],
  },
  {
    title: "2 Personen - 14 Tage",
    description: "Notvorrat für ein Paar oder Duo",
    people: "2",
    duration: "14 Tage",
    items: [
      { name: "Wasser (Flaschen/Kanister)", amount: "70 Liter", category: "Wasser" },
      { name: "Wasserentkeimungstabletten", amount: "2 Packungen", category: "Wasser" },
      { name: "Reis", amount: "6 kg", category: "Grundnahrung" },
      { name: "Nudeln", amount: "5 kg", category: "Grundnahrung" },
      { name: "Haferflocken", amount: "3 kg", category: "Grundnahrung" },
      { name: "Knäckebrot", amount: "8 Packungen", category: "Grundnahrung" },
      { name: "Mehl", amount: "2 kg", category: "Grundnahrung" },
      { name: "Dosensuppen / Eintöpfe", amount: "14 Dosen", category: "Konserven" },
      { name: "Dosenfleisch", amount: "8 Dosen", category: "Konserven" },
      { name: "Dosenfisch", amount: "8 Dosen", category: "Konserven" },
      { name: "Dosengemüse", amount: "12 Dosen", category: "Konserven" },
      { name: "Dosenobst", amount: "6 Dosen", category: "Konserven" },
      { name: "Tomatenmark", amount: "5 Tuben", category: "Konserven" },
      { name: "Linsen (trocken)", amount: "2 kg", category: "Hülsenfrüchte" },
      { name: "Bohnen (trocken)", amount: "1 kg", category: "Hülsenfrüchte" },
      { name: "Kichererbsen (trocken)", amount: "1 kg", category: "Hülsenfrüchte" },
      { name: "Speiseöl", amount: "2 Liter", category: "Fette" },
      { name: "Ghee / Butterschmalz", amount: "500g", category: "Fette" },
      { name: "Zucker", amount: "2 kg", category: "Süßes" },
      { name: "Honig", amount: "1 kg", category: "Süßes" },
      { name: "Marmelade", amount: "2 Gläser", category: "Süßes" },
      { name: "Müsliriegel", amount: "20 Stück", category: "Süßes" },
      { name: "Schokolade", amount: "6 Tafeln", category: "Süßes" },
      { name: "Erdnussbutter", amount: "2 Gläser", category: "Süßes" },
      { name: "H-Milch", amount: "8 Liter", category: "Milchprodukte" },
      { name: "Milchpulver", amount: "1 kg", category: "Milchprodukte" },
      { name: "Salz", amount: "1 kg", category: "Gewürze" },
      { name: "Pfeffer", amount: "1 Dose", category: "Gewürze" },
      { name: "Brühwürfel", amount: "40 Stück", category: "Gewürze" },
      { name: "Essig", amount: "1 Flasche", category: "Gewürze" },
      { name: "Tee (Beutel)", amount: "4 Packungen", category: "Getränke" },
      { name: "Kaffee / Instantkaffee", amount: "2 Packungen", category: "Getränke" },
      { name: "NRG-5 oder BP-WR", amount: "4 Packungen", category: "Notnahrung" },
      { name: "Nüsse & Trockenfrüchte", amount: "1 kg", category: "Notnahrung" },
      // Hygiene
      { name: "Toilettenpapier", amount: "28 Rollen", category: "Hygiene" },
      { name: "Feuchttücher", amount: "4 Packungen", category: "Hygiene" },
      { name: "Seife (Stückseife)", amount: "4 Stück", category: "Hygiene" },
      { name: "Handdesinfektionsmittel", amount: "2 Flaschen", category: "Hygiene" },
      { name: "Zahnbürste + Zahnpasta", amount: "2 Sets + 2 Tuben", category: "Hygiene" },
      { name: "Müllbeutel (groß)", amount: "2 Rollen", category: "Hygiene" },
      { name: "Campingtoilette / Eimer", amount: "1 Stück", category: "Hygiene" },
      { name: "Damenhygiene / Windeln", amount: "nach Bedarf", category: "Hygiene" },
      // Erste Hilfe
      { name: "Pflaster-Set", amount: "1 Packung", category: "Erste Hilfe" },
      { name: "Sterile Kompressen", amount: "10 Stück", category: "Erste Hilfe" },
      { name: "Mullbinden + Elastikbinden", amount: "4 Rollen + 2", category: "Erste Hilfe" },
      { name: "Wunddesinfektionsmittel", amount: "1 Flasche", category: "Erste Hilfe" },
      { name: "Schmerzmittel (Ibuprofen)", amount: "2 Packungen", category: "Erste Hilfe" },
      { name: "Durchfallmittel", amount: "1 Packung", category: "Erste Hilfe" },
      { name: "Rettungsdecke", amount: "4 Stück", category: "Erste Hilfe" },
      { name: "Persönliche Medikamente", amount: "30 Tage", category: "Erste Hilfe" },
      // Ausrüstung
      { name: "Taschenlampe + Stirnlampe", amount: "je 1 Stück", category: "Ausrüstung" },
      { name: "Kurbelradio", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Powerbank (20.000mAh)", amount: "2 Stück", category: "Ausrüstung" },
      { name: "Campingkocher + Kartuschen", amount: "1 Set + 10 Stk", category: "Ausrüstung" },
      { name: "Feuerzeug / Streichhölzer", amount: "5 Stück", category: "Ausrüstung" },
      { name: "Dosenöffner (manuell)", amount: "2 Stück", category: "Ausrüstung" },
      { name: "Kerzen + Teelichter", amount: "15 + 30 Stk", category: "Ausrüstung" },
      { name: "Multitool / Taschenmesser", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Schlafsäcke", amount: "2 Stück", category: "Ausrüstung" },
      { name: "Wolldecken", amount: "2 Stück", category: "Ausrüstung" },
      { name: "Bargeld (kleine Scheine)", amount: "300 EUR", category: "Ausrüstung" },
    ],
  },
  {
    title: "Familie (2 Erw. + 3 Kinder) - 14 Tage",
    description: "Notvorrat für deine Familie mit 3 Kindern",
    people: "5",
    duration: "14 Tage",
    items: [
      { name: "Wasser (Flaschen/Kanister)", amount: "133 Liter", category: "Wasser" },
      { name: "Wasserentkeimungstabletten", amount: "3 Packungen", category: "Wasser" },
      { name: "Wasserfilter (z.B. Sawyer Mini)", amount: "1 Stück", category: "Wasser" },
      { name: "Reis", amount: "10 kg", category: "Grundnahrung" },
      { name: "Nudeln", amount: "8 kg", category: "Grundnahrung" },
      { name: "Haferflocken", amount: "5 kg", category: "Grundnahrung" },
      { name: "Knäckebrot", amount: "12 Packungen", category: "Grundnahrung" },
      { name: "Mehl", amount: "5 kg", category: "Grundnahrung" },
      { name: "Zwieback", amount: "4 Packungen", category: "Grundnahrung" },
      { name: "Couscous", amount: "2 kg", category: "Grundnahrung" },
      { name: "Dosensuppen / Eintöpfe", amount: "24 Dosen", category: "Konserven" },
      { name: "Dosenfleisch", amount: "12 Dosen", category: "Konserven" },
      { name: "Dosenfisch", amount: "12 Dosen", category: "Konserven" },
      { name: "Dosengemüse", amount: "20 Dosen", category: "Konserven" },
      { name: "Dosenobst", amount: "10 Dosen", category: "Konserven" },
      { name: "Tomatenmark", amount: "8 Tuben", category: "Konserven" },
      { name: "Kokosmilch (Dose)", amount: "4 Dosen", category: "Konserven" },
      { name: "Linsen (trocken)", amount: "3 kg", category: "Hülsenfrüchte" },
      { name: "Bohnen (trocken)", amount: "2 kg", category: "Hülsenfrüchte" },
      { name: "Kichererbsen (trocken)", amount: "2 kg", category: "Hülsenfrüchte" },
      { name: "Erbsen (trocken)", amount: "1 kg", category: "Hülsenfrüchte" },
      { name: "Speiseöl", amount: "3 Liter", category: "Fette" },
      { name: "Ghee / Butterschmalz", amount: "1 kg", category: "Fette" },
      { name: "Zucker", amount: "3 kg", category: "Süßes" },
      { name: "Honig", amount: "1,5 kg", category: "Süßes" },
      { name: "Marmelade", amount: "4 Gläser", category: "Süßes" },
      { name: "Müsliriegel", amount: "40 Stück", category: "Süßes" },
      { name: "Schokolade", amount: "10 Tafeln", category: "Süßes" },
      { name: "Erdnussbutter", amount: "3 Gläser", category: "Süßes" },
      { name: "Nuss-Nougat-Creme", amount: "2 Gläser", category: "Süßes" },
      { name: "Kekse", amount: "5 Packungen", category: "Süßes" },
      { name: "H-Milch", amount: "14 Liter", category: "Milchprodukte" },
      { name: "Milchpulver", amount: "2 kg", category: "Milchprodukte" },
      { name: "Kondensmilch", amount: "6 Dosen", category: "Milchprodukte" },
      { name: "Salz", amount: "2 kg", category: "Gewürze" },
      { name: "Pfeffer", amount: "2 Dosen", category: "Gewürze" },
      { name: "Brühwürfel", amount: "60 Stück", category: "Gewürze" },
      { name: "Essig", amount: "1 Flasche", category: "Gewürze" },
      { name: "Backpulver", amount: "3 Packungen", category: "Gewürze" },
      { name: "Trockenhefe", amount: "5 Packungen", category: "Gewürze" },
      { name: "Tee (Beutel)", amount: "6 Packungen", category: "Getränke" },
      { name: "Kaffee / Instantkaffee", amount: "2 Packungen", category: "Getränke" },
      { name: "Kakao-Pulver", amount: "2 Packungen", category: "Getränke" },
      { name: "Saft (haltbar)", amount: "6 Liter", category: "Getränke" },
      { name: "NRG-5 oder BP-WR", amount: "6 Packungen", category: "Notnahrung" },
      { name: "Nüsse & Trockenfrüchte", amount: "2 kg", category: "Notnahrung" },
      { name: "Babybrei / Kindernahrung (falls nötig)", amount: "nach Bedarf", category: "Notnahrung" },
      // Hygiene
      { name: "Toilettenpapier", amount: "50+ Rollen", category: "Hygiene" },
      { name: "Feuchttücher", amount: "8 Packungen", category: "Hygiene" },
      { name: "Baby-Feuchttücher", amount: "10 Packungen", category: "Hygiene" },
      { name: "Seife (Stückseife)", amount: "8 Stück", category: "Hygiene" },
      { name: "Handdesinfektionsmittel", amount: "4 Flaschen", category: "Hygiene" },
      { name: "Zahnbürste + Zahnpasta", amount: "5 Sets + 4 Tuben", category: "Hygiene" },
      { name: "Müllbeutel (groß)", amount: "3 Rollen", category: "Hygiene" },
      { name: "Campingtoilette / Eimer", amount: "1 Stück", category: "Hygiene" },
      { name: "Windeln (div. Größen)", amount: "4 Wochen Vorrat", category: "Hygiene" },
      { name: "Damenhygiene-Artikel", amount: "3 Monatsvorräte", category: "Hygiene" },
      { name: "Waschmittel (konzentriert)", amount: "1 Flasche", category: "Hygiene" },
      { name: "Sonnencreme", amount: "1 Tube", category: "Hygiene" },
      // Erste Hilfe
      { name: "Pflaster-Set (groß)", amount: "2 Packungen", category: "Erste Hilfe" },
      { name: "Sterile Kompressen", amount: "15 Stück", category: "Erste Hilfe" },
      { name: "Mullbinden + Elastikbinden", amount: "6 + 4 Rollen", category: "Erste Hilfe" },
      { name: "Dreieckstuch", amount: "3 Stück", category: "Erste Hilfe" },
      { name: "Wunddesinfektionsmittel", amount: "2 Flaschen", category: "Erste Hilfe" },
      { name: "Schmerzmittel Erwachsene", amount: "3 Packungen", category: "Erste Hilfe" },
      { name: "Kinderschmerzmittel (Saft)", amount: "2 Flaschen", category: "Erste Hilfe" },
      { name: "Fieberzäpfchen", amount: "2 Packungen", category: "Erste Hilfe" },
      { name: "Durchfallmittel + Elektrolyte", amount: "je 2 Packungen", category: "Erste Hilfe" },
      { name: "Rettungsdecke", amount: "6 Stück", category: "Erste Hilfe" },
      { name: "Fieberthermometer", amount: "1 Stück", category: "Erste Hilfe" },
      { name: "Persönliche Medikamente", amount: "30 Tage alle", category: "Erste Hilfe" },
      // Ausrüstung
      { name: "Taschenlampen + Stirnlampen", amount: "3 + 2 Stück", category: "Ausrüstung" },
      { name: "Kurbelradio", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Powerbank (20.000mAh)", amount: "3 Stück", category: "Ausrüstung" },
      { name: "Solar-Ladegerät", amount: "1 Stück", category: "Ausrüstung" },
      { name: "Campingkocher + Kartuschen", amount: "1 Set + 15 Stk", category: "Ausrüstung" },
      { name: "Feuerstarter + Feuerzeuge", amount: "1 + 5 Stück", category: "Ausrüstung" },
      { name: "Dosenöffner (manuell)", amount: "2 Stück", category: "Ausrüstung" },
      { name: "Kerzen + Teelichter", amount: "25 + 50 Stk", category: "Ausrüstung" },
      { name: "Multitool + Beil", amount: "je 1 Stück", category: "Ausrüstung" },
      { name: "Schlafsäcke", amount: "5 Stück", category: "Ausrüstung" },
      { name: "Isomatten", amount: "5 Stück", category: "Ausrüstung" },
      { name: "Wolldecken", amount: "5 Stück", category: "Ausrüstung" },
      { name: "Trillerpfeifen", amount: "5 Stück", category: "Ausrüstung" },
      { name: "Klebeband (Panzerband)", amount: "2 Rollen", category: "Ausrüstung" },
      { name: "Paracord / Seil", amount: "30 Meter", category: "Ausrüstung" },
      { name: "Bargeld (kleine Scheine)", amount: "500 EUR", category: "Ausrüstung" },
    ],
  },
];

// --- ERSTE HILFE ---
export const firstAidKit = {
  title: "Erste-Hilfe-Grundausstattung",
  items: [
    { item: "Pflaster (verschiedene Größen)", amount: "1 Set", priority: "hoch" },
    { item: "Sterile Kompressen (10x10cm)", amount: "10 Stück", priority: "hoch" },
    { item: "Mullbinden", amount: "4 Rollen", priority: "hoch" },
    { item: "Elastische Binden", amount: "2 Rollen", priority: "hoch" },
    { item: "Dreieckstuch", amount: "2 Stück", priority: "hoch" },
    { item: "Wunddesinfektionsmittel", amount: "1 Flasche", priority: "hoch" },
    { item: "Einmalhandschuhe", amount: "10 Paar", priority: "hoch" },
    { item: "Schere (Verbandschere)", amount: "1 Stück", priority: "hoch" },
    { item: "Pinzette", amount: "1 Stück", priority: "mittel" },
    { item: "Rettungsdecke (Silber/Gold)", amount: "3 Stück", priority: "hoch" },
    { item: "Fieberthermometer", amount: "1 Stück", priority: "hoch" },
    { item: "Schmerzmittel (Ibuprofen/Paracetamol)", amount: "2 Packungen", priority: "hoch" },
    { item: "Kinderschmerzmittel (Saft)", amount: "1 Flasche", priority: "hoch" },
    { item: "Durchfallmittel", amount: "1 Packung", priority: "mittel" },
    { item: "Elektrolyt-Pulver", amount: "10 Beutel", priority: "hoch" },
    { item: "Wundheilsalbe", amount: "1 Tube", priority: "mittel" },
    { item: "Brandsalbe", amount: "1 Tube", priority: "mittel" },
    { item: "Antihistaminikum (Allergie)", amount: "1 Packung", priority: "mittel" },
    { item: "Insektenstich-Gel", amount: "1 Tube", priority: "niedrig" },
    { item: "Persönliche Medikamente", amount: "30 Tage Vorrat", priority: "hoch" },
    { item: "Erste-Hilfe-Handbuch", amount: "1 Stück", priority: "mittel" },
    { item: "Zeckenzange", amount: "1 Stück", priority: "mittel" },
  ],
};

// --- WERKZEUGE & AUSRÜSTUNG ---
export const toolsAndEquipment = [
  { category: "Licht", items: [
    { name: "Taschenlampe (LED, robust)", amount: "2 Stück", note: "Mit Ersatzbatterien" },
    { name: "Stirnlampe", amount: "1 pro Person", note: "Hände frei zum Arbeiten" },
    { name: "Kerzen (Stumpenkerzen)", amount: "20 Stück", note: "Lange Brenndauer" },
    { name: "Teelichter", amount: "50 Stück", note: "Günstig, vielseitig" },
    { name: "Streichhölzer / Feuerzeuge", amount: "5 Stück", note: "Wasserdicht aufbewahren" },
    { name: "Petroleumlampe", amount: "1 Stück", note: "Optional, sehr hell" },
  ]},
  { category: "Kochen", items: [
    { name: "Campingkocher (Gas)", amount: "1 Stück", note: "Mit Ersatzkartuschen (10+)" },
    { name: "Gaskartuschen", amount: "10-15 Stück", note: "Stechkartuschen oder Schraubventil" },
    { name: "Feuerstarter (Feuerstahl)", amount: "1 Stück", note: "Funktioniert auch nass" },
    { name: "Kochtopf (Outdoor)", amount: "1 Set", note: "Stapelbar" },
    { name: "Besteck-Set (Camping)", amount: "1 pro Person", note: "Aus Edelstahl" },
    { name: "Dosenöffner", amount: "2 Stück", note: "Manuell, keine Elektrik" },
  ]},
  { category: "Kommunikation", items: [
    { name: "Kurbelradio (mit Taschenlampe)", amount: "1 Stück", note: "AM/FM, USB-Ladefunktion" },
    { name: "PMR446-Funkgeräte", amount: "2-4 Stück", note: "Lizenzfrei, 500m-5km Reichweite, Familien-Set ideal" },
    { name: "Meshtastic-Gerät (LoRa)", amount: "2+ Stück", note: "Mesh-Netzwerk, bis 10km+, kein Internet nötig" },
    { name: "Powerbank (groß, 20.000mAh+)", amount: "2 Stück", note: "Vorher voll laden" },
    { name: "Solar-Ladegerät", amount: "1 Stück", note: "Für längere Ausfälle" },
    { name: "Trillerpfeife", amount: "1 pro Person", note: "Notsignal" },
  ]},
  { category: "Werkzeuge", items: [
    { name: "Multitool / Schweizer Messer", amount: "1 Stück", note: "Qualität zählt" },
    { name: "Klebeband (Panzerband/Duct Tape)", amount: "2 Rollen", note: "Universell einsetzbar" },
    { name: "Kabelbinder (verschiedene Größen)", amount: "1 Packung", note: "Fixieren, befestigen" },
    { name: "Arbeitshandschuhe", amount: "2 Paar", note: "Schutz bei Aufräumarbeiten" },
    { name: "Seil / Paracord", amount: "30 Meter", note: "Belastbar, vielseitig" },
    { name: "Müllsäcke (große)", amount: "20 Stück", note: "Wetterschutz, Abfall, Abdichtung" },
    { name: "Axt / Beil", amount: "1 Stück", note: "Holz für Feuer" },
  ]},
  { category: "Schutz & Wärme", items: [
    { name: "Schlafsack (Komfort 0 Grad C)", amount: "1 pro Person", note: "Auch für drinnen bei Heizungsausfall" },
    { name: "Isomatte", amount: "1 pro Person", note: "Isoliert vom kalten Boden" },
    { name: "Wolldecken", amount: "2 pro Person", note: "Zusätzliche Wärme" },
    { name: "Regenponchos", amount: "1 pro Person", note: "Leicht, kompakt" },
    { name: "Handwärmer (Einweg)", amount: "20 Stück", note: "Für Kinder besonders wichtig" },
  ]},
];

// --- HYGIENE ---
export const hygieneItems = [
  { name: "Toilettenpapier", amount: "2 Rollen pro Person/Woche", priority: "hoch" },
  { name: "Feuchttücher", amount: "5 Packungen", priority: "hoch" },
  { name: "Seife (Stückseife)", amount: "5 Stück", priority: "hoch" },
  { name: "Handdesinfektionsmittel", amount: "3 Flaschen", priority: "hoch" },
  { name: "Zahnbürste + Zahnpasta", amount: "1 pro Person + 3 Tuben", priority: "mittel" },
  { name: "Müllbeutel (groß)", amount: "3 Rollen", priority: "hoch" },
  { name: "Campingtoilette / Eimer + Deckel", amount: "1 Stück", priority: "mittel" },
  { name: "Windeln (falls Kleinkind)", amount: "nach Bedarf", priority: "hoch" },
  { name: "Damenhygiene-Artikel", amount: "nach Bedarf", priority: "hoch" },
  { name: "Waschmittel (klein)", amount: "1 Flasche", priority: "niedrig" },
  { name: "Schnelltrocknendes Handtuch", amount: "1 pro Person", priority: "mittel" },
  { name: "Sonnencreme", amount: "1 Tube", priority: "niedrig" },
  { name: "Insektenschutzmittel", amount: "1 Flasche", priority: "niedrig" },
];

// --- DOKUMENTE ---
export const importantDocuments = [
  { document: "Personalausweis / Reisepass", note: "Kopie + Original in wasserdichter Hülle" },
  { document: "Geburtsurkunden", note: "Von allen Familienmitgliedern" },
  { document: "Heiratsurkunde", note: "Falls vorhanden" },
  { document: "Versicherungspolicen", note: "Kranken-, Haftpflicht-, Hausratversicherung" },
  { document: "Impfpass", note: "Von allen Familienmitgliedern" },
  { document: "Grundbuchauszug / Mietvertrag", note: "Nachweis der Wohnsituation" },
  { document: "Bankverbindungen", note: "Kontonummern, IBAN" },
  { document: "Bargeld", note: "200-500 EUR in kleinen Scheinen" },
  { document: "Notfall-Kontaktliste", note: "Familie, Freunde, Ärzte - handschriftlich" },
  { document: "Medikamentenplan", note: "Welche Medikamente, welche Dosis" },
  { document: "Testament / Vorsorgevollmacht", note: "Falls vorhanden" },
  { document: "USB-Stick mit Digitalkopien", note: "Verschlüsselt, mit allen Dokumenten" },
  { document: "Kfz-Papiere", note: "Führerschein, Fahrzeugschein" },
];

// --- KINDER SPEZIAL ---
export const childrenSpecial = [
  { category: "Babys (0-2 Jahre)", items: [
    "Milchpulver / Pre-Nahrung (großer Vorrat)",
    "Fläschchen + Sauger (mehrere)",
    "Windeln (mind. 2-Wochen-Vorrat)",
    "Feuchttücher (baby-geeignet)",
    "Wundschutzcreme",
    "Fieberzäpfchen (Paracetamol)",
    "Schnuller (Ersatz)",
    "Warme Kleidung + Mütze",
    "Tragetuch / Babytrage",
    "Kuscheltier / Schnuffeltuch",
  ]},
  { category: "Kleinkinder (2-6 Jahre)", items: [
    "Kinderschmerzmittel (Saft)",
    "Lieblingsbücher / Malbücher",
    "Buntstifte / Wachsmaler",
    "Kuscheltier",
    "Kartenspiele / kleine Spiele",
    "Warme Kleidung zum Wechseln",
    "Gummistiefel",
    "Trinkflasche (eigene)",
    "Snacks die sie mögen (Kekse, Riegel)",
    "Nachtlicht / Taschenlampe (angstfrei)",
  ]},
  { category: "Schulkinder (6-14 Jahre)", items: [
    "Bücher / Comics",
    "Kartenspiele / Brettspiele",
    "Tagebuch + Stift",
    "Eigene Taschenlampe",
    "Eigener Rucksack (Notgepäck)",
    "Warme Kleidung + Regenschutz",
    "Snacks",
    "Trinkflasche",
    "Pfeife (Notsignal)",
    "Grundlegende Erste-Hilfe-Kenntnisse vermitteln",
  ]},
];

// --- NOTFALLPLAN ---
export const emergencyPlan = [
  { step: 1, title: "Ruhe bewahren", description: "Tief durchatmen, Situation einschätzen. Panik ist der größte Feind." },
  { step: 2, title: "Information beschaffen", description: "Radio einschalten (Kurbelradio), offizielle Durchsagen beachten." },
  { step: 3, title: "Familie zusammenbringen", description: "Treffpunkt war vereinbart? Alle zusammen? Kinder beruhigen." },
  { step: 4, title: "Grundversorgung sichern", description: "Wasser, Nahrung, Wärme - in dieser Reihenfolge priorisieren." },
  { step: 5, title: "Sicherheit der Unterkunft", description: "Fenster/Türen sichern, Heizmöglichkeit prüfen, Kerzen/Lampen bereitstellen." },
  { step: 6, title: "Nachbarn kontaktieren", description: "Gemeinsam ist man stärker. Ressourcen teilen, aufeinander achten." },
  { step: 7, title: "Rationierung planen", description: "Vorräte inventarisieren, tägliche Rationen festlegen, sparsam wirtschaften." },
  { step: 8, title: "Kommunikation aufrechterhalten", description: "Powerbanks sparsam nutzen, wichtige Nummern parat haben." },
  { step: 9, title: "Hygiene nicht vernachlässigen", description: "Krankheiten sind eine große Gefahr - Hände waschen, Toilette organisieren." },
  { step: 10, title: "Kinder beschäftigen & beruhigen", description: "Routine schaffen, Spiele spielen, Normalität simulieren." },
];

// --- SZENARIEN ---
export const survivalScenarios = [
  {
    title: "Stromausfall (Blackout)",
    duration: "Stunden bis Wochen",
    description: "Großflächiger Stromausfall - kein Licht, keine Heizung, keine Kommunikation",
    priorities: ["Lichtquellen sichern", "Kühlschrank geschlossen lassen (4-6h kalt)", "Lebensmittel aufbrauchen (verderbliche zuerst)", "Radio für Infos", "Heizalternative bei Kälte"],
  },
  {
    title: "Hochwasser / Überschwemmung",
    duration: "Tage bis Wochen",
    description: "Steigende Wasserpegel, überflutete Straßen, evtl. Evakuierung",
    priorities: ["Hoher gelegene Stockwerke aufsuchen", "Notgepäck bereithalten", "Evakuierungsrouten kennen", "Nicht durch Hochwasser fahren/waten", "Trinkwasser bevorraten (Leitungswasser evtl. kontaminiert)"],
  },
  {
    title: "Pandemie / Quarantäne",
    duration: "Wochen bis Monate",
    description: "Ausgangsbeschränkungen, Lieferengpässe, eingeschränkte medizinische Versorgung",
    priorities: ["Vorräte für 4+ Wochen", "Hygieneartikel (Masken, Desinfektionsmittel)", "Medikamente bevorraten", "Soziale Isolation vorbereiten", "Home-Office/Home-Schooling einrichten"],
  },
  {
    title: "Extremwetter (Sturm, Eisregen)",
    duration: "Stunden bis Tage",
    description: "Unwetter, umgestürzte Bäume, blockierte Straßen, Stromausfall",
    priorities: ["Drinnen bleiben", "Von Fenstern fernhalten", "Kerzen & Taschenlampen bereit", "Vorräte nutzen", "Keller als Schutzraum"],
  },
  {
    title: "Versorgungsengpass",
    duration: "Tage bis Wochen",
    description: "Leere Supermarktregale, Lieferketten unterbrochen",
    priorities: ["Vorräte rationieren", "Restbestände kreativ nutzen", "Tauschhandel mit Nachbarn", "Garten/Balkon für Anbau nutzen", "Wildkräuter identifizieren können"],
  },
];

// --- BOMBEN & SCHUTZRÄUME ---
export interface BombType {
  name: string;
  yield: string;
  fireball: string;
  totalDestruction: string;
  severeBlast: string;
  moderateBlast: string;
  thermalBurn: string;
  fallout: string;
  description: string;
}

export const nuclearBombs: BombType[] = [
  {
    name: "Taktische Nuklearwaffe",
    yield: "1 kt",
    fireball: "~50 m",
    totalDestruction: "~200 m",
    severeBlast: "~600 m",
    moderateBlast: "~1,2 km",
    thermalBurn: "~1 km (3. Grad)",
    fallout: "~5 km (Hauptzone)",
    description: "Kleinste Nuklearwaffe. Eingesetzt gegen militärische Ziele. Blast vergleichbar mit größter konventioneller Bombe.",
  },
  {
    name: "Kleine Atombombe",
    yield: "10 kt",
    fireball: "~150 m",
    totalDestruction: "~500 m",
    severeBlast: "~1,5 km",
    moderateBlast: "~3 km",
    thermalBurn: "~2,5 km (3. Grad)",
    fallout: "~15 km (Hauptzone)",
    description: "Typische kleine Atombombe. Zerstört ein Stadtviertel komplett.",
  },
  {
    name: "Hiroshima-Typ",
    yield: "15 kt",
    fireball: "~180 m",
    totalDestruction: "~600 m",
    severeBlast: "~1,7 km",
    moderateBlast: "~3,5 km",
    thermalBurn: "~3 km (3. Grad)",
    fallout: "~20 km (Hauptzone)",
    description: "Little Boy (Hiroshima, 1945). 70.000 Soforttote. Referenz für viele Berechnungen.",
  },
  {
    name: "Mittlerer Sprengkopf",
    yield: "100 kt",
    fireball: "~400 m",
    totalDestruction: "~1,3 km",
    severeBlast: "~3,5 km",
    moderateBlast: "~7 km",
    thermalBurn: "~8 km (3. Grad)",
    fallout: "~50 km (Hauptzone)",
    description: "Typisch für moderne taktische Sprengköpfe (z.B. W76). Zerstört eine Kleinstadt.",
  },
  {
    name: "Großer Sprengkopf",
    yield: "1 Mt (1.000 kt)",
    fireball: "~1 km",
    totalDestruction: "~3,5 km",
    severeBlast: "~8 km",
    moderateBlast: "~15 km",
    thermalBurn: "~20 km (3. Grad)",
    fallout: "~150 km (Hauptzone)",
    description: "Strategischer Sprengkopf (z.B. W88, RS-28 Sarmat). Zerstört eine Großstadt.",
  },
  {
    name: "Zar-Bombe (Referenz)",
    yield: "50 Mt",
    fireball: "~3,5 km",
    totalDestruction: "~12 km",
    severeBlast: "~25 km",
    moderateBlast: "~45 km",
    thermalBurn: "~60 km (3. Grad)",
    fallout: "~500+ km",
    description: "Größte je gezündete Bombe (1961, UdSSR). Nur als Referenz. Kein aktueller Einsatz geplant.",
  },
];

export interface ConventionalBomb {
  name: string;
  weight: string;
  blastRadius: string;
  shrapnelRadius: string;
  safeDistance: string;
  description: string;
}

export const conventionalBombs: ConventionalBomb[] = [
  { name: "Handgranate", weight: "0,4 kg", blastRadius: "5 m", shrapnelRadius: "15-30 m", safeDistance: "50 m", description: "Typische Splittergranate. Hauptgefahr sind Splitter, nicht die Druckwelle." },
  { name: "Mörsergranate (82mm)", weight: "3-4 kg", blastRadius: "10-15 m", shrapnelRadius: "50-100 m", safeDistance: "200 m", description: "Häufigste Artilleriewaffe in urbanen Konflikten." },
  { name: "Artilleriegranate (155mm)", weight: "~45 kg", blastRadius: "30-50 m", shrapnelRadius: "200-300 m", safeDistance: "500 m", description: "Standard-Artillerie NATO. Extrem gefährlich im Umkreis von 300m." },
  { name: "Fliegerbombe (250 kg)", weight: "250 kg", blastRadius: "50-100 m", shrapnelRadius: "300-500 m", safeDistance: "800 m", description: "Leichte Fliegerbombe. Häufig in Konflikten eingesetzt." },
  { name: "Fliegerbombe (500 kg)", weight: "500 kg", blastRadius: "100-150 m", shrapnelRadius: "500-800 m", safeDistance: "1.000 m", description: "Standard-Fliegerbombe. Zerstört ein Gebäude komplett." },
  { name: "Schwere Fliegerbombe (1.000 kg)", weight: "1.000 kg", blastRadius: "150-200 m", shrapnelRadius: "800-1.200 m", safeDistance: "1.500 m", description: "Zerstört einen Häuserblock. Massive Druckwelle und Splitter." },
  { name: "MOAB / Vakuumbombe", weight: "~10.000 kg", blastRadius: "300-500 m", shrapnelRadius: "1.500+ m", safeDistance: "3.000 m", description: "Größte konventionelle Bombe. Erzeugt Überdruck wie kleine Atomwaffe." },
  { name: "Cruise Missile (Marschflugkörper)", weight: "450 kg Sprengkopf", blastRadius: "80-120 m", shrapnelRadius: "400-600 m", safeDistance: "1.000 m", description: "Präzisionswaffe. Zielt auf spezifische Gebäude/Infrastruktur." },
];

export interface ShelterInfo {
  type: string;
  protection: string;
  depth: string;
  where: string;
  notes: string;
}

export const shelterTypes: ShelterInfo[] = [
  { type: "Keller (normales Wohnhaus)", protection: "Gut gegen konventionelle Waffen, grundlegend gegen Fallout", depth: "2-3 m unter Erde", where: "Jedes Mehrfamilienhaus", notes: "Mauern min. 30cm Beton. Fenster mit Erde/Sandsäcken abdichten. Schutzfaktor ~10x gegen Strahlung." },
  { type: "Tiefgarage (Untergeschoss 2+)", protection: "Sehr gut gegen Druckwelle und Splitter, gut gegen Fallout", depth: "6-10 m unter Erde", where: "Einkaufszentren, Bürogebäude, Krankenhäuser", notes: "Mehrere Betondecken = hoher Schutzfaktor (~100x). Idealer improvisierter Schutzraum." },
  { type: "U-Bahn-Station", protection: "Exzellent gegen alles außer direkten Nukleartreffer", depth: "10-30 m unter Erde", where: "Großstädte mit U-Bahn-Netz", notes: "Historisch bewährt (London Blitz, Kyiv). Schutzfaktor ~1000x. Tiefe Stationen bevorzugen." },
  { type: "Bunker (Zivilschutz)", protection: "Maximaler Schutz, auch gegen Nuklearschlag in Entfernung", depth: "5-15 m unter Erde", where: "Schweiz, Finnland, teils Deutschland", notes: "Professionelle Schutzräume mit Belüftung, Filtern, Vorräten. In Deutschland selten, aber vorhanden." },
  { type: "Erdkeller / Selbst gegraben", protection: "Basis-Schutz gegen Splitter und leichten Fallout", depth: "1-2 m unter Erde", where: "Garten, ländliche Gebiete", notes: "Mindestens 60cm Erdschicht über Kopf. Mit Holz/Stahl abstützen. Eingang im 90°-Winkel zur Druckwelle." },
  { type: "Massives Gebäude (Innenliegend)", protection: "Grundlegend gegen Splitter und Druckwelle", depth: "0 m (ebenerdig)", where: "Überall", notes: "Innere Räume ohne Fenster. Badezimmer, Flure, Treppenhäuser. Unter Tischen/Türrahmen. Schutzfaktor ~5x." },
];

export interface ShelterMaterial {
  material: string;
  halfValueLayer: string;
  description: string;
}

export const shelterMaterials: ShelterMaterial[] = [
  { material: "Beton (Stahlbeton)", halfValueLayer: "6 cm", description: "Bester alltäglicher Schutz. 30cm Beton = ~32x Strahlungsreduktion." },
  { material: "Erde / Sand (verdichtet)", halfValueLayer: "9 cm", description: "Leicht verfügbar. 45cm Erde = ~32x Reduktion. Sandsäcke ideal." },
  { material: "Stahl", halfValueLayer: "2,5 cm", description: "Höchster Schutz pro cm, aber selten in nötiger Dicke verfügbar." },
  { material: "Wasser", halfValueLayer: "18 cm", description: "Wassertanks bieten zusätzlichen Schutz. 90cm = ~32x Reduktion." },
  { material: "Holz", halfValueLayer: "29 cm", description: "Geringster Schutz. 1,5m Holz ≈ 30cm Beton. Nur Notlösung." },
  { material: "Ziegel / Mauerwerk", halfValueLayer: "8 cm", description: "Ähnlich wie Erde. Doppelwandige Ziegelmauer bietet guten Schutz." },
  { material: "Bücher / Papier (dicht)", halfValueLayer: "10 cm", description: "Improvisiert: Bücherregale vor Fenster. 50cm ≈ ~32x Reduktion." },
];

export const falloutRules = [
  { rule: "7-10 Regel", description: "Nach 7 Stunden sinkt die Strahlung auf 1/10. Nach 49 Stunden auf 1/100. Nach 2 Wochen auf 1/1000." },
  { rule: "Erste 24 Stunden", description: "Gefährlichste Phase. Unter KEINEN Umständen nach draußen gehen. Fenster abdichten." },
  { rule: "48-72 Stunden", description: "Strahlung deutlich reduziert. Kurze Ausflüge (max. 30 Min.) für dringende Dinge möglich." },
  { rule: "2 Wochen", description: "Nach 14 Tagen ist die meiste Fallout-Strahlung abgeklungen. Längerer Aufenthalt draußen möglich." },
  { rule: "Staub ist der Feind", description: "Fallout = radioaktiver Staub. Nicht einatmen, nicht essen, nicht auf die Haut. Kleidung wechseln, duschen." },
  { rule: "Wind beachten", description: "Fallout driftet mit dem Wind. Windrichtung beobachten und entgegengesetzt evakuieren, wenn möglich." },
];

// --- OFFLINE-TECHNIK ---
export interface OfflineApp {
  name: string;
  platform: string;
  description: string;
  storage: string;
  setupSteps: string[];
  priority: string;
}

export const offlineApps: OfflineApp[] = [
  {
    name: "Kiwi Browser + Wikipedia Offline",
    platform: "Android",
    description: "Komplette deutsche Wikipedia offline verfügbar. Kiwi Browser unterstützt ZIM-Dateien direkt.",
    storage: "~11 GB (deutsche Wikipedia mit Bildern), ~3 GB (ohne Bilder)",
    setupSteps: [
      "Kiwi Browser aus dem Play Store installieren",
      "Die App 'Kiwix' aus dem Play Store installieren",
      "In Kiwix: Bibliothek öffnen → Wikipedia (Deutsch) wählen",
      "ZIM-Datei herunterladen (stabiles WLAN nötig, ~11 GB)",
      "Nach Download: Artikel offline durchsuchen und lesen",
    ],
    priority: "hoch",
  },
  {
    name: "Kiwix (Desktop)",
    platform: "Windows / Mac / Linux",
    description: "Offline-Reader für Wikipedia, Wiktionary, Wikivoyage und mehr. Perfekt für Laptops als Wissensbasis.",
    storage: "~11 GB (deutsche Wikipedia)",
    setupSteps: [
      "kiwix.org besuchen und Desktop-Version herunterladen",
      "Installieren und starten",
      "Bibliothek → Wikipedia Deutsch herunterladen",
      "Optional: Auch Wikivoyage (Reiseinfos), WikiHow, Survival-Guides",
      "ZIM-Dateien auf externe Festplatte sichern als Backup",
    ],
    priority: "hoch",
  },
  {
    name: "Ollama (Lokale KI)",
    platform: "Windows / Mac / Linux",
    description: "Lokale KI auf dem Laptop. Beantwortet Fragen, hilft bei Übersetzungen, medizinischen Infos - alles offline.",
    storage: "2-8 GB je nach Modell",
    setupSteps: [
      "ollama.com besuchen und herunterladen",
      "Installieren (Windows: .exe, Mac: .dmg, Linux: curl-Befehl)",
      "Terminal/CMD öffnen: 'ollama pull llama3.2:3b' (3 GB, schnell)",
      "Oder größer: 'ollama pull llama3.1:8b' (5 GB, schlauer)",
      "Nutzen: 'ollama run llama3.2:3b' - dann Fragen eintippen",
      "Tipp: Vor der Krise verschiedene Modelle herunterladen!",
    ],
    priority: "hoch",
  },
  {
    name: "LM Studio",
    platform: "Windows / Mac / Linux",
    description: "Benutzerfreundliche App für lokale KI-Modelle. Grafische Oberfläche, kein Terminal nötig.",
    storage: "2-8 GB je nach Modell",
    setupSteps: [
      "lmstudio.ai besuchen und herunterladen",
      "Installieren und starten",
      "In der App: Modell suchen (z.B. 'Llama 3.2 3B' oder 'Phi-3 Mini')",
      "Modell herunterladen (auf Größe achten: 3B = ~2 GB)",
      "Chat starten und offline Fragen stellen",
      "Mindestens 8 GB RAM empfohlen, 16 GB ideal",
    ],
    priority: "mittel",
  },
  {
    name: "Lokale KI auf dem Handy",
    platform: "Android / iOS",
    description: "Kleine KI-Modelle laufen auch auf modernen Smartphones. Ideal für schnelle Fragen unterwegs.",
    storage: "1-3 GB",
    setupSteps: [
      "Android: 'PocketPal AI' oder 'MLC Chat' aus Play Store installieren",
      "iOS: 'LLM Farm' oder 'Private LLM' aus App Store installieren",
      "Kleines Modell wählen: Phi-3 Mini (1,4 GB) oder Gemma 2B",
      "Modell im WLAN herunterladen (vor der Krise!)",
      "Hinweis: Antworten langsamer als am Laptop, aber funktioniert",
      "Min. 6 GB RAM im Handy nötig (die meisten ab 2022 haben das)",
    ],
    priority: "mittel",
  },
  {
    name: "OsmAnd (Offline-Karten)",
    platform: "Android / iOS",
    description: "Komplette Straßenkarten offline. Navigation ohne Internet. Basiert auf OpenStreetMap.",
    storage: "~1,5 GB für ganz Deutschland",
    setupSteps: [
      "OsmAnd aus Play Store / App Store installieren (kostenlose Version: 7 Karten)",
      "Einstellungen → Karten herunterladen → Deutschland wählen",
      "Oder einzelne Bundesländer für weniger Speicher",
      "Wichtige Orte als Favoriten markieren (Krankenhaus, Feuerwehr, Treffpunkte)",
      "Routenplanung funktioniert komplett offline",
      "Tipp: Auch Nachbarländer herunterladen für Fluchtrouten",
    ],
    priority: "hoch",
  },
  {
    name: "Organic Maps (Alternative)",
    platform: "Android / iOS",
    description: "Schnellere, schlankere Alternative zu OsmAnd. Open Source, keine Werbung, keine Tracker.",
    storage: "~1 GB für ganz Deutschland",
    setupSteps: [
      "Organic Maps aus Play Store / App Store installieren",
      "Karten → Deutschland herunterladen",
      "Wanderkarten und Radwege inklusive",
      "Ideal für Flucht zu Fuß oder mit Fahrrad",
    ],
    priority: "mittel",
  },
  {
    name: "Erste-Hilfe-App (Offline)",
    platform: "Android / iOS",
    description: "DRK Erste-Hilfe-App mit Offline-Inhalten. Schritt-für-Schritt-Anleitungen für Notfälle.",
    storage: "~100 MB",
    setupSteps: [
      "DRK 'Erste Hilfe' App installieren",
      "Alle Inhalte einmal öffnen (werden gecacht)",
      "Alternative: 'First Aid - IFRC' (International, mehrsprachig)",
      "Zusätzlich: Bilder/Screenshots von wichtigen Anleitungen machen",
    ],
    priority: "hoch",
  },
  {
    name: "Briar (Mesh-Messenger)",
    platform: "Android",
    description: "Kommunikation ohne Internet und ohne Server. Verbindet sich direkt via Bluetooth/WLAN mit anderen Geräten.",
    storage: "~50 MB",
    setupSteps: [
      "Briar aus Play Store oder briarproject.org installieren",
      "Konto erstellen (funktioniert offline)",
      "Kontakte hinzufügen indem ihr QR-Codes scannt (vorab machen!)",
      "Kommunikation funktioniert via: Bluetooth (10m), WLAN (50m), Tor (wenn Internet da)",
      "Nachrichten werden verschlüsselt gespeichert",
      "Wichtig: Kontakte VOR der Krise hinzufügen!",
    ],
    priority: "hoch",
  },
  {
    name: "Meshtastic (LoRa-Mesh)",
    platform: "Android / iOS + Hardware",
    description: "Dezentrales Mesh-Netzwerk über LoRa-Funk. Nachrichten, GPS-Position und Notrufe ohne Internet, Mobilfunk oder Server. Reichweite bis 10km+ (je nach Gelände).",
    storage: "~50 MB App + LoRa-Hardware",
    setupSteps: [
      "Kompatibles LoRa-Gerät besorgen (z.B. Heltec V3, LilyGo T-Beam, RAK WisBlock)",
      "Meshtastic-App aus Play Store / App Store installieren",
      "Gerät per Bluetooth mit Handy verbinden",
      "Region auf EU_868 stellen (Europa-Frequenz, lizenzfrei)",
      "Kanal und Verschlüsselung einrichten (PSK teilen mit Familie/Gruppe)",
      "GPS aktivieren → Position wird automatisch geteilt",
      "Jedes Gerät leitet Nachrichten weiter = größeres Netz",
      "Wichtig: Geräte VOR der Krise einrichten und testen!",
    ],
    priority: "hoch",
  },
  {
    name: "Meshcore (LoRa-Mesh)",
    platform: "Android / iOS + Hardware",
    description: "Weiterentwicklung von Meshtastic mit erweiterten Funktionen: Repeater-Modus, Flood-Routing und optimierte Reichweite. Kompatibel mit Meshtastic-Hardware.",
    storage: "~50 MB App + LoRa-Hardware",
    setupSteps: [
      "Gleiche LoRa-Hardware wie Meshtastic verwenden (Heltec V3, T-Beam etc.)",
      "Meshcore-Firmware flashen (meshcore.co)",
      "Companion-App installieren und Gerät per Bluetooth koppeln",
      "Region und Kanal konfigurieren (EU_868)",
      "Repeater-Modus aktivieren für maximale Netzabdeckung",
      "Flood-Routing sorgt dafür, dass Nachrichten jeden Knoten erreichen",
      "Ideal als Ergänzung zu Meshtastic in größeren Gruppen",
      "Tipp: Ein Gerät als solarbetriebenen Repeater an erhöhtem Punkt aufstellen",
    ],
    priority: "mittel",
  },
  {
    name: "PMR446-Funkgeräte",
    platform: "Standalone Hardware",
    description: "Klassische Walkie-Talkies auf PMR446-Frequenz. Lizenzfrei, sofort einsatzbereit, keine App oder Smartphone nötig. Reichweite 500m (Stadt) bis 5km (freies Gelände).",
    storage: "Keine App nötig – Standalone-Hardware",
    setupSteps: [
      "PMR446-Funkgeräte-Set kaufen (z.B. Motorola T82, Midland G9 Pro)",
      "Alle Geräte auf denselben Kanal und CTCSS-Code einstellen",
      "Batterien / Akkus voll laden, Ersatzbatterien bevorraten",
      "Reichweite im eigenen Umfeld testen (Wohnung ↔ Nachbar, Haus ↔ Treffpunkt)",
      "Feste Funkzeiten vereinbaren (z.B. jede volle Stunde 5 Minuten)",
      "Wichtig: Kanal und Code vorher mit Familie absprechen",
      "Kinder ab ~6 Jahren können PMR-Funkgeräte bedienen",
      "Ideal als Backup wenn Meshtastic/Handy ausfällt",
    ],
    priority: "hoch",
  },
  {
    name: "Signal Messenger",
    platform: "Android / iOS",
    description: "Verschlüsselter Messenger. Funktioniert auch bei instabilem Internet. Offline-Backup wichtig.",
    storage: "~200 MB",
    setupSteps: [
      "Signal aus Play Store / App Store installieren",
      "Mit Telefonnummer registrieren",
      "Wichtige Kontakte hinzufügen",
      "Backup aktivieren (Einstellungen → Chats → Backup)",
      "PIN für Konto-Wiederherstellung einrichten",
    ],
    priority: "mittel",
  },
  {
    name: "Offline-Übersetzer",
    platform: "Android / iOS",
    description: "Google Übersetzer oder Apple Übersetzer mit Offline-Sprachpaketen. Wichtig bei Flucht über Landesgrenzen.",
    storage: "~50 MB pro Sprache",
    setupSteps: [
      "Google Übersetzer installieren",
      "Einstellungen → Offline-Übersetzung → Sprachen herunterladen",
      "Empfohlen: Deutsch, Englisch, Polnisch, Tschechisch, Französisch, Arabisch",
      "Kamerafunktion zum Schilder-Übersetzen funktioniert auch offline",
    ],
    priority: "mittel",
  },
  {
    name: "Survival-Guide PDFs",
    platform: "Alle Geräte",
    description: "Diese Be PREPared Survival Guide PDFs auf allen Geräten speichern. Ausdrucken und zusätzlich digital aufbewahren.",
    storage: "~10 MB für alle PDFs",
    setupSteps: [
      "Alle PDFs dieser Seite herunterladen (ZIP-Button)",
      "Auf Handy, Laptop und USB-Stick speichern",
      "Ausdrucken und in wasserdichter Hülle aufbewahren",
      "Zusätzlich: BBK-Ratgeber als PDF herunterladen (bbk.bund.de)",
    ],
    priority: "hoch",
  },
];
