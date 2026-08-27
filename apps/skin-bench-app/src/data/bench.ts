// Auto-extracted from the verified Skin Bench dataset.
// Sources: Notion 'Aesthetic Protocol HQ' (Sephora & Ulta Variety Bench,
// Procedure Swap Bench, The Bonus Shelf) + retailer price verification.

export type Row = [name:string, slot:string, role:string, screen:string, where:string, why:string];
export interface Bench { label:string; icon:string; tag:string; rows:Row[]; note:string }
/** [now, wasIfOnSale(0=none), size, retailer, unitsPerQuarter, quarterTotal, bulkNote, verified] */
export type PriceRec = [number,number,string,string,number,number,string,number];

export const BENCHES: Record<string,Bench> = {
 "face": {
  "label": "Face Bench",
  "icon": "✨",
  "tag": "Main-character skin. Nine slots, every one benched deep.",
  "rows": [
   [
    "Round Lab 1025 Dokdo Cleanser",
    "🧼 Cleansers",
    "L",
    "g",
    "Ulta",
    "Low-pH, mild surfactants, removes SPF fully without tightness. The K-beauty benchmark cleanser."
   ],
   [
    "Skinfix Barrier+ Foaming Oil Cleanser",
    "🧼 Cleansers",
    "L",
    "g",
    "Sephora",
    "Lipid-replenishing, dissolves SPF; built for compromised barriers."
   ],
   [
    "CeraVe Hydrating Cleanser (current)",
    "🧼 Cleansers",
    "C",
    "y",
    "Ulta",
    "Ceramides, non-foaming."
   ],
   [
    "Cetaphil Gentle Skin Cleanser",
    "🧼 Cleansers",
    "B",
    "g",
    "Ulta",
    "The drugstore constant; also the no-bag fallback."
   ],
   [
    "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    "🧼 Cleansers",
    "B",
    "g",
    "Ulta",
    "Foam without stripping; pairs with your Anua stack."
   ],
   [
    "Skin1004 Hyalu-Cica Gentle Cleansing Milk",
    "🧼 Cleansers",
    "B",
    "g",
    "Ulta",
    "Milk texture, centella; best on tretinoin nights."
   ],
   [
    "Byoma Creamy Jelly Cleanser · Bubble Fresh Start Gel",
    "🧼 Cleansers",
    "B",
    "g",
    "Ulta",
    "Barrier-lipid gels, budget tier."
   ],
   [
    "Double-cleanse: Anua Heartleaf Cleansing Oil · Inkey Oat Cleansing Balm",
    "🧼 Cleansers",
    "B",
    "g",
    "Ulta / Sephora",
    "Two fingers of SPF twice a day needs an oil step at night (PM SPF removal)."
   ],
   [
    "Peach & Lily Transparen-C Pro Spot Treatment",
    "🍊 AM Brighteners",
    "L",
    "g",
    "Ulta",
    "20% ethyl ascorbic acid, stable derivative, fragrance-free; doubles as a dark-spot targeter."
   ],
   [
    "Naturium Vitamin C Complex Serum",
    "🍊 AM Brighteners",
    "L",
    "g",
    "Sephora",
    "Tetrahexyldecyl-ascorbate-led blend — oil-soluble, heat- and light-stable, fragrance-free. The truck-cab vitamin C."
   ],
   [
    "Maelove Glow Maker (current)",
    "🍊 AM Brighteners",
    "C",
    "g",
    "DTC only",
    "L-ascorbic — oxidizes in cab heat. Home base."
   ],
   [
    "Hyper Skin Hyper Clear Brightening Vitamin C",
    "🍊 AM Brighteners",
    "B",
    "g",
    "Sephora",
    "15% L-ascorbic + kojic + turmeric, formulated for melanin-rich skin and PIH. Home-base bottle (not heat-stable)."
   ],
   [
    "Beauty of Joseon Glow Deep Serum (Rice + Alpha-Arbutin)",
    "🍊 AM Brighteners",
    "B",
    "g",
    "Both",
    "Not vitamin C — arbutin brightener; a gentle AM alternate on tret-heavy weeks."
   ],
   [
    "Sunday Riley C.E.O. 15% Vitamin C",
    "🍊 AM Brighteners",
    "B",
    "g",
    "Sephora",
    "THD-ascorbate; premium tier. Light citrus from extracts — patch test."
   ],
   [
    "The Ordinary Ascorbyl Tetraisopalmitate 20% in Vitamin F",
    "🍊 AM Brighteners",
    "B",
    "y",
    "Both",
    "Same stable THD chemistry, budget price."
   ],
   [
    "Good Molecules Vitamin C Booster Powder",
    "🍊 AM Brighteners",
    "B",
    "g",
    "Ulta",
    "L-ascorbic as a dry powder — fully stable until mixed into moisturizer each morning. Smart road hack."
   ],
   [
    "Aestura Atobarrier 365 Cream",
    "🧴 Moisturizers",
    "L",
    "g",
    "Sephora",
    "Korea's #1 barrier cream (Amorepacific derm line): ceramide capsules, fragrance-free, eczema-grade. The tret-buffer upgrade."
   ],
   [
    "Skinfix Barrier+ Triple Lipid-Peptide Cream",
    "🧴 Moisturizers",
    "L",
    "g",
    "Sephora",
    "Ceramide/cholesterol/fatty-acid ratio done right; fragrance-free."
   ],
   [
    "CeraVe Moisturizing Lotion (current)",
    "🧴 Moisturizers",
    "C",
    "y",
    "Ulta",
    "Ceramides + HA, buffer layer for tret."
   ],
   [
    "Round Lab Birch Juice Moisturizing Cream",
    "🧴 Moisturizers",
    "B",
    "g",
    "Ulta",
    "Light gel-cream, fragrance-free; summer/AM texture."
   ],
   [
    "Torriden Dive-In Low-Molecular HA Cream",
    "🧴 Moisturizers",
    "B",
    "g",
    "Sephora",
    "Hydration-first, fragrance-free."
   ],
   [
    "Skin1004 Hyalu-Cica Moisture Cream · Anua Heartleaf 70 Calming Cream",
    "🧴 Moisturizers",
    "B",
    "g",
    "Ulta",
    "Centella / heartleaf calming — for post-tret redness nights."
   ],
   [
    "Dieux Instant Angel · Tower 28 SOS Daily Barrier Recovery Cream",
    "🧴 Moisturizers",
    "B",
    "g",
    "Sephora",
    "Fragrance-free, NEA-grade sensitivity; both excellent tret buffers."
   ],
   [
    "Naturium Plant Ceramide Rich Cream · Byoma Gel-Cream",
    "🧴 Moisturizers",
    "B",
    "g",
    "Sephora / Ulta",
    "Budget ceramide options."
   ],
   [
    "Eucerin Advanced Repair · Cetaphil Moisturizing Cream",
    "🧴 Moisturizers",
    "B",
    "m",
    "Ulta",
    "Drugstore constants; fine on face or body."
   ],
   [
    "Isntree Hyaluronic Acid Watery Sun Gel SPF 50+",
    "🔆 SPF — daily driver",
    "L",
    "g",
    "Ulta",
    "Lightest texture in the group; no cast, fragrance-free."
   ],
   [
    "Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+",
    "🔆 SPF — daily driver",
    "L",
    "g",
    "Both",
    "The category's reference product; invisible on deep tones, fragrance-free, moisturizing."
   ],
   [
    "Anua Heartleaf Silky Moisture Sun Cream SPF 50 (current)",
    "🔆 SPF — daily driver",
    "C",
    "g",
    "Ulta",
    "Zero cast, owned."
   ],
   [
    "Skin1004 Hyalu-Cica Water-Fit Sun Serum SPF 50+",
    "🔆 SPF — daily driver",
    "B",
    "g",
    "Ulta",
    "Serum-weight, fragrance-free; good under a tinted layer."
   ],
   [
    "Round Lab Birch Juice Moisturizing Sun Cream SPF 50+",
    "🔆 SPF — daily driver",
    "B",
    "g",
    "Ulta",
    "Cream texture for dry weeks; fragrance-free."
   ],
   [
    "Black Girl Sunscreen Make It Matte SPF 45",
    "🔆 SPF — daily driver",
    "B",
    "w",
    "Ulta",
    "Built for melanin-rich skin, no cast, matte for oily central face (Qoves noted shine)."
   ],
   [
    "Innisfree Daily UV Defense SPF 36",
    "🔆 SPF — daily driver",
    "B",
    "g",
    "Sephora",
    "Hybrid, no cast, lower SPF — lighter days only."
   ],
   [
    "Fenty Skin Hydra Vizor Huez Tinted Mineral SPF 30",
    "🎨 SPF — tinted mineral",
    "L",
    "g",
    "Sephora",
    "15.5% zinc, 10 shades built around deep tones, niacinamide, fragrance-free, refillable. The strict-mode equal to Anthelios Deep."
   ],
   [
    "Tower 28 SunnyDays SPF 30 Tinted",
    "🎨 SPF — tinted mineral",
    "L",
    "g",
    "Sephora",
    "14 shades, fragrance-free, first tinted SPF with the National Eczema Association seal."
   ],
   [
    "LRP Anthelios Mineral Tinted, Deep (current pick)",
    "🎨 SPF — tinted mineral",
    "C",
    "y",
    "Ulta",
    "4 shades incl. Deep; derm post-procedure standard."
   ],
   [
    "Ilia Super Serum Skin Tint SPF 40",
    "🎨 SPF — tinted mineral",
    "B",
    "g",
    "Sephora",
    "30 shades — the widest deep-tone range at either retailer; skincare-serum base."
   ],
   [
    "EltaMD UV Daily Tinted SPF 40 (now in multiple tints)",
    "🎨 SPF — tinted mineral",
    "B",
    "w",
    "Ulta",
    "Derm standard; swatch the deepest tint on the jawline first — the original single tint went ashy on you."
   ],
   [
    "Round Lab Birch Juice Sun Stick SPF 50+",
    "🖍️ SPF sticks",
    "L",
    "g",
    "Ulta",
    "Clear, no cast, niacinamide + ceramides; the cleanest ingredient list in the stick category."
   ],
   [
    "Beauty of Joseon Matte Sun Stick (Mugwort + Camelia) SPF 50+",
    "🖍️ SPF sticks",
    "B",
    "g",
    "Both",
    "Matte finish for the shiny central face."
   ],
   [
    "Isntree Hyaluronic Acid Airy Sun Stick SPF 50+",
    "🖍️ SPF sticks",
    "B",
    "g",
    "Ulta",
    "Lightest glide; good over the tinted layer."
   ],
   [
    "Shiseido Clear Sunscreen Stick SPF 50+",
    "🖍️ SPF sticks",
    "B",
    "g",
    "Sephora",
    "Sweat-activated, water-resistant; heaviest-duty option for summer runs."
   ],
   [
    "Naturium Azelaic Topical Acid 10%",
    "🌿 Azelaic acid",
    "L",
    "g",
    "Sephora",
    "10% azelaic + niacinamide, fragrance-free, cream-serum that layers under moisturizer without pilling."
   ],
   [
    "Anua Azelaic Acid 10 Hyaluron Serum (current)",
    "🌿 Azelaic acid",
    "C",
    "g",
    "Ulta",
    "Full 10%, serum texture you actually use."
   ],
   [
    "Topicals Faded Serum",
    "🌿 Azelaic acid",
    "B",
    "g",
    "Sephora",
    "Azelaic + tranexamic + niacinamide + kojic + licorice in one — a pigment multi-tool designed for deep skin; PM only, alternate with tret."
   ],
   [
    "The Ordinary Azelaic Acid Suspension 10%",
    "🌿 Azelaic acid",
    "B",
    "y",
    "Both",
    "Cheapest full-strength; thicker texture."
   ],
   [
    "Medik8 Crystal Retinal (start 1 → 3 → 6)",
    "🔁 Retinoid alternates",
    "L",
    "g",
    "Sephora",
    "Retinaldehyde — one step from retinoic acid, ~11× faster than retinol, encapsulated (more heat-tolerant than tret), fragrance-free, a real ladder."
   ],
   [
    "Differin (adapalene 0.1%) Gel",
    "🔁 Retinoid alternates",
    "B",
    "g",
    "Ulta",
    "OTC prescription-grade retinoid; the most heat-stable of the group — the road-week retinoid."
   ],
   [
    "Naturium Retinaldehyde Cream Serum 0.1%",
    "🔁 Retinoid alternates",
    "B",
    "g",
    "Sephora",
    "Same retinal logic, budget tier, fragrance-free."
   ],
   [
    "COSRX The Retinol 0.5 Oil",
    "🔁 Retinoid alternates",
    "B",
    "g",
    "Ulta",
    "Oil-based retinol — least irritating format for your tone."
   ],
   [
    "Dr. Dennis Gross Advanced Retinol + Ferulic Overnight",
    "🔁 Retinoid alternates",
    "B",
    "g",
    "Sephora",
    "Buffered retinol + ferulic + bakuchiol; gentlest entry."
   ],
   [
    "Eadem Milk Marvel Dark Spot Serum",
    "🎯 Pigment / PIH",
    "L",
    "g",
    "Sephora",
    "The only serum at either retailer clinically tested on melanin-rich skin first; niacinamide + encapsulated vitamin C + amber algae; fragrance-free."
   ],
   [
    "Good Molecules Discoloration Correcting Serum",
    "🎯 Pigment / PIH",
    "L",
    "g",
    "Ulta",
    "Tranexamic acid + niacinamide, fragrance-free, budget. Best value in the slot."
   ],
   [
    "COSRX Alpha-Arbutin 2% (current)",
    "🎯 Pigment / PIH",
    "C",
    "g",
    "Ulta",
    "Arbutin + tranexamic + niacinamide."
   ],
   [
    "Anua Niacinamide 10 + TXA 4% Serum",
    "🎯 Pigment / PIH",
    "B",
    "g",
    "Ulta",
    "Stackable with your Anua SPF/azelaic."
   ],
   [
    "Naturium Tranexamic Topical Acid 5%",
    "🎯 Pigment / PIH",
    "B",
    "g",
    "Sephora",
    "Highest tranexamic % at retail; kojic + licorice."
   ],
   [
    "The Inkey List Tranexamic Acid Night Treatment",
    "🎯 Pigment / PIH",
    "B",
    "g",
    "Sephora",
    "Budget PM option."
   ],
   [
    "Hyper Skin Hyper Even Brightening Dark Spot Cream",
    "🎯 Pigment / PIH",
    "B",
    "g",
    "Sephora",
    "Melanin-rich formulation; cream format for dry weeks."
   ],
   [
    "Anua Heartleaf 77% Toner · Skin1004 Centella Ampoule · Torriden Dive-In Serum",
    "🫧 Optional support",
    "B",
    "g",
    "Ulta / Sephora",
    "Calming toner/essence for post-tret redness — only if the core five are running clean. All fragrance-free."
   ],
   [
    "Medik8 Crystal Retinal Ceramide Eye · Good Molecules Caffeine Eye Cream",
    "🫧 Optional support",
    "B",
    "g",
    "Sephora / Ulta",
    "Under-eye (mild pigment/hollowness): sleep and the cut come first. Low priority, as written."
   ],
   [
    "Biodance Collagen-Real Deep Mask",
    "🫧 Optional support",
    "B",
    "g",
    "Both",
    "Sheet mask for reset days. Nice, not necessary."
   ]
  ],
  "note": "Shade test for tinted SPF: jawline, daylight, 5 minutes — gray or orange = return it. One retinoid per night, buffered, never alongside acids. Excluded sticks: Supergoop, Sun Bum (🔴 active suits) · Neutrogena, Coppertone, Banana Boat (parent flags)."
 },
 "lip": {
  "label": "Lip Bench",
  "icon": "👄",
  "tag": "Repair first, SPF always, nothing that tingles.",
  "rows": [
   [
    "Skinfix Barrier+ Lip Repair Balm",
    "💋 Repair / occlusive",
    "L",
    "g",
    "Sephora",
    "Lipid-repair chemistry, fragrance-free; strict-mode daytime swap."
   ],
   [
    "Aquaphor Lip Repair (day) · Healing Ointment (overnight seal)",
    "💋 Repair / occlusive",
    "L",
    "w",
    "Ulta",
    "Petrolatum + panthenol + shea, fragrance/flavor-free — the barrier-repair standard and your planned Rosy Lips replacement."
   ],
   [
    "The Ordinary Squalane + Amino Acids Lip Balm (current)",
    "💋 Repair / occlusive",
    "C",
    "y",
    "Both",
    "Daytime squalane layer."
   ],
   [
    "Dieux Lip Butter",
    "💋 Repair / occlusive",
    "B",
    "g",
    "Sephora",
    "Occlusive, fragrance-free; premium daytime option."
   ],
   [
    "Cetaphil Healing Ointment",
    "💋 Repair / occlusive",
    "B",
    "g",
    "Ulta",
    "Aquaphor equivalent; multi-use tube for the cab."
   ],
   [
    "EltaMD UV Lip Balm SPF 36",
    "☀️ Lip SPF",
    "L",
    "w",
    "Ulta",
    "Zinc-based, fragrance-free, derm standard; the cleanest plain lip SPF at retail."
   ],
   [
    "Aquaphor Lip Protectant + Sunscreen SPF 30",
    "☀️ Lip SPF",
    "L",
    "w",
    "Ulta",
    "Repair balm and SPF in one tube — fewer steps at the 3-hour stop."
   ],
   [
    "Sun Bum SPF 30 (current)",
    "☀️ Lip SPF",
    "C",
    "r",
    "Ulta",
    "Replace at next restock — brand under active litigation. Swap: EltaMD Lip SPF 36 or Aquaphor Lip SPF 30."
   ],
   [
    "Ultra Violette Sheen Screen SPF 50 (tinted)",
    "☀️ Lip SPF",
    "B",
    "o",
    "Sephora",
    "The iron-oxide (visible-light) option; keep, with the brand caveat in the Litigation Screen."
   ],
   [
    "Vacation Lip Sunscreen SPF 30",
    "☀️ Lip SPF",
    "B",
    "g",
    "Both",
    "Clean brand, but scented/flavored — only once lips are fully healed."
   ]
  ],
  "note": "Stays benched: Laneige Lip Sleeping Mask, Summer Fridays, Rhode, eos, Burt's Bees — flavored/fragranced or peppermint; wrong for repair. Never: Carmex, medicated ChapStick, anything with menthol or camphor."
 },
 "body": {
  "label": "Body Bench",
  "icon": "🧴",
  "tag": "Body SPF is the anchor product — everything else supports it.",
  "rows": [
   [
    "Black Girl Sunscreen SPF 30 Moisturizing Lotion",
    "☀️ Body SPF",
    "L",
    "w",
    "Ulta",
    "Made for melanin-rich skin: no cast, moisturizing (doubles as lotion on no-shower days), fragrance-free, big bottle."
   ],
   [
    "EltaMD UV Sport SPF 50 · EltaMD UV Lotion SPF 30+",
    "☀️ Body SPF",
    "L",
    "w",
    "Ulta",
    "Water/sweat-resistant 80 min for securement days; the Lotion is the everyday fragrance-free arm/neck bottle."
   ],
   [
    "CeraVe Hydrating Body Sunscreen SPF 30 (planned buy)",
    "☀️ Body SPF",
    "P",
    "y",
    "Ulta",
    "Niacinamide + ceramides."
   ],
   [
    "Isntree Watery Sun Gel (large) · BOJ Relief Sun (arms/hands)",
    "☀️ Body SPF",
    "B",
    "g",
    "Ulta / Both",
    "Face formulas cheap enough to use on the left arm + back of left hand."
   ],
   [
    "Sol de Janeiro Rio Radiance SPF 50 Body Lotion",
    "☀️ Body SPF",
    "B",
    "g",
    "Both",
    "Lane B body SPF that also carries the Cheirosa scent — one product doing two jobs on gourmand days."
   ],
   [
    "Vacation Classic Lotion SPF 30/50 · Bondi Sands Body SPF 50",
    "☀️ Body SPF",
    "B",
    "g",
    "Both / Ulta",
    "Clean brands, scented (coconut) — body only, Lane B days."
   ],
   [
    "Nécessaire The Body Retinol",
    "🌙 Retinol body lotion",
    "L",
    "g",
    "Sephora",
    "Encapsulated retinol + peptides, fragrance-free; the category leader and already in your Lane A brand."
   ],
   [
    "Medix 5.5 Retinol + Ferulic · Gold Bond Retinol Overnight (owned)",
    "🌙 Retinol body lotion",
    "C",
    "g",
    "Walmart",
    "Not at Sephora/Ulta."
   ],
   [
    "Naturium Retinol Body Lotion",
    "🌙 Retinol body lotion",
    "B",
    "g",
    "Sephora",
    "Same job, lower price, big bottle."
   ],
   [
    "Versed Press Restart Gentle Retinol Body Lotion",
    "🌙 Retinol body lotion",
    "B",
    "g",
    "Ulta",
    "Budget option (confirm fragrance-free on the current label)."
   ],
   [
    "Good Molecules Discoloration Correcting Body Treatment",
    "🎯 Body pigment",
    "L",
    "g",
    "Ulta",
    "Tranexamic acid + niacinamide in a body-sized bottle, fragrance-free. Exactly the slot Ambi would fill, without the parent flag."
   ],
   [
    "COSRX Alpha-Arbutin 2% (current)",
    "🎯 Body pigment",
    "C",
    "g",
    "Ulta",
    "Also your groin-safe lane (outer keratinized skin only)."
   ],
   [
    "Topicals Faded Serum (used on body spots)",
    "🎯 Body pigment",
    "B",
    "g",
    "Sephora",
    "Azelaic + tranexamic multi-tool; small bottle, spot use."
   ],
   [
    "Naturium Tranexamic 5% · Hyper Skin Hyper Even",
    "🎯 Body pigment",
    "B",
    "g",
    "Sephora",
    "Face-sized alternates for the neck and hands."
   ],
   [
    "Skinfix Barrier+ Lipid-Boost Body Cream",
    "🧼 Barrier & washes",
    "L",
    "g",
    "Sephora",
    "Ceramide/lipid body cream, fragrance-free; the strict-mode seal."
   ],
   [
    "CeraVe Moisturizing Cream · LRP Lipikar (current seal)",
    "🧼 Barrier & washes",
    "C",
    "y",
    "Ulta",
    "Current seal — keep if you accept parent-level flags."
   ],
   [
    "Nécessaire The Body Lotion — Fragrance-Free",
    "🧼 Barrier & washes",
    "B",
    "g",
    "Sephora",
    "The same lotion as your Lane A anchor, unscented, for recovery nights."
   ],
   [
    "Washes: Nécessaire FF · Byoma · Cetaphil",
    "🧼 Barrier & washes",
    "B",
    "g",
    "Sephora / Ulta",
    "Non-stripping bases for the days you are not building scent."
   ],
   [
    "Aquaphor Healing Ointment",
    "🧼 Barrier & washes",
    "B",
    "w",
    "Ulta",
    "Spot occlusive for cracked knuckles / tight patches."
   ],
   [
    "Megababe Thigh Rescue Anti-Chafe Stick",
    "🩳 Friction zone",
    "L",
    "g",
    "Ulta",
    "Ten hours in a seat = friction pigment. Glides on inner thighs before the shift; aluminum-free."
   ],
   [
    "Nécessaire The Deodorant (FF) · Salt & Stone Deodorant",
    "🩳 Friction zone",
    "B",
    "g",
    "Sephora",
    "Aluminum-free; the Salt & Stone Santal matches your woody lane."
   ],
   [
    "Nécessaire Body Wash Fragrance-Free",
    "🩳 Friction zone",
    "B",
    "g",
    "Sephora",
    "The only wash that belongs near the groin lane — no fragrance, no actives."
   ]
  ],
  "note": "Friction-zone rules unchanged: alpha-arbutin only on outer keratinized skin · nothing on mucosa · no glycolic, retinol or scrubs anywhere near this area."
 },
 "hair": {
  "label": "Hair & Scalp",
  "icon": "💇",
  "tag": "4a/4b · SD control gates everything — then moisture, seal, define.",
  "rows": [
   [
    "Jupiter Balancing Shampoo (zinc pyrithione 1%)",
    "💊 Medicated (SD)",
    "L",
    "g",
    "Ulta",
    "The ✅ rotation partner — antifungal by a different mechanism, prevents scalp adaptation, no sulfates, built for textured hair."
   ],
   [
    "Nizoral A-D (ketoconazole 1%) (current)",
    "💊 Medicated (SD)",
    "C",
    "y",
    "Ulta",
    "Tier A antifungal — no retail equivalent, so it stays."
   ],
   [
    "Briogeo Scalp Revival Dandruff Relief (3% salicylic)",
    "💊 Medicated (SD)",
    "B",
    "g",
    "Both",
    "The flake-lifter slot (what Jason Dandruff Relief does), Sephora-available."
   ],
   [
    "Nioxin Scalp Recovery Anti-Dandruff (zinc)",
    "💊 Medicated (SD)",
    "B",
    "g",
    "Ulta",
    "Second zinc option if Jupiter is out of stock."
   ],
   [
    "Briogeo Charcoal + Coconut Micro-Exfoliating Shampoo",
    "💊 Medicated (SD)",
    "B",
    "g",
    "Both",
    "Monthly pre-clarify on the scalp only (scrubbing rule is for skin, not scalp)."
   ],
   [
    "As I Am Coconut CoWash (current)",
    "🚿 Wash & clarify",
    "CL",
    "g",
    "Ulta",
    "The co-wash standard for 4b; keep."
   ],
   [
    "Kinky-Curly Come Clean (current clarifier)",
    "🚿 Wash & clarify",
    "CL",
    "g",
    "Ulta",
    "Monthly reset; keep."
   ],
   [
    "Pattern Beauty Cleansing Shampoo",
    "🚿 Wash & clarify",
    "B",
    "g",
    "Both",
    "Sulfate-free, moisture-heavy; good after a braid takedown."
   ],
   [
    "Bread Beauty Supply Hair-Wash",
    "🚿 Wash & clarify",
    "B",
    "g",
    "Sephora",
    "Sephora's best gentle wash for coily hair."
   ],
   [
    "Adwoa Beauty Baomint Moisturizing Shampoo",
    "🚿 Wash & clarify",
    "B",
    "g",
    "Sephora",
    "Mint + rosemary — scalp-forward, SD-friendly, low-lather."
   ],
   [
    "Camille Rose Sweet Ginger Cleansing Rinse",
    "🚿 Wash & clarify",
    "B",
    "g",
    "Ulta",
    "Ginger co-wash; scalp-stimulating rotation."
   ],
   [
    "Melanin Haircare African Black Soap Shampoo",
    "🚿 Wash & clarify",
    "B",
    "g",
    "Ulta",
    "Alternate clarifier that doesn't strip."
   ],
   [
    "TGIN Honey Miracle Hair Mask",
    "🍯 Deep conditioners",
    "L",
    "g",
    "Ulta",
    "The 4b deep-conditioner benchmark; honey + jojoba + olive."
   ],
   [
    "Briogeo Don't Despair, Repair! Mask",
    "🍯 Deep conditioners",
    "L",
    "g",
    "Both",
    "Protein-moisture balanced; the post-takedown mask."
   ],
   [
    "Shea Moisture Manuka · Cantu Deep Treatment (current)",
    "🍯 Deep conditioners",
    "C",
    "m",
    "Ulta",
    "Shea Moisture 🟡 — swap; Cantu ✅ keep."
   ],
   [
    "Camille Rose Algae Renew Deep Conditioner",
    "🍯 Deep conditioners",
    "B",
    "g",
    "Ulta",
    "Blue-green algae + mango butter; slip for detangling."
   ],
   [
    "Adwoa Baomint Deep Treatment · Bread Hair-Mask",
    "🍯 Deep conditioners",
    "B",
    "g",
    "Sephora",
    "Sephora-side rotation."
   ],
   [
    "Pattern Intensive Conditioner · As I Am Hydration Elation",
    "🍯 Deep conditioners",
    "B",
    "g",
    "Both / Ulta",
    "Rinse-out conditioners after every shampoo."
   ],
   [
    "Melanin Haircare Softening Leave-In",
    "💧 Leave-ins",
    "L",
    "g",
    "Ulta",
    "Built by a 4c natural for 4c hair; softens without buildup."
   ],
   [
    "Kinky-Curly Knot Today",
    "💧 Leave-ins",
    "L",
    "g",
    "Ulta",
    "Leave-in + detangler in one; the cult standard for coils."
   ],
   [
    "As I Am Leave-In Conditioner (current)",
    "💧 Leave-ins",
    "C",
    "g",
    "Ulta",
    "Keep."
   ],
   [
    "Camille Rose Curl Love Milk · TGIN Green Tea Leave-In",
    "💧 Leave-ins",
    "B",
    "g",
    "Ulta",
    "Milk-weight alternates."
   ],
   [
    "Pattern Leave-In Conditioner",
    "💧 Leave-ins",
    "B",
    "g",
    "Both",
    "Heaviest of the group — winter/braid prep."
   ],
   [
    "Tropic Isle Living JBCO (current)",
    "🛢️ Oils",
    "CL",
    "g",
    "Ulta",
    "The base carrier; keep."
   ],
   [
    "Melanin Haircare Multi-Use Pure Oil Blend",
    "🛢️ Oils",
    "L",
    "g",
    "Ulta",
    "Pre-blended sealing oil (castor, jojoba, sunflower); one bottle for scalp, shaft and beard."
   ],
   [
    "Briogeo Rosemary Pre-Wash Scalp Oil",
    "🛢️ Oils",
    "B",
    "g",
    "Both",
    "The rosemary slot without Mielle — 🔴 Mielle is excluded."
   ],
   [
    "Pattern Jojoba Oil Hair Serum",
    "🛢️ Oils",
    "B",
    "g",
    "Both",
    "Light jojoba blend — the crossover oil for hair and beard."
   ],
   [
    "Ceremonia Aceite de Moska Scalp Oil",
    "🛢️ Oils",
    "B",
    "g",
    "Sephora",
    "Castor + rosemary; Sephora-side rosemary option."
   ],
   [
    "Jamaican Mango & Lime Black Castor Oil",
    "🛢️ Oils",
    "B",
    "g",
    "Ulta",
    "Second JBCO source when Tropic Isle is out."
   ],
   [
    "Melanin Haircare Twist-Elongating Style Cream",
    "🧈 Creams & definers",
    "L",
    "g",
    "Ulta",
    "The final seal for 4b and the curl-definition Qoves asked for, in one product."
   ],
   [
    "Kinky-Curly Curling Custard",
    "🧈 Creams & definers",
    "L",
    "g",
    "Ulta",
    "The definer that made coil definition a category; use for the \"controlled texture\" barber direction."
   ],
   [
    "Shea Moisture 100% Raw Shea Butter (current)",
    "🧈 Creams & definers",
    "C",
    "y",
    "Ulta",
    "🟡 — swap."
   ],
   [
    "TGIN Butter Cream Daily Moisturizer",
    "🧈 Creams & definers",
    "B",
    "g",
    "Ulta",
    "Daily refresh cream between wash days."
   ],
   [
    "Camille Rose Curl Maker · Pattern Curl Gel",
    "🧈 Creams & definers",
    "B",
    "g",
    "Ulta / Both",
    "Definition without crunch; alternate definers."
   ],
   [
    "As I Am DoubleButter · Cantu Shea Butter Leave-In",
    "🧈 Creams & definers",
    "B",
    "g",
    "Ulta",
    "Heavy butter seals for winter runs."
   ],
   [
    "Bread Hair-Cream · Pattern Styling Cream",
    "🧈 Creams & definers",
    "B",
    "g",
    "Sephora / Both",
    "Lighter cream seals; Sephora-side."
   ],
   [
    "Kitsch Satin Pillowcase · Sleep Bonnet",
    "🛌 Braid · edge · sleep",
    "L",
    "g",
    "Ulta",
    "The 90%-of-the-benefit item from Master Sequence; bonnet for the bunk."
   ],
   [
    "The Doux Mousse Def Texture Foam",
    "🛌 Braid · edge · sleep",
    "L",
    "g",
    "Ulta",
    "The exact spec in your cornrow rules: light-hold, water-based, alcohol-free mousse for the 1–2 week refresh."
   ],
   [
    "Evolve Satin Bonnet / Durag",
    "🛌 Braid · edge · sleep",
    "B",
    "g",
    "Ulta",
    "Budget satin cover; buy two so one is always clean."
   ],
   [
    "Pattern Edge Control · Cantu Edge Stay Gel",
    "🛌 Braid · edge · sleep",
    "B",
    "g",
    "Both / Ulta",
    "Light edge lay — light hand, edges are the traction-alopecia zone."
   ],
   [
    "Slip Pure Silk Pillowcase",
    "🛌 Braid · edge · sleep",
    "B",
    "g",
    "Sephora",
    "22-momme mulberry silk — the real-silk upgrade if you want it."
   ]
  ],
  "note": "Rotation stays: week 1 Nizoral · week 2 zinc or salicylic · monthly clarify first. Skip: Head & Shoulders, Ouai Anti-Dandruff (P&G 🟡), Neutrogena T/Sal (Kenvue 🟡). Essential oils stay at Walmart — not a Sephora/Ulta category."
 },
 "beard": {
  "label": "Beard & Brow",
  "icon": "🧔",
  "tag": "The frame. Oils, washes and the brow kit — clean brands only.",
  "rows": [
   [
    "Every Man Jack Beard Oil",
    "🪒 Beard",
    "L",
    "g",
    "Ulta",
    "Jojoba/argan base, sandalwood option that matches Lane A; the cleanest men's line at Ulta."
   ],
   [
    "Pattern Jojoba Oil Hair Serum",
    "🪒 Beard",
    "L",
    "g",
    "Both",
    "Near-pure jojoba — closest to \"plain jojoba beard oil\" at either retailer; one bottle serves hair and beard."
   ],
   [
    "Kirkland minoxidil 5% foam (current)",
    "🪒 Beard",
    "C",
    "g",
    "Costco/Amazon",
    "Not a Sephora/Ulta item; unchanged."
   ],
   [
    "Every Man Jack Beard Wash",
    "🪒 Beard",
    "B",
    "g",
    "Ulta",
    "The 2–3×/week beard wash slot."
   ],
   [
    "Duke Cannon Beard Oil · Wash · Balm",
    "🪒 Beard",
    "B",
    "g",
    "Ulta",
    "Full beard set from a clean independent brand."
   ],
   [
    "Melanin Haircare Multi-Use Pure Oil Blend",
    "🪒 Beard",
    "B",
    "g",
    "Ulta",
    "Crossover from the hair bench — beard skin is still skin."
   ],
   [
    "Skip: Jack Black, Cremo (Edgewell 🟡) · Baxter, Kiehl's (L'Oréal 🟡) · Dr. Squatch (🔴)",
    "🪒 Beard",
    "S",
    "r",
    "—",
    "Parent flags and one active suit — the skip list for the beard aisle."
   ],
   [
    "Anastasia Brow Wiz — Ebony or Dark Brown",
    "✏️ Brow",
    "L",
    "g",
    "Both",
    "The category standard; ultra-fine tip for the lip zone and brow peak. Soft black, never jet."
   ],
   [
    "NYX Micro Brow Pencil (current stopgap)",
    "✏️ Brow",
    "C",
    "y",
    "Ulta",
    "🟡 L'Oréal — strict swap is the Brow Wiz."
   ],
   [
    "Fenty Brow MVP · Rare Beauty Brow Harmony",
    "✏️ Brow",
    "B",
    "g",
    "Sephora",
    "Deep-shade ranges built with dark skin in mind."
   ],
   [
    "Fenty Pro Filt'r Setting Powder (translucent)",
    "✏️ Brow",
    "B",
    "g",
    "Sephora",
    "The \"set it if it matters\" step against sweat smudge."
   ]
  ],
  "note": "Derma-stamp is Amazon territory, not Sephora/Ulta. Unchanged."
 },
 "oral": {
  "label": "Oral & Internal",
  "icon": "🦷",
  "tag": "The Ulta aisle for the inside game.",
  "rows": [
   [
    "Heliocare Advanced Antioxidant",
    "💊 Oral",
    "L",
    "g",
    "Ulta",
    "Polypodium leucotomos 240 mg + nicotinamide 500 mg — your two orals in one capsule; confirm dose on the current label."
   ],
   [
    "Lumineux Whitening Strips & Toothpaste",
    "🦷 Whitening",
    "B",
    "g",
    "Ulta",
    "Peroxide-free, enamel-safe — the whitening slot until the Phase-3 in-office session."
   ],
   [
    "Spotlight Oral Care",
    "🦷 Whitening",
    "B",
    "g",
    "Ulta",
    "Dentist-formulated fluoride toothpaste and mouthwash alternates."
   ],
   [
    "Crest",
    "🦷 Whitening",
    "S",
    "y",
    "—",
    "Skip — P&G parent flag."
   ]
  ],
  "note": ""
 }
};

