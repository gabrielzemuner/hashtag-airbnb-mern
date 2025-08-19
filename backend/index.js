import "dotenv/config";
import express from "express";
import UserRoutes from './domains/users/routes.js'

const app = express();
const { PORT } = process.env;

app.use(express.json()); // middleware
app.use("/users", UserRoutes)

app.get("/", (req, res) => {
  res.json("Olá mundo");
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});