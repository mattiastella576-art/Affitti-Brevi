// api/smoobu.js — Proxy sicuro per Smoobu
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const apiKey = process.env.SMOOBU_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API key non configurata" });

  const { endpoint } = req.query;
  if (!endpoint) return res.status(400).json({ error: "Parametro endpoint mancante" });

  const base = endpoint.split("?")[0].replace(/^\//, "").split("/")[0];
  if (!["apartments","reservations"].includes(base)) {
    return res.status(403).json({ error: "Endpoint non consentito" });
  }

  try {
    const url = `https://login.smoobu.com/api/${endpoint}`;
    const response = await fetch(url, {
      headers: { "Api-Key": apiKey, "Cache-Control": "no-cache" }
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Errore Smoobu", detail: err.message });
  }
}