export const SCENT = {
 "label": "Scent Bench",
 "icon": "🌫️",
 "tag": "Two lanes, zero mixing. One lane per day · damp skin · 2 sprays max · nothing scented above the jaw.",
 "lanes": [
  {
   "name": "🌲 Lane A — Clean / Woody (work lane)",
   "rows": [
    [
     "Base (wash)",
     "Nécessaire Body Wash Sandalwood/Eucalyptus ✅",
     "⭐ Salt & Stone Santal & Vetiver Body Wash ✅ · Byredo Body Wash ✅ · Glossier Body Hero Wash ✅ (Sephora)"
    ],
    [
     "Lock (lotion)",
     "Nécessaire Body Lotion Sandalwood ✅",
     "⭐ Salt & Stone Santal Body Lotion ✅ · Nécessaire Eucalyptus ✅ · Glossier Body Hero Daily Perfecting Cream ✅"
    ],
    [
     "Movement (mist)",
     "Ouai Melrose Place / North Bondi 🟡",
     "⭐ Phlur Body Mist (Missing Person / Father Figure) ✅ · Salt & Stone Body Mist ✅ · Glossier You Body Mist ✅"
    ],
    [
     "Top (cologne, 2 sprays)",
     "Dior Sauvage ✅ · Nautica Voyage ✅ (Ulta)",
     "Bleu de Chanel ✅ · Montblanc Explorer ✅ · JPG Le Male Le Parfum ✅ · Byredo Bal d'Afrique ✅ · Hugo Boss Bottled ✅. Strict-mode skips: YSL, Armani, Prada, Valentino, Azzaro, Margiela (L'Oréal 🟡) · Tom Ford, Le Labo, Jo Malone (Estée Lauder 🟡)."
    ]
   ]
  },
  {
   "name": "🍦 Lane B — Warm / Gourmand",
   "rows": [
    [
     "Base (wash)",
     "Native Coconut & Vanilla 🟡 (P&G)",
     "⭐ Kopari Coconut Body Wash (Ulta) ✅ · Sol de Janeiro Bum Bum Body Wash ✅"
    ],
    [
     "Lock",
     "Sol de Janeiro Bum Bum Cream (Cheirosa 62) ✅",
     "⭐ Kopari Coconut Melt (Ulta) ✅ · SdJ Cheirosa 71 Body Cream ✅ · Tree Hut Shea Body Butter (Ulta) ✅"
    ],
    [
     "Movement",
     "SdJ Cheirosa 62 Mist ✅",
     "Kayali Vanilla 28 Hair & Body Mist ✅ · Phlur Vanilla Skin Mist ✅ · Ellis Brooklyn Vanilla Milk Mist ✅"
    ],
    [
     "Top",
     "light vanilla-amber",
     "Versace Eros (Ulta) ✅ · Dior Sauvage Elixir ✅ · Kayali Vanilla 28 EDP ✅ · Rabanne 1 Million Elixir (Ulta) ✅"
    ]
   ]
  }
 ]
};

