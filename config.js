// ============================================================
//  PRISMA RETREATS — Configurazione utenti e appartamenti
//  Modifica questo file per aggiungere/rimuovere proprietari
// ============================================================

const USERS = {
  // --- ADMIN (vede tutto) ---
  "admin@prismaretreats.it": {
    password: "admin2025",
    role: "admin",
    name: "Admin Prisma",
    apartments: null  // null = vede tutti gli appartamenti
  },

  // --- PROPRIETARI (vede solo i suoi appartamenti) ---
  // Il campo "apartments" deve contenere gli ID di Smoobu
  // Trovi gli ID nella URL di ogni appartamento su app.smoobu.com
  "proprietario1@email.it": {
    password: "pass1234",
    role: "owner",
    name: "Nome Proprietario 1",
    apartments: ["123456"]  // <-- sostituisci con ID Smoobu reale
  },
  "proprietario2@email.it": {
    password: "pass5678",
    role: "owner",
    name: "Nome Proprietario 2",
    apartments: ["234567", "345678"]  // <-- più appartamenti
  },
};

// Esporta per uso nel frontend
if (typeof module !== "undefined") module.exports = { USERS };
