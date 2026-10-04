import express from "express";

const app = express();

const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "EventHub API fonctionne bien.",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API EventHub démarrée sur le port ${PORT}`);
});