export const BONUS: string[][] = [
 [
  "PDRN cream / serum (INKEY, Mixsoon, Skin1004)",
  "Glow & Hydration",
  "g",
  "Days",
  "Cosmetic only",
  "$15–30",
  "Sephora",
  "Delivers real hydration and a dewy finish — from the glycerin, HA, panthenol and occlusive base. The PDRN molecule itself (50k–1.5M Da vs the ~500 Da penetration threshold) does not reach the fibroblasts its mechanism depends on.",
  "Fragrance-free versions only. Enjoy it freely — just never as a substitute for the Rejuran sessions, which are the version of PDRN that actually remodels."
 ],
 [
  "Snail mucin essence (COSRX Advanced 96)",
  "Glow & Hydration",
  "g",
  "Days",
  "Cosmetic only",
  "$15–25",
  "Ulta",
  "Humectant hydration and a smoother, light-reflecting surface. Well tolerated, layers cleanly under moisturiser.",
  "Fine on tret nights as the buffer layer. No conflict with anything in the core stack."
 ],
 [
  "Squalane oil",
  "Glow & Hydration",
  "g",
  "Hours",
  "Cosmetic only",
  "$8–30",
  "Ulta",
  "Seals moisture and adds light reflectivity — the literal 'lit from within' finish, borrowed for a day.",
  "Last step, over moisturiser, PM only. Never between tret and skin — it changes how the tret spreads."
 ],
 [
  "Rice / oat hydrating toner (Anua Rice 70, I'm From)",
  "Glow & Hydration",
  "g",
  "Hours",
  "Cosmetic only",
  "$15–22",
  "Ulta",
  "Humectant prep layer — makes everything after it spread better and makes skin look immediately less dull.",
  "Fragrance-free versions only. Adds a step — skip it on road-minimum days without guilt."
 ],
 [
  "Thermal water face mist (Avène, LRP)",
  "Glow & Hydration",
  "g",
  "Hours",
  "Cosmetic only",
  "$12–18",
  "Ulta",
  "Momentary cooling and comfort. In a hot cab it is a legitimate way to take heat out of the face without stripping anything.",
  "Pat dry or seal with moisturiser — letting mist evaporate off bare skin is net drying."
 ],
 [
  "Peptide moisturiser (Medik8, The Ordinary Buffet)",
  "Glow & Hydration",
  "g",
  "Days",
  "C — anecdotal",
  "$20–45",
  "Sephora",
  "Mostly a good moisturiser. Signal peptides have plausible mechanism and weak-to-moderate human outcome data — nowhere near retinoid-level, and you already run a retinoid.",
  "Fine as an AM moisturiser swap. Do not pay premium prices expecting tret-scale results."
 ],
 [
  "Slugging with Aquaphor / Vaseline",
  "Glow & Hydration",
  "g",
  "Days",
  "B — decent",
  "$0 — own it",
  "Anywhere",
  "Occlusion — cuts transepidermal water loss overnight. Genuinely repairs a barrier stressed by tret, dry cab air and irregular showers.",
  "Over moisturiser, never over bare tret — occlusion increases absorption and irritation. Free; you already own it."
 ],
 [
  "Overnight collagen mask (Biodance Deep Mask)",
  "Masks & Patches",
  "g",
  "Days",
  "Cosmetic only",
  "$4–6 each",
  "Ulta",
  "Occlusive hydrogel sheet — traps water against skin overnight. Morning plumpness is water content, not collagen; topical collagen is far too large to penetrate.",
  "The 'wake up glowing' effect is real and reliable. Ideal the night before a date or photos."
 ],
 [
  "Calming sheet masks (Torriden, Anua Heartleaf)",
  "Masks & Patches",
  "g",
  "Hours",
  "Cosmetic only",
  "$3–5 each",
  "Ulta",
  "Short burst of hydration plus genuine comfort on a post-tret irritated night. Reduces the redness that would otherwise tempt you into skipping tret.",
  "Fragrance-free only. 15–20 min max — leaving a mask on until it dries pulls water back out of the skin."
 ],
 [
  "Under-eye hydrogel patches",
  "Masks & Patches",
  "g",
  "Hours",
  "Cosmetic only",
  "$10–25",
  "Ulta",
  "Temporary de-puff via hydration and mild cooling. Does nothing for pigment or hollowness — Qoves flagged both, and sleep plus the cut are the actual levers there.",
  "You already own these. Best used the morning after a bad sleep night, which OTR guarantees plenty of."
 ],
 [
  "Hydrocolloid patches (Mighty Patch)",
  "Masks & Patches",
  "g",
  "1–2 days",
  "B — decent",
  "$8–13",
  "Ulta",
  "Absorbs fluid from a lesion and — far more importantly — physically blocks you from picking it. Picking is the single largest PIH driver on your tone.",
  "Quietly the most genuinely useful item on this entire page. It sits on the Bonus Shelf only because it treats one spot, not the whole face."
 ],
 [
  "Ice globes / cold roller",
  "Tools",
  "g",
  "Hours",
  "C — anecdotal",
  "$15–25",
  "Amazon",
  "Vasoconstriction — temporary de-puff and tighter-looking skin for a couple of hours. Feels excellent on a heat-flushed face.",
  "Glide, never drag. Clean before every use. Skip entirely for 2 weeks after Sylfirm."
 ],
 [
  "Satin pillowcase / bonnet",
  "Sleep & Accessories",
  "g",
  "Structural",
  "B — decent",
  "$15–20 / 4-pk",
  "Ulta",
  "Low friction — protects edges, and keeps your PM products on your face instead of in the pillow.",
  "Already in the Master Sequence. Listed here so gifted ones are recognised as a genuine yes. Wash every 2–3 nights."
 ],
 [
  "Lip mask / overnight lip treatment",
  "Lips",
  "y",
  "1–2 days",
  "B — decent",
  "$10–25",
  "Sephora",
  "Overnight occlusion — genuinely helpful for the Lip Repair Protocol, but only in unflavoured, unscented form.",
  "CONDITION: unflavoured and unscented ONLY. Laneige, Summer Fridays, eos and Burt's Bees are already benched for flavour or mint. Flavour drives lip-licking — the trauma cycle you are actively reversing."
 ],
 [
  "Gua sha / facial roller",
  "Tools",
  "y",
  "Hours",
  "C — anecdotal",
  "$10–30",
  "Amazon",
  "Temporary lymphatic de-puff and a pleasant ritual. No lasting contour change — facial 'lifting' claims are not supported.",
  "CONDITION: only over a balm or oil so it glides. Dragging a stone across tret-thinned skin is friction trauma, and friction trauma is how PIH starts on Fitzpatrick V–VI. Never on irritated skin, never within 3 weeks of Sylfirm."
 ],
 [
  "Facial steaming",
  "Tools",
  "y",
  "Hours",
  "C — anecdotal",
  "$0–40",
  "Anywhere",
  "Softens surface debris and feels good. Does not 'open pores' — pores have no musculature.",
  "CONDITION: heat is a known trigger for both SD flares and melasma-type pigment. You run SD at 4.5–5/10 and drive a hot cab. Occasional at most, never before a procedure, never followed by extraction."
 ],
 [
  "At-home red-light LED mask (Omnilux, Solawave)",
  "Devices",
  "y",
  "Weeks",
  "B — decent",
  "$150–450",
  "Sephora",
  "Red / near-infrared light has moderate evidence for fine lines and wound healing. Home-device effect sizes are modest and slow — months of near-daily use.",
  "CONDITION: RED / near-infrared ONLY. No blue-light mode, ever — visible light drives pigment on your tone. Device must not run warm. Skip for 2 weeks around any procedure. The cut and sleep outrank it."
 ],
 [
  "Oral collagen peptides",
  "Oral",
  "y",
  "Weeks",
  "C — anecdotal",
  "$25–45/mo",
  "Amazon",
  "Meta-analyses show small but measurable gains in skin hydration and elasticity. Real and modest — and the great majority of those trials are funded by collagen manufacturers.",
  "CONDITION: count it as protein, not skincare. At ~10 g/day it is a mediocre protein source at a premium price. If it displaces whey or food protein during the cut, it is a net negative."
 ],
 [
  "PHA exfoliating toner pads",
  "Pigment",
  "y",
  "Days",
  "C — anecdotal",
  "$15–30",
  "Ulta",
  "Very gentle surface exfoliation. Largely redundant once tretinoin runs nightly — tret already handles turnover.",
  "CONDITION: PHA only (never AHA/BHA pads on the face), max 1×/week, never on a tret night, never within 4 weeks of a procedure. Honestly borderline red — upside over your existing stack is close to zero."
 ],
 [
  "Vitamin C 'brightening' mask or ampoule",
  "Pigment",
  "y",
  "Days",
  "B — decent",
  "$5–35",
  "Ulta",
  "A real active in a fun format. Overlaps almost entirely with the Maelove you already run in the AM.",
  "CONDITION: this is an ACTIVE — one new item at a time, 4+ weeks apart. Never the same night as tret. Never store it in the cab; vitamin C oxidises in heat."
 ],
 [
  "VT Reedle Shot / any 'spicule' or 'needle' ampoule",
  "Devices",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "$25–35",
  "Ulta",
  "Contains microscopic sponge spicules that embed in skin to force product penetration. It is deliberate micro-injury sold in a serum bottle.",
  "At-home microneedling wearing a disguise — your protocol already rules that out. Uncontrolled injury depth on V–VI is exactly the PIH trigger the whole system is engineered around. A very popular K-beauty gift: say thank you, then no."
 ],
 [
  "Blue-light LED masks or panels",
  "Devices",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Sephora",
  "Blue and visible light are established drivers of pigmentation in Fitzpatrick IV–VI skin.",
  "Your entire SPF strategy includes iron oxides specifically to block visible light. Buying a device that aims it at your face contradicts the plan. Red / NIR-only devices are the Amber option."
 ],
 [
  "At-home dermaroller / microneedling pen (face)",
  "Devices",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Amazon",
  "Safe depths do not remodel anything; remodelling depths cause controlled injury that cannot be kept sterile outside a clinic.",
  "Already a written rule: one bad pass equals 6–12 months of pigment. Scalp 1.0 mm and mustache 0.25 mm stay — different goal. Sylfirm X is the clinic-grade version, already scheduled."
 ],
 [
  "At-home IPL / 'laser' device",
  "Devices",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Amazon",
  "Targets melanin. On Fitzpatrick V–VI it cannot reliably distinguish the pigment in a spot from the pigment in your skin.",
  "Genuinely dangerous — burns and permanent hypopigmentation. Most home units are explicitly not indicated for deep skin tones. Nd:YAG 1064 in a clinic is the only laser on your safe list."
 ],
 [
  "At-home peels (high-% glycolic, TCA, 'peel kits')",
  "Pigment",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Amazon",
  "Uncontrolled chemical injury with no way to judge depth in real time.",
  "Already on the Skin Protocol no-fly list. Peels on deep skin tones belong to a derm with a Fitzpatrick V–VI portfolio, or to nobody."
 ],
 [
  "Skin-lightening / 'whitening' creams (unregulated sellers)",
  "Pigment",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Anywhere",
  "Frequently contaminated. Regulators have repeatedly found mercury, undeclared hydroquinone and potent steroids such as clobetasol in imported lightening creams.",
  "Documented real harm: mercury toxicity, steroid atrophy, and rebound pigment worse than the starting point. Your pigment plan is tret + azelaic + iron-oxide SPF. That route is safe and it works."
 ],
 [
  "Physical scrubs, cleansing brushes, konjac scrubbing",
  "Tools",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Anywhere",
  "Mechanical trauma to the barrier.",
  "The Lip Repair Protocol identifies repeat-trauma scrubbing as the root cause of the darkening you are currently reversing. Zero scrubbing is already the rule — this entry exists so a gifted 'exfoliating set' gets recognised for what it is."
 ],
 [
  "Anything with menthol, camphor or fragrance (face or lips)",
  "Lips",
  "r",
  "Nothing",
  "Harmful on Fitz V–VI",
  "—",
  "Anywhere",
  "The tingle is irritation being marketed as efficacy.",
  "Carmex and medicated ChapStick are already permanently benched. On your tone, every irritation event is a potential pigment event. Fragrance-free above the jaw is non-negotiable."
 ]
];

