// LOKASI Data Store

// 1. Products Data
const defaultProducts = [
    { id: 701, name: "LOKASI VAPOR-TECH TEE", price: 850.00, category: "TOPS", stock: 10, tag: "ELITE", image: "mockups/tee_dust.png", desc: "Laser-perforated lightweight technical cotton. Bonded shoulder seams for seamless comfort. Zero-distraction fit." },
    { id: 702, name: "LOKASI MATRIX-MESH SHORTS", price: 1100.00, category: "BOTTOMS", stock: 10, tag: "PERFORMANCE", image: "mockups/pants_cargo.png", desc: "Double-layered training shorts with compression liner. Water-repellent matte shell with hidden zip utility pockets." },
    { id: 703, name: "LOKASI CORE-BONDED HOODIE", price: 2200.00, category: "TOPS", stock: 10, tag: "ICONS", image: "mockups/hoodie_embroidered.png", desc: "Heavyweight tech-fleece with internal seam-bonding. Articulated hood and structured thumbhole cuffs." },
    { id: 704, name: "LOKASI CHROME-ONYX TRACKSUIT", price: 3500.00, category: "SETS", stock: 10, tag: "LIMITED", image: "mockups/tracksuit_chrome.png", desc: "The pinnacle of Kasi Luxury. Full iridescent-matte shell with 3M reflective 'LOKASI' insignia. Engineered for the night." },
    { id: 705, name: "LOKASI AERODOME VEST", price: 1450.00, category: "ACCESSORIES", stock: 10, tag: "ESSENTIAL", image: "mockups/vest_tactical.png", desc: "Structured tactical vest with high-density laser-cut mesh. 3D rubberized LOKASI logo." },
    { id: 706, name: "LOKASI ELITE PUFF TEE", price: 750.00, category: "TOPS", stock: 10, tag: "CORE", image: "mockups/tshirt_puff.png", desc: "360-degree stretch fabric designed for high-intensity movement. Moisture-wicking technology." },
    { id: 707, name: "LOKASI STEALTH FLIGHT SHORTS", price: 950.00, category: "BOTTOMS", stock: 10, tag: "UTILITY", image: "mockups/pants_cargo.png", desc: "Inspired by military flight gear. Oversized 3D cargo pockets with industrial webbing straps." },
    { id: 708, name: "LOKASI PHANTOM TECH TRACKSUIT", price: 2950.00, category: "SETS", stock: 10, tag: "STEALTH", image: "mockups/tracksuit_stealth.png", desc: "Deep-black technical jersey with invisible zip closures. Minimalist back-print coordinates." },
    { id: 709, name: "LOKASI KINETIC REFLECTIVE PANTS", price: 1650.00, category: "BOTTOMS", stock: 10, tag: "KINETIC", image: "mockups/tracksuit_reflective_matrix.png", desc: "Multi-panel anatomical construction. Tapered aero-fit with reflective safety accents." },
    { id: 710, name: "LOKASI VELVET LUXURY SET", price: 4350.00, category: "SETS", stock: 10, tag: "ELITE", image: "mockups/tracksuit_velvet.png", desc: "Ultra-premium velvet blend. Signature LOKASI manifesto tag on reverse." }
];

// 2. Orders Data
const defaultOrders = [];

// Global Variables attached to window
window.products = [...defaultProducts];
window.orders = [...defaultOrders];

// ENCRYPTION LAYER (Base64 Security Obfuscation)
const _0x_LKS = {
    enc: (s) => btoa(unescape(encodeURIComponent(s))),
    dec: (s) => decodeURIComponent(escape(atob(s)))
};

function loadData() {
    console.log("SYNC_SECURE: Decrypting LOKASI datastore...");
    const p = localStorage.getItem('_lks_prd_v1');
    const o = localStorage.getItem('_lks_ord_v1');

    try {
        if (p) window.products = JSON.parse(_0x_LKS.dec(p));
        if (o) window.orders = JSON.parse(_0x_LKS.dec(o));
    } catch (e) {
        console.error("SECURITY_COMPROMISE: Data corrupted. Resetting to secure defaults.");
        window.products = [...defaultProducts];
        window.orders = [...defaultOrders];
    }
}

function saveData() {
    console.log("SYNC_SECURE: Encrypting and locking datastore...");
    localStorage.setItem('_lks_prd_v1', _0x_LKS.enc(JSON.stringify(window.products)));
    localStorage.setItem('_lks_ord_v1', _0x_LKS.enc(JSON.stringify(window.orders)));
}

// Initial Load
loadData();

// Newsletter Helper
function subscribeNewsletter(email) {
    console.log("Subscribing " + email + " to LOKASI blacklist...");
    localStorage.setItem('lokasi_subscribed', 'true');
    // In a real app, this would hit an API
    return true;
}
