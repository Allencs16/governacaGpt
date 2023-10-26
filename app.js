import express from "express";
import connectDatabase from "./config/dbConnect.js";
import dotenv from "dotenv";
import openia from "openai";
import routes from "./routes/index.js";

dotenv.config();

const apiKey = process.env.OPENIA_TOKEN;
const openaiClient = new openia({ apiKey: apiKey });

const conection = await connectDatabase();

conection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conection.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);

export default app;