export const PROC = {
 "gates": [
  [
   "GATE 1",
   "Same job or better",
   "Matches the slot's output: tone / texture / reflectivity."
  ],
  [
   "GATE 2",
   "Equal or lower pigment + scar risk on V–VI",
   "Non-negotiable. This gate kills most of the industry."
  ],
  [
   "GATE 3",
   "No long-term repercussions",
   "Short-term downtime fine; anything irreversible, cumulative-damage, or multi-year-committed is out. The standard is decades, not seasons."
  ]
 ],
 "reg": [
  "<b>Profhilo</b> — not FDA-approved. Evolus signed a July 2026 deal with IBSA to bring it through approval; their own filing implies launch beyond 2026. A US clinic offering it today is using gray-market imported product — unregulated supply chain, no recourse.",
  "<b>Rejuran (PN/PDRN injectable)</b> — not approved for aesthetic injection in the US. Topical PDRN is legal as a cosmetic; the syringe is not.",
  "<b>Sylfirm X</b> — ✅ FDA-cleared. Fully bookable at any reputable US practice.",
  "<b>Not a plan-killer — a routing problem.</b> US-legal swap (default) · Passport route (Profhilo & Rejuran are standard-of-care in Thailand and Korea — your 2027–28 trips make it nearly free in logistics) · Wait for the launch (the slot doesn't expire; Skinvive holds it)."
 ],
 "flags": [
  [
   "Eczema on chart (active, dx 2018)",
   "An atopic barrier flares harder and pigments easier. Hard rule: no needling procedure on skin that hasn't been flare-free for 2+ weeks. Say the word \"eczema\" at every consult."
  ],
  [
   "Excedrin contains aspirin",
   "Skip it for ~7 days before any injectable or needling session (bruising/bleeding), alongside the fish-oil pause in the T-5 protocol. Plain acetaminophen is the swap that week."
  ],
  [
   "Lidocaine + anesthesia tolerated (Feb 2026)",
   "No drug allergies on file. Topical numbing for Sylfirm X is a green light."
  ],
  [
   "Scar-quality check before first RF session",
   "Documented trauma scarring (2019). Flat and faded = proceed; raised, thick, or growing past the wound edge = tell the provider — keloid-prone skin changes the entire microneedling conversation on V–VI."
  ]
 ],
 "slots": [
  {
   "name": "Slot 1 — Sylfirm X",
   "color": "red",
   "job": "The job: texture + pores + early laxity + pigment, one modality. The slot is really \"insulated-needle RF microneedling\" — Sylfirm X is one brand sitting in it. Peer-reviewed skin-of-color data backs the class, not just the logo.",
   "swaps": [
    [
     "Genius (Lutronic)",
     "Full 1:1. Insulated needles, real-time impedance feedback — arguably the best-instrumented device in the class.",
     "$600–1,200",
     "g",
     "Equal or better"
    ],
    [
     "Secret RF",
     "Full 1:1. Insulated needles, widely available, often cheaper.",
     "$500–1,000",
     "g",
     "Equal"
    ],
    [
     "Potenza (insulated tips)",
     "Full 1:1 if the practice uses insulated tips — confirm before booking, it runs both.",
     "$600–1,200",
     "g",
     "Equal, one question to ask"
    ],
    [
     "EndyMed Intensif / Vivace",
     "Same class, solid track record.",
     "$500–1,000",
     "g",
     "Equal"
    ],
    [
     "Morpheus8",
     "The famous one — but it runs deeper, coagulates fat, and carries more reported grid-pattern PIH on darker skin than the pulsed platforms.",
     "$800–1,500",
     "y",
     "Only with a V–VI portfolio provider"
    ],
    [
     "Professional microneedling (SkinPen)",
     "~70% of the job at ~30% of the price. Texture + pores + pigment, no RF tightening.",
     "$200–400",
     "y",
     "Budget bench"
    ],
    [
     "Nd:YAG 1064 laser toning",
     "Pigment slice only. Already your rescue laser — can substitute the pigment portion of a skipped Sylfirm year.",
     "$250–500",
     "y",
     "Partial (tone)"
    ],
    [
     "Pico 1064 (PicoWay)",
     "Pigment + subtle texture, minimal heat. The gentlest laser option for V–VI tone work.",
     "$400–800",
     "y",
     "Partial (tone)"
    ],
    [
     "Low-density 1927nm thulium (LaseMD Ultra / Moxi)",
     "Glow + pigment; published success treating PIH in skin of color — but it is an epidermal laser, so the margin for provider error is thinner than RF.",
     "$500–900",
     "r",
     "Conditional — SOC-expert only, low density, test spot"
    ],
    [
     "Salicylic / mandelic peel series",
     "Tone + texture maintenance between device years. The two acids with the best V–VI safety record.",
     "$100–200 ×4–6",
     "y",
     "Budget bench"
    ],
    [
     "HIFU (Sofwave / Ultherapy)",
     "Laxity only, color-blind. At 25 with no laxity complaint, it solves a problem you don't have.",
     "$1,500–3,500",
     "w",
     "Not yet — file for your 30s"
    ]
   ],
   "closed": "Bench permanently closed: IPL/BBL · ablative CO2 · alexandrite/ruby · deep TCA · high-density 1550/1927 · at-home microneedling. No price or provider reopens these on your tone."
  },
  {
   "name": "Slot 2 — Profhilo",
   "color": "teal",
   "job": "The job: the \"lit from within\" reflectivity — deep hydration and skin-quality remodeling with zero epidermal injury.",
   "swaps": [
    [
     "Skinvive (Juvéderm)",
     "The only FDA-approved microdroplet HA skin booster in the US. Same goal, different geometry — intradermal microdroplets across the cheeks vs Profhilo's 5-point spread. ~6-month duration. The US-legal 1:1.",
     "$600–900",
     "g",
     "The default US swap"
    ],
    [
     "Profhilo abroad 🇹🇭🇰🇷🇬🇧",
     "The original, where it's licensed. Bangkok/Seoul pricing often beats US gray-market. Schedule ≥48h before flights and away from hard training days.",
     "$300–600 abroad",
     "g",
     "Passport route"
    ],
    [
     "Restylane Skinboosters",
     "Same class, long track record in Europe/Asia — but also not FDA-approved in the US. Abroad-only option.",
     "$400–700 abroad",
     "y",
     "Abroad bench"
    ],
    [
     "NCTF 135HA mesotherapy",
     "HA + vitamin cocktail microinjections. Weaker evidence base, more sessions, popular in EU/Asia.",
     "$200–400 ×3+",
     "y",
     "Thin evidence"
    ],
    [
     "Hyperdilute Sculptra / biostimulators",
     "Often pitched as the \"better Profhilo.\" It isn't for you: poly-L-lactic acid commits your face for 2+ years, isn't dissolvable, and carries a nodule tail-risk.",
     "$800–1,500",
     "r",
     "Fails Gate 3 — bench closed"
    ]
   ],
   "closed": ""
  },
  {
   "name": "Slot 3 — Rejuran",
   "color": "blue",
   "job": "The job: texture + elasticity + repair signaling (polynucleotides), near-zero pigment risk.",
   "swaps": [
    [
     "Microneedling + topical PDRN/exosomes (same visit)",
     "The US-legal replica: open microchannels, then flood them with topical PDRN or exosome serum. Evidence younger than injected PN, but the same biology delivered legally — and it piggybacks on a session already in the calendar.",
     "+$100–300 on a needling session",
     "g",
     "The default US swap"
    ],
    [
     "Rejuran abroad 🇰🇷🇹🇭",
     "The original, in the countries that invented the category. Korea is the world's deepest bench of Rejuran injectors; Thailand close behind.",
     "$150–400 / session abroad",
     "g",
     "Passport route"
    ],
    [
     "Plinest / Nucleofill",
     "The Italian originals of the polynucleotide class — same molecule family, licensed in Europe/UK.",
     "$250–500 abroad",
     "y",
     "Abroad bench"
    ],
    [
     "Skinvive",
     "Covers the hydration/reflectivity share of the job, not the regenerative-signaling share.",
     "$600–900",
     "y",
     "Partial"
    ],
    [
     "PRF (not PRP) under-eye",
     "Autologous — your own blood, zero product-regulation issue, zero allergy risk. Earns a look only if under-eye texture becomes a specific complaint.",
     "$500–800",
     "y",
     "Situational only"
    ]
   ],
   "closed": ""
  }
 ],
 "stacks": [
  [
   "🇺🇸 US-Legal Year (default)",
   "$1,800–2,800",
   [
    "Jan–Feb|Insulated RF microneedling (any 🟢 device)",
    "Apr–May|Skinvive",
    "Jun–Aug|Blackout — nothing",
    "Oct–Nov|Microneedling + PDRN/exosome topical"
   ]
  ],
  [
   "🛂 Passport Year (2027+)",
   "$1,200–2,200",
   [
    "Jan–Feb|Sylfirm X at home",
    "Apr–May|Profhilo #1 (Bangkok/Seoul trip)",
    "Jun–Aug|Blackout — nothing",
    "Oct–Nov|Rejuran or Profhilo #2 (trip #2)"
   ]
  ],
  [
   "💰 Budget Year",
   "$900–1,600",
   [
    "Jan–Feb|SkinPen microneedling series",
    "Apr–May|Peel series or Nd:YAG toning",
    "Jun–Aug|Blackout — nothing",
    "Oct–Nov|Microneedling + PDRN topical"
   ]
  ],
  [
   "👑 Original Plan",
   "$2,000–3,500",
   [
    "Jan–Feb|Sylfirm X",
    "Apr–May|Profhilo #1 (gray-market in US — see Regulatory Reality)",
    "Jun–Aug|Blackout — nothing",
    "Oct–Nov|Rejuran or Profhilo #2"
   ]
  ]
 ],
 "watch": [
  "Evolus wins Profhilo FDA approval → Skinvive rows demote to bench, Profhilo becomes the US starter. Watch for the announcement (2027+).",
  "US PN/PDRN injectable approval → same promotion for the Rejuran slot.",
  "Any raised or keloid scarring found at the scar check → all needling rows freeze until a derm clears them.",
  "Eczema flare pattern worsens → injectable-only years (Skinvive/Profhilo) are the fallback; they don't touch the barrier."
 ]
};

