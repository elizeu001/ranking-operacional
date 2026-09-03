
// API do Ranking Operacional

export default async function handler(req, res) {
  res.status(200).json({
    status: "ok",
    mensagem: "API do Ranking Operacional funcionando!"
  });
}