export const LIT: string[][] = [
 [
  "Anua · Beauty of Joseon · COSRX · Skin1004 · Round Lab · Medicube · Isntree · Torriden · Aestura · Laneige · Innisfree",
  "g",
  "K-beauty (Amorepacific for COSRX/Aestura/Laneige/Innisfree). No litigation found."
 ],
 [
  "Topicals · Hyper Skin · Eadem · Tower 28 · Fenty Skin · Ilia · Skinfix · Nécessaire · Dieux · Salt & Stone · Good Molecules · The Inkey List · Peach & Lily · Bubble · Byoma · Vacation · Megababe · Kitsch · Slip",
  "g",
  "No litigation found."
 ],
 [
  "As I Am · Kinky-Curly · Cantu · Tropic Isle Living · TGIN · Melanin Haircare · Pattern · Bread · Adwoa · The Doux · Camille Rose · Briogeo · Jupiter · Every Man Jack · Duke Cannon · Anastasia · Cetaphil · Differin",
  "g",
  "No active litigation found (Camille Rose 2018 \"natural\" labeling suit, closed)."
 ],
 [
  "Sol de Janeiro (L'Occitane)",
  "g",
  "Only suits are ones it filed against dupe brands, plus a TCPA text case — nothing about product safety or use."
 ],
 [
  "CeraVe · La Roche-Posay · Kiehl's · SkinCeuticals · YTTP · NYX · Baxter (L'Oréal)",
  "y",
  "Six class actions pending over benzene in CeraVe Acne Foaming cleansers and LRP Effaclar Duo (benzoyl-peroxide products only); separate hair-relaxer litigation. Your Hydrating Cleanser, Moisturizing Lotion and Anthelios are not named products."
 ],
 [
  "Neutrogena · Aveeno · OGX · Nizoral · Ambi (Kenvue)",
  "y",
  "OGX hair-loss class components mostly settled; individual injury claims continue. Neutrogena benzene sunscreen suits settled."
 ],
 [
  "Ouai · Native · Olay · Head & Shoulders · First Aid Beauty (P&G)",
  "y",
  "Brands clean; parent carries the active Mielle litigation."
 ],
 [
  "Shea Moisture · Vaseline · Dove · Paula's Choice · Dermalogica · Murad · Tatcha · K18 · Nutrafol (Unilever)",
  "y",
  "TRESemmé DMDM-hydantoin hair-loss cases still active in 2026; Dove Sensitive \"hypoallergenic\" suit May 2026; Paula's Choice \"Made in USA\" suit 2025."
 ],
 [
  "The Ordinary · Clinique · Dr. Jart · Aveda · Le Labo · Tom Ford (Estée Lauder)",
  "y",
  "Clinique named in the benzoyl-peroxide/benzene actions. The Ordinary itself is clean."
 ],
 [
  "e.l.f. · Naturium · Rhode (e.l.f.)",
  "y",
  "Slack-fill suit on two e.l.f. SKUs (2025). Naturium itself clean."
 ],
 [
  "Banana Boat · Hawaiian Tropic · Jack Black · Cremo · Bulldog (Edgewell)",
  "y",
  "State false-advertising action over reef-safe claims (2025)."
 ],
 [
  "Aquaphor · Eucerin (Beiersdorf)",
  "w",
  "Coppertone benzene suit settled; nothing active found."
 ],
 [
  "EltaMD (Colgate-Palmolive)",
  "w",
  "\"Transparent Zinc Oxide\" mislabeling class action dismissed with prejudice Oct 2024. Parent has unrelated talc litigation."
 ],
 [
  "Black Girl Sunscreen",
  "w",
  "Prop 65 benzophenone notice settled 2023 with reformulation."
 ],
 [
  "Olaplex",
  "w",
  "Hair-loss class action denied certification 2023; \"Made in USA\" settled 2025."
 ],
 [
  "Supergoop",
  "r",
  "\"100% Mineral\" mislabeling class action filed Dec 2025, active; reef-safe state settlement 2025. Excluded."
 ],
 [
  "Sun Bum",
  "r",
  "SPF-50 mineral lotion \"lower SPF than labeled\" class action filed Nov 2025, active. Excluded — this is your current lip SPF."
 ],
 [
  "Mielle Organics (P&G)",
  "r",
  "Rosemary Mint oil hair-loss class actions filed 2025, active. Excluded."
 ],
 [
  "Dr. Squatch",
  "r",
  "False-advertising class action 2025. Excluded."
 ],
 [
  "Ultra Violette",
  "o",
  "No lawsuit. 2025 Australian consumer testing put Lean Screen at SPF 4; product pulled. Brand-level testing credibility is the concern — Sheen Screen (your lip pick) was not the tested product."
 ]
];

export const AUDIT: string[][] = [
 [
  "Anua SPF 50 · Anua Azelaic 10%",
  "g",
  "Clean. Keep."
 ],
 [
  "COSRX Alpha-Arbutin 2%",
  "g",
  "Clean. Keep."
 ],
 [
  "As I Am · Kinky-Curly · Cantu · Tropic Isle JBCO",
  "g",
  "Clean. Keep."
 ],
 [
  "Nécessaire · Sol de Janeiro",
  "g",
  "Clean. Keep."
 ],
 [
  "Maelove Glow Maker",
  "g",
  "(Not at Sephora/Ulta) Pure L-ascorbic — home base only. Heat-stable retail swaps in the Face Bench."
 ],
 [
  "CeraVe Hydrating Cleanser / Lotion / Cream",
  "y",
  "Keep if you accept parent-level flags. Strict-mode swaps in the Face Bench."
 ],
 [
  "LRP Anthelios Mineral Tinted (Deep)",
  "y",
  "Clean product, flagged parent. Fenty Hydra Vizor Huez is the strict-mode equal."
 ],
 [
  "Nizoral (ketoconazole)",
  "y",
  "No retail ketoconazole alternative exists. Keep; rotate with a ✅ zinc-pyrithione or salicylic shampoo."
 ],
 [
  "Vaseline Rosy Lips",
  "y",
  "Already slated for Aquaphor — do it."
 ],
 [
  "The Ordinary Squalane lip balm · PHA lip serum",
  "y",
  "Product clean. Strict swap: Skinfix Lip Repair Balm."
 ],
 [
  "Ouai mist · Native body wash",
  "y",
  "(P&G) Strict swaps: Phlur / Salt & Stone mist; Nécessaire or Kopari wash."
 ],
 [
  "NYX Micro Brow Pencil",
  "y",
  "(L'Oréal) Strict swap: Anastasia Brow Wiz (Ebony / Dark Brown)."
 ],
 [
  "Shea Moisture (conditioner, raw shea)",
  "y",
  "Swap to TGIN / Camille Rose / Melanin Haircare (all ✅)."
 ],
 [
  "Ultra Violette Sheen Screen",
  "o",
  "Usable; know the brand's testing history."
 ],
 [
  "Sun Bum SPF 30 (lips)",
  "r",
  "Replace at next restock — EltaMD UV Lip Balm SPF 36 or Aquaphor Lip Protectant SPF 30."
 ]
];

export const EXCLUDED: string[][] = [
 [
  "Supergoop · Sun Bum · Mielle · Dr. Squatch",
  "🔴 Active product litigation."
 ],
 [
  "Glow Recipe · Laneige · Innisfree creams · Tatcha · Fenty Skin cleansers · Sol de Janeiro on the face",
  "Fragranced — fine below the jaw only."
 ],
 [
  "Paula's Choice · Dermalogica · Murad · Kiehl's · SkinCeuticals · Youth to the People · First Aid Beauty",
  "Good products, 🟡 parent flags (Unilever / L'Oréal / P&G) — use only if you accept parent-level exposure."
 ],
 [
  "Drunk Elephant",
  "2025 recall for an ingredient mix-up; fragrance-free but no reason to prefer it over the ✅ options."
 ],
 [
  "Olaplex",
  "⚪ closed litigation, but bond-repair is not a 4b-retention lever in your plan — no slot for it."
 ],
 [
  "Tretinoin · minoxidil · essential oils · derma-stamp · UPF sleeves · window film",
  "Not Sephora/Ulta categories — sources unchanged from the protocols."
 ],
 [
  "Any glycolic >7% · any peel · any scrub · at-home needling device · hydroquinone · IPL/BBL",
  "Skin Protocol no-fly list — unchanged."
 ]
];

export const PRICE_META = {
 "checked": "2026-08-27",
 "source": "Ulta, brand DTC sites, Walmart/Target where Sephora blocks crawling"
};

export const PRICE: Record<string,PriceRec> = {
 "Round Lab 1025 Dokdo Cleanser": [
  11.24,
  14.99,
  "150 ml",
  "Ulta",
  2,
  22.48,
  "No jumbo exists — two 150 ml bottles cover 90 days of double-cleansing.",
  1
 ],
 "Skinfix Barrier+ Foaming Oil Cleanser": [
  30,
  0,
  "5 oz",
  "Sephora",
  1,
  30,
  "One 5 oz bottle clears the quarter.",
  1
 ],
 "CeraVe Hydrating Cleanser (current)": [
  18.99,
  0,
  "16 oz",
  "Ulta",
  1,
  18.99,
  "16 oz runs about six months — one bottle covers two quarters.",
  1
 ],
 "Cetaphil Gentle Skin Cleanser": [
  12.74,
  16.99,
  "16 oz",
  "Ulta",
  1,
  12.74,
  "16 oz is a two-quarter bottle. Cheapest cleanser slot on the bench.",
  1
 ],
 "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam": [
  15,
  0,
  "150 ml",
  "Ulta",
  2,
  30,
  "Two tubes per quarter.",
  0
 ],
 "Skin1004 Hyalu-Cica Gentle Cleansing Milk": [
  14,
  0,
  "125 ml",
  "Ulta",
  2,
  28,
  "Two bottles per quarter.",
  0
 ],
 "Byoma Creamy Jelly Cleanser · Bubble Fresh Start Gel": [
  12.99,
  0,
  "175 ml",
  "Ulta",
  2,
  25.98,
  "Two bottles per quarter.",
  1
 ],
 "Double-cleanse: Anua Heartleaf Cleansing Oil · Inkey Oat Cleansing Balm": [
  20,
  0,
  "200 ml",
  "Ulta",
  1,
  20,
  "One 200 ml bottle of the Anua oil covers 90 nights of SPF removal.",
  1
 ],
 "Peach & Lily Transparen-C Pro Spot Treatment": [
  39,
  0,
  "30 ml",
  "Ulta",
  1,
  39,
  "Spot use — one tube per quarter.",
  0
 ],
 "Naturium Vitamin C Complex Serum": [
  21,
  0,
  "30 ml",
  "Sephora",
  1,
  21,
  "Jumbo 60 ml is $38 — two quarters for $4 less than buying twice.",
  1
 ],
 "Maelove Glow Maker (current)": [
  32.95,
  0,
  "30 ml",
  "DTC",
  1,
  32.95,
  "One 30 ml bottle per quarter at 4 drops a morning.",
  1
 ],
 "Hyper Skin Hyper Clear Brightening Vitamin C": [
  32,
  0,
  "30 ml",
  "Sephora",
  1,
  32,
  "One bottle per quarter.",
  0
 ],
 "Beauty of Joseon Glow Deep Serum (Rice + Alpha-Arbutin)": [
  17,
  0,
  "30 ml",
  "Both",
  1,
  17,
  "The 60 ml size is the same listing — take it and skip a reorder.",
  1
 ],
 "Sunday Riley C.E.O. 15% Vitamin C": [
  80,
  0,
  "30 ml",
  "Sephora",
  1,
  80,
  "Priciest brightener on the bench by 4×.",
  0
 ],
 "The Ordinary Ascorbyl Tetraisopalmitate 20% in Vitamin F": [
  16,
  0,
  "30 ml",
  "Both",
  1,
  16,
  "One bottle per quarter.",
  0
 ],
 "Good Molecules Vitamin C Booster Powder": [
  8,
  0,
  "6 g",
  "Ulta",
  2,
  16,
  "Powder keeps indefinitely — the heat-proof road option.",
  0
 ],
 "Aestura Atobarrier 365 Cream": [
  36,
  0,
  "80 ml",
  "Sephora",
  2,
  72,
  "Two jars a quarter at twice daily. No larger size at Sephora.",
  0
 ],
 "Skinfix Barrier+ Triple Lipid-Peptide Cream": [
  54,
  0,
  "1.7 oz",
  "Sephora",
  2,
  108,
  "XL 3.3 oz is the real quarter buy; the $46 refill cuts every reorder after.",
  1
 ],
 "CeraVe Moisturizing Lotion (current)": [
  19.99,
  0,
  "16 oz",
  "Ulta",
  1,
  19.99,
  "16 oz easily clears 90 days as a tret buffer.",
  1
 ],
 "Round Lab Birch Juice Moisturizing Cream": [
  30.6,
  36,
  "80 ml",
  "Ulta",
  2,
  61.2,
  "Two jars a quarter.",
  1
 ],
 "Torriden Dive-In Low-Molecular HA Cream": [
  22,
  0,
  "80 ml",
  "Sephora",
  2,
  44,
  "Two jars a quarter.",
  0
 ],
 "Naturium Plant Ceramide Rich Cream · Byoma Gel-Cream": [
  25,
  0,
  "50 ml",
  "Sephora / Ulta",
  2,
  50,
  "Two jars a quarter.",
  1
 ],
 "Eucerin Advanced Repair · Cetaphil Moisturizing Cream": [
  14,
  0,
  "16 oz",
  "Ulta",
  1,
  14,
  "Tub size — one covers the quarter with room to spare.",
  0
 ],
 "Dieux Instant Angel · Tower 28 SOS Daily Barrier Recovery Cream": [
  45,
  0,
  "50 ml",
  "Sephora",
  2,
  90,
  "Instant Angel comes in 100 ml — that's the single-purchase quarter.",
  1
 ],
 "Skin1004 Hyalu-Cica Moisture Cream · Anua Heartleaf 70 Calming Cream": [
  20,
  0,
  "75 ml",
  "Ulta",
  2,
  40,
  "Two jars a quarter.",
  0
 ],
 "Isntree Hyaluronic Acid Watery Sun Gel SPF 50+": [
  24,
  0,
  "50 ml",
  "Ulta",
  3,
  72,
  "Three bottles. Face SPF is the one slot where no jumbo exists — budget for it.",
  0
 ],
 "Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+": [
  18,
  0,
  "50 ml",
  "Both",
  3,
  54,
  "Sold in 2-packs on the brand site — one 2-pack plus a single covers the quarter.",
  0
 ],
 "Anua Heartleaf Silky Moisture Sun Cream SPF 50 (current)": [
  22,
  0,
  "50 ml",
  "Ulta",
  3,
  66,
  "Now listed at Ulta as Zero-Cast Moisturizing Finish Sunscreen — same slot, new name.",
  0
 ],
 "Skin1004 Hyalu-Cica Water-Fit Sun Serum SPF 50+": [
  17.1,
  19,
  "50 ml × 2",
  "Ulta",
  2,
  34.2,
  "Already sold as a twin pack — 1½ packs is the quarter. Best $/ml SPF on the bench.",
  1
 ],
 "Round Lab Birch Juice Moisturizing Sun Cream SPF 50+": [
  24,
  0,
  "50 ml",
  "Ulta",
  3,
  72,
  "Three bottles a quarter.",
  0
 ],
 "Black Girl Sunscreen Make It Matte SPF 45": [
  19.99,
  0,
  "3 oz",
  "Ulta",
  2,
  39.98,
  "3 oz is generous for a face SPF — two bottles clear 90 days.",
  0
 ],
 "Innisfree Daily UV Defense SPF 36": [
  15,
  0,
  "50 ml",
  "Sephora",
  3,
  45,
  "Three bottles a quarter.",
  0
 ],
 "Fenty Skin Hydra Vizor Huez Tinted Mineral SPF 30": [
  39,
  0,
  "1.7 oz",
  "Sephora",
  1,
  39,
  "Refillable — the refill is the cheaper repeat buy.",
  0
 ],
 "Tower 28 SunnyDays SPF 30 Tinted": [
  32,
  0,
  "1 oz",
  "Sephora",
  1,
  32,
  "Selective-day product — one tube per quarter.",
  1
 ],
 "LRP Anthelios Mineral Tinted, Deep (current pick)": [
  39.99,
  0,
  "1.7 oz",
  "Ulta",
  1,
  39.99,
  "One bottle per quarter on selective days.",
  1
 ],
 "Ilia Super Serum Skin Tint SPF 40": [
  48,
  0,
  "30 ml",
  "Sephora",
  1,
  48,
  "One bottle per quarter.",
  1
 ],
 "EltaMD UV Daily Tinted SPF 40 (now in multiple tints)": [
  45,
  0,
  "1.7 oz",
  "Ulta",
  1,
  45,
  "One tube per quarter.",
  0
 ],
 "Round Lab Birch Juice Sun Stick SPF 50+": [
  22,
  0,
  "23 g",
  "Ulta",
  2,
  44,
  "Two sticks a quarter at 3-hour-stop reapplication.",
  0
 ],
 "Beauty of Joseon Matte Sun Stick (Mugwort + Camelia) SPF 50+": [
  18,
  0,
  "18 g",
  "Both",
  2,
  36,
  "Two sticks a quarter.",
  0
 ],
 "Isntree Hyaluronic Acid Airy Sun Stick SPF 50+": [
  22,
  0,
  "22 g",
  "Ulta",
  2,
  44,
  "Two sticks a quarter.",
  0
 ],
 "Shiseido Clear Sunscreen Stick SPF 50+": [
  32,
  0,
  "20 g",
  "Sephora",
  2,
  64,
  "Two sticks — the priciest way to fill this slot.",
  0
 ],
 "Naturium Azelaic Topical Acid 10%": [
  20,
  0,
  "30 ml",
  "Sephora",
  1,
  20,
  "One tube per quarter on alternate nights.",
  1
 ],
 "Anua Azelaic Acid 10 Hyaluron Serum (current)": [
  22,
  0,
  "30 ml",
  "Ulta",
  2,
  44,
  "Nightly use burns a 30 ml bottle in about 45 days.",
  1
 ],
 "Topicals Faded Serum": [
  28,
  38,
  "1.7 oz",
  "Sephora",
  1,
  28,
  "Jumbo size exists and is the single-purchase quarter.",
  1
 ],
 "The Ordinary Azelaic Acid Suspension 10%": [
  12,
  0,
  "30 ml",
  "Both",
  2,
  24,
  "Cheapest full-strength azelaic anywhere.",
  0
 ],
 "Medik8 Crystal Retinal (start 1 → 3 → 6)": [
  69,
  0,
  "30 ml",
  "Sephora",
  1,
  69,
  "One tube per quarter — retinal is used sparingly.",
  0
 ],
 "Differin (adapalene 0.1%) Gel": [
  29.24,
  38.99,
  "1.6 oz",
  "Ulta",
  1,
  29.24,
  "The 1.6 oz pump is ~4 months. The 0.5 oz at $14.99 costs far more per gram.",
  1
 ],
 "Naturium Retinaldehyde Cream Serum 0.1%": [
  32,
  0,
  "30 ml",
  "Sephora",
  1,
  32,
  "One tube per quarter.",
  1
 ],
 "COSRX The Retinol 0.5 Oil": [
  25,
  0,
  "20 ml",
  "Ulta",
  1,
  25,
  "One bottle per quarter.",
  0
 ],
 "Dr. Dennis Gross Advanced Retinol + Ferulic Overnight": [
  92,
  0,
  "1 oz",
  "Sephora",
  1,
  92,
  "Most expensive single item on the face bench.",
  0
 ],
 "Eadem Milk Marvel Dark Spot Serum": [
  68,
  0,
  "30 ml",
  "Sephora",
  1,
  68,
  "One bottle per quarter.",
  1
 ],
 "Good Molecules Discoloration Correcting Serum": [
  12,
  0,
  "30 ml",
  "Ulta",
  1,
  12,
  "Best cost-per-quarter of any active on the whole bench.",
  1
 ],
 "COSRX Alpha-Arbutin 2% (current)": [
  25,
  0,
  "30 ml",
  "Ulta",
  1,
  25,
  "One bottle per quarter.",
  1
 ],
 "Anua Niacinamide 10 + TXA 4% Serum": [
  22,
  0,
  "30 ml",
  "Ulta",
  1,
  22,
  "One bottle per quarter.",
  1
 ],
 "Naturium Tranexamic Topical Acid 5%": [
  20,
  0,
  "30 ml",
  "Sephora",
  1,
  20,
  "One bottle per quarter.",
  1
 ],
 "The Inkey List Tranexamic Acid Night Treatment": [
  16,
  0,
  "30 ml",
  "Sephora",
  1,
  16,
  "One bottle per quarter.",
  0
 ],
 "Hyper Skin Hyper Even Brightening Dark Spot Cream": [
  46,
  0,
  "50 ml",
  "Sephora",
  1,
  46,
  "One jar per quarter.",
  0
 ],
 "Anua Heartleaf 77% Toner · Skin1004 Centella Ampoule · Torriden Dive-In Serum": [
  23,
  0,
  "250 ml",
  "Ulta / Sephora",
  1,
  23,
  "Anua sells a 500 ml at $34.50 — the quarter bottle, and it saves $11.50 over two smalls.",
  1
 ],
 "Medik8 Crystal Retinal Ceramide Eye · Good Molecules Caffeine Eye Cream": [
  8,
  0,
  "15 ml",
  "Sephora / Ulta",
  1,
  8,
  "Good Molecules side; the Medik8 eye runs about $59.",
  0
 ],
 "Biodance Collagen-Real Deep Mask": [
  5,
  0,
  "1 sheet",
  "Both",
  6,
  30,
  "Reset days only — roughly six sheets a quarter.",
  0
 ],
 "Skinfix Barrier+ Lip Repair Balm": [
  25,
  0,
  "0.5 oz",
  "Sephora",
  2,
  50,
  "Two tubes a quarter at road-level reapplication.",
  1
 ],
 "Aquaphor Lip Repair (day) · Healing Ointment (overnight seal)": [
  5.99,
  0,
  "0.35 oz",
  "Ulta",
  3,
  17.97,
  "Buy the 2-pack at $11.99 plus one single — reapplying every 2 hours eats a tube in a month.",
  1
 ],
 "The Ordinary Squalane + Amino Acids Lip Balm (current)": [
  8.9,
  0,
  "15 ml",
  "Both",
  2,
  17.8,
  "Two tubes a quarter.",
  0
 ],
 "Dieux Lip Butter": [
  22,
  0,
  "0.5 oz",
  "Sephora",
  2,
  44,
  "Two tubes a quarter.",
  0
 ],
 "Cetaphil Healing Ointment": [
  12,
  0,
  "1.7 oz",
  "Ulta",
  1,
  12,
  "One tube covers the quarter for lips and knuckles both.",
  0
 ],
 "EltaMD UV Lip Balm SPF 36": [
  23,
  0,
  "0.14 oz",
  "Ulta",
  2,
  46,
  "Two tubes a quarter.",
  0
 ],
 "Aquaphor Lip Protectant + Sunscreen SPF 30": [
  5.99,
  0,
  "0.35 oz",
  "Ulta",
  2,
  11.98,
  "Two tubes a quarter — the cheapest way to cover the lip-SPF slot.",
  0
 ],
 "Sun Bum SPF 30 (current)": [
  4.99,
  0,
  "0.15 oz",
  "Ulta",
  0,
  0,
  "Being replaced — brand under active litigation. Do not rebuy.",
  0
 ],
 "Ultra Violette Sheen Screen SPF 50 (tinted)": [
  27,
  0,
  "0.5 oz",
  "Sephora",
  1,
  27,
  "One tube per quarter.",
  0
 ],
 "Vacation Lip Sunscreen SPF 30": [
  14,
  0,
  "0.5 oz",
  "Both",
  2,
  28,
  "Two tubes a quarter — scented, so only once lips are fully healed.",
  1
 ],
 "Black Girl Sunscreen SPF 30 Moisturizing Lotion": [
  16.99,
  0,
  "3 oz",
  "Ulta",
  4,
  67.96,
  "3 oz is small for daily arm and neck coverage — the 6 oz size is the better quarter buy.",
  1
 ],
 "EltaMD UV Sport SPF 50 · EltaMD UV Lotion SPF 30+": [
  33,
  0,
  "7 oz",
  "Ulta",
  2,
  66,
  "Two bottles a quarter.",
  0
 ],
 "CeraVe Hydrating Body Sunscreen SPF 30 (planned buy)": [
  15,
  0,
  "5 oz",
  "Ulta",
  3,
  45,
  "Three bottles a quarter.",
  0
 ],
 "Isntree Watery Sun Gel (large) · BOJ Relief Sun (arms/hands)": [
  24,
  0,
  "100 ml",
  "Ulta / Both",
  2,
  48,
  "The large Isntree is the body-sized bottle.",
  0
 ],
 "Sol de Janeiro Rio Radiance SPF 50 Body Lotion": [
  38,
  0,
  "6.7 oz",
  "Both",
  2,
  76,
  "Two bottles a quarter — Lane B days only.",
  0
 ],
 "Vacation Classic Lotion SPF 30/50 · Bondi Sands Body SPF 50": [
  15,
  0,
  "6 oz",
  "Both / Ulta",
  3,
  45,
  "The 20 oz Sun Jug is $48 — near-identical money for three times the sunscreen.",
  1
 ],
 "Nécessaire The Body Retinol": [
  65,
  0,
  "150 ml",
  "Sephora",
  1,
  65,
  "Three nights a week — one tube clears the quarter exactly.",
  1
 ],
 "Medix 5.5 Retinol + Ferulic · Gold Bond Retinol Overnight (owned)": [
  12,
  0,
  "15 oz",
  "Walmart",
  1,
  12,
  "Big-bottle drugstore retinol — one covers the quarter.",
  0
 ],
 "Naturium Retinol Body Lotion": [
  26,
  0,
  "200 ml",
  "Sephora",
  1,
  26,
  "One bottle per quarter.",
  1
 ],
 "Versed Press Restart Gentle Retinol Body Lotion": [
  20,
  0,
  "200 ml",
  "Ulta",
  1,
  20,
  "One bottle per quarter.",
  0
 ],
 "Good Molecules Discoloration Correcting Body Treatment": [
  15,
  0,
  "120 ml",
  "Ulta",
  1,
  15,
  "One bottle per quarter.",
  1
 ],
 "Topicals Faded Serum (used on body spots)": [
  28,
  0,
  "1.7 oz",
  "Sephora",
  1,
  28,
  "Spot use only — one bottle lasts well past a quarter.",
  1
 ],
 "Naturium Tranexamic 5% · Hyper Skin Hyper Even": [
  20,
  0,
  "30 ml",
  "Sephora",
  1,
  20,
  "One bottle per quarter.",
  1
 ],
 "Skinfix Barrier+ Lipid-Boost Body Cream": [
  34,
  48,
  "8 oz",
  "Sephora",
  2,
  68,
  "Currently $14 under list — a good moment to buy the quarter up front.",
  1
 ],
 "CeraVe Moisturizing Cream · LRP Lipikar (current seal)": [
  19.99,
  0,
  "16 oz",
  "Ulta",
  2,
  39.98,
  "Two tubs a quarter for full-body nightly sealing.",
  1
 ],
 "Nécessaire The Body Lotion — Fragrance-Free": [
  30,
  0,
  "200 ml",
  "Sephora",
  2,
  60,
  "The 450 ml at $52 is the quarter bottle and saves $8 over two smalls.",
  1
 ],
 "Washes: Nécessaire FF · Byoma · Cetaphil": [
  28,
  0,
  "250 ml",
  "Sephora / Ulta",
  1,
  28,
  "The 500 ml at $42 is the single-purchase quarter.",
  1
 ],
 "Aquaphor Healing Ointment": [
  18.74,
  24.99,
  "14 oz",
  "Ulta",
  1,
  18.74,
  "The 14 oz jar lasts most of a year. Buy it once, on sale, and forget it.",
  1
 ],
 "Megababe Thigh Rescue Anti-Chafe Stick": [
  14,
  0,
  "2.1 oz",
  "Ulta",
  2,
  28,
  "Mega Thigh Rescue at $20 is the single stick that covers 90 days of ten-hour seats.",
  1
 ],
 "Nécessaire The Deodorant (FF) · Salt & Stone Deodorant": [
  24,
  0,
  "75 g",
  "Sephora",
  2,
  48,
  "Two sticks a quarter.",
  1
 ],
 "Nécessaire Body Wash Fragrance-Free": [
  28,
  0,
  "250 ml",
  "Sephora",
  1,
  28,
  "The 500 ml at $42 covers the quarter in one bottle.",
  1
 ],
 "Jupiter Balancing Shampoo (zinc pyrithione 1%)": [
  28,
  0,
  "8.5 oz",
  "Ulta",
  1,
  28,
  "Week-2 of the rotation only — one bottle runs about two quarters.",
  1
 ],
 "Nizoral A-D (ketoconazole 1%) (current)": [
  16.88,
  0,
  "7 oz",
  "Walmart",
  1,
  16.88,
  "Week-1 rotation only — one bottle is roughly six months.",
  1
 ],
 "Briogeo Scalp Revival Dandruff Relief (3% salicylic)": [
  34,
  0,
  "8 oz",
  "Both",
  1,
  34,
  "Rotation slot — one bottle covers two quarters.",
  0
 ],
 "Nioxin Scalp Recovery Anti-Dandruff (zinc)": [
  28,
  0,
  "6.8 oz",
  "Ulta",
  1,
  28,
  "Backup zinc option.",
  0
 ],
 "Briogeo Charcoal + Coconut Micro-Exfoliating Shampoo": [
  42,
  0,
  "8 oz",
  "Both",
  1,
  42,
  "Monthly clarify only — one bottle is close to a year.",
  1
 ],
 "As I Am Coconut CoWash (current)": [
  8.99,
  0,
  "16 oz",
  "Ulta",
  1,
  8.99,
  "The 32 oz at $16.99 is eight months of co-washing. Best bulk value on the entire bench.",
  1
 ],
 "Kinky-Curly Come Clean (current clarifier)": [
  12,
  0,
  "8 oz",
  "Ulta",
  1,
  12,
  "Monthly reset — one bottle is eight months.",
  1
 ],
 "Pattern Beauty Cleansing Shampoo": [
  22,
  0,
  "7.8 oz",
  "Both",
  1,
  22,
  "One bottle per quarter.",
  1
 ],
 "Bread Beauty Supply Hair-Wash": [
  12,
  0,
  "small",
  "Sephora",
  1,
  12,
  "Sized up on the brand site — take the larger for the quarter.",
  1
 ],
 "Adwoa Beauty Baomint Moisturizing Shampoo": [
  28,
  0,
  "8 oz",
  "Sephora",
  1,
  28,
  "One bottle per quarter.",
  0
 ],
 "Camille Rose Sweet Ginger Cleansing Rinse": [
  14,
  0,
  "12 oz",
  "Ulta",
  1,
  14,
  "One bottle per quarter.",
  0
 ],
 "Melanin Haircare African Black Soap Shampoo": [
  24,
  0,
  "8 oz",
  "Ulta",
  1,
  24,
  "One bottle per quarter.",
  0
 ],
 "TGIN Honey Miracle Hair Mask": [
  19.99,
  0,
  "12 oz",
  "Ulta",
  1,
  19.99,
  "Bi-weekly deep conditioning — one jar clears the quarter.",
  1
 ],
 "Briogeo Don't Despair, Repair! Mask": [
  39,
  0,
  "8 oz",
  "Both",
  1,
  39,
  "One jar per quarter.",
  1
 ],
 "Shea Moisture Manuka · Cantu Deep Treatment (current)": [
  7.49,
  15.96,
  "12 oz",
  "Ulta",
  1,
  7.49,
  "Cantu is under half list right now. Cheapest deep conditioner slot going.",
  1
 ],
 "Camille Rose Algae Renew Deep Conditioner": [
  20,
  0,
  "12 oz",
  "Ulta",
  1,
  20,
  "One jar per quarter.",
  0
 ],
 "Adwoa Baomint Deep Treatment · Bread Hair-Mask": [
  14,
  0,
  "small",
  "Sephora",
  1,
  14,
  "One jar per quarter.",
  1
 ],
 "Pattern Intensive Conditioner · As I Am Hydration Elation": [
  9.99,
  0,
  "16 oz",
  "Both / Ulta",
  1,
  9.99,
  "Rinse-out after every wash — one jar covers the quarter.",
  1
 ],
 "Melanin Haircare Softening Leave-In": [
  26,
  0,
  "8 oz",
  "Ulta",
  1,
  26,
  "One bottle per quarter.",
  0
 ],
 "Kinky-Curly Knot Today": [
  14,
  0,
  "8 oz",
  "Ulta",
  1,
  14,
  "Weekly use lands one bottle at almost exactly 90 days.",
  1
 ],
 "As I Am Leave-In Conditioner (current)": [
  10.5,
  0,
  "8 oz",
  "Ulta",
  1,
  10.5,
  "One bottle per quarter.",
  1
 ],
 "Camille Rose Curl Love Milk · TGIN Green Tea Leave-In": [
  16.99,
  0,
  "13 oz",
  "Ulta",
  1,
  16.99,
  "One bottle per quarter.",
  1
 ],
 "Pattern Leave-In Conditioner": [
  29,
  0,
  "12 oz",
  "Both",
  1,
  29,
  "One bottle per quarter.",
  1
 ],
 "Tropic Isle Living JBCO (current)": [
  7.99,
  0,
  "4 oz",
  "Ulta",
  1,
  7.99,
  "One 4 oz bottle covers the quarter for scalp and beard both.",
  1
 ],
 "Melanin Haircare Multi-Use Pure Oil Blend": [
  25,
  0,
  "4 oz",
  "Ulta",
  1,
  25,
  "One bottle per quarter.",
  0
 ],
 "Briogeo Rosemary Pre-Wash Scalp Oil": [
  32,
  0,
  "1.7 oz",
  "Both",
  1,
  32,
  "Jumbo size listed on the brand site is the quarter buy.",
  1
 ],
 "Pattern Jojoba Oil Hair Serum": [
  25,
  0,
  "3.9 oz",
  "Both",
  1,
  25,
  "Doubles as the beard oil — one bottle serves both benches.",
  0
 ],
 "Ceremonia Aceite de Moska Scalp Oil": [
  24,
  0,
  "3.4 oz",
  "Sephora",
  1,
  24,
  "One bottle per quarter.",
  0
 ],
 "Jamaican Mango & Lime Black Castor Oil": [
  8,
  0,
  "4 oz",
  "Ulta",
  1,
  8,
  "Backup JBCO when Tropic Isle is out.",
  0
 ],
 "Melanin Haircare Twist-Elongating Style Cream": [
  28,
  0,
  "8 oz",
  "Ulta",
  1,
  28,
  "One jar per quarter.",
  0
 ],
 "Kinky-Curly Curling Custard": [
  20,
  0,
  "8 oz",
  "Ulta",
  1,
  20,
  "One jar per quarter.",
  1
 ],
 "Shea Moisture 100% Raw Shea Butter (current)": [
  12,
  0,
  "10.5 oz",
  "Ulta",
  1,
  12,
  "Flagged parent — swap to TGIN or Melanin Haircare at the next reorder.",
  0
 ],
 "TGIN Butter Cream Daily Moisturizer": [
  16.99,
  0,
  "12 oz",
  "Ulta",
  1,
  16.99,
  "Daily refresh between wash days — one jar per quarter.",
  1
 ],
 "Camille Rose Curl Maker · Pattern Curl Gel": [
  29,
  0,
  "9.8 oz",
  "Ulta / Both",
  1,
  29,
  "Pattern's 25 oz at $49 is two and a half quarters in one bottle.",
  1
 ],
 "As I Am DoubleButter · Cantu Shea Butter Leave-In": [
  9.99,
  0,
  "8 oz",
  "Ulta",
  1,
  9.99,
  "One jar per quarter.",
  1
 ],
 "Bread Hair-Cream · Pattern Styling Cream": [
  26,
  0,
  "8 oz",
  "Sephora / Both",
  1,
  26,
  "One jar per quarter.",
  0
 ],
 "Kitsch Satin Pillowcase · Sleep Bonnet": [
  20,
  0,
  "set",
  "Ulta",
  0,
  0,
  "Durable goods, not a consumable. Buy two bonnets so one is always clean.",
  0
 ],
 "The Doux Mousse Def Texture Foam": [
  16.99,
  0,
  "7 oz",
  "Ulta",
  1,
  16.99,
  "One can per quarter for the 1–2 week cornrow refresh.",
  0
 ],
 "Evolve Satin Bonnet / Durag": [
  10,
  0,
  "each",
  "Ulta",
  0,
  0,
  "Durable goods. Buy two.",
  0
 ],
 "Pattern Edge Control · Cantu Edge Stay Gel": [
  16,
  0,
  "2.7 oz",
  "Both / Ulta",
  1,
  16,
  "Light hand — one jar lasts well past a quarter.",
  0
 ],
 "Slip Pure Silk Pillowcase": [
  89,
  0,
  "queen",
  "Sephora",
  0,
  0,
  "Durable goods. The real-silk upgrade if you want it.",
  0
 ],
 "Every Man Jack Beard Oil": [
  12,
  0,
  "1 oz",
  "Ulta",
  1,
  12,
  "One bottle per quarter.",
  1
 ],
 "Kirkland minoxidil 5% foam (current)": [
  48.99,
  50.99,
  "6 × 2.11 oz",
  "Costco",
  0.5,
  24.5,
  "The 6-month box is two full quarters. Lowest cost-per-day item you own.",
  1
 ],
 "Every Man Jack Beard Wash": [
  12,
  0,
  "6.7 oz",
  "Ulta",
  1,
  12,
  "Two to three washes a week — one bottle per quarter.",
  1
 ],
 "Duke Cannon Beard Oil · Wash · Balm": [
  20,
  0,
  "each",
  "Ulta",
  1,
  20,
  "Per item, per quarter.",
  0
 ],
 "Anastasia Brow Wiz — Ebony or Dark Brown": [
  26,
  0,
  "0.003 oz",
  "Both",
  1,
  26,
  "One pencil per quarter.",
  0
 ],
 "NYX Micro Brow Pencil (current stopgap)": [
  12,
  0,
  "0.003 oz",
  "Ulta",
  1,
  12,
  "One pencil per quarter.",
  1
 ],
 "Fenty Brow MVP · Rare Beauty Brow Harmony": [
  22,
  0,
  "each",
  "Sephora",
  1,
  22,
  "One pencil per quarter.",
  0
 ],
 "Fenty Pro Filt'r Setting Powder (translucent)": [
  34,
  0,
  "0.3 oz",
  "Sephora",
  0,
  0,
  "Occasional use — one lasts well over a year.",
  0
 ],
 "Heliocare Advanced Antioxidant": [
  29,
  0,
  "60 caps",
  "Ulta",
  1.5,
  43.5,
  "60 capsules is 60 days. A full quarter needs one and a half boxes — buy two.",
  1
 ],
 "Lumineux Whitening Strips & Toothpaste": [
  25,
  0,
  "kit",
  "Ulta",
  1,
  25,
  "One kit per quarter.",
  0
 ],
 "Spotlight Oral Care": [
  12,
  0,
  "each",
  "Ulta",
  1,
  12,
  "One tube per quarter.",
  0
 ],
 "Crest": [
  0,
  0,
  "—",
  "—",
  0,
  0,
  "Skipped on the parent flag.",
  0
 ]
};

/** Appended by the scheduled weekly refresh. */
export const PRICE_LOG: {name:string;date:string;from:number;to:number}[] = [];
