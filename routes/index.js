import express from "express";
import gptRoutes from "./gptResponseRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), gptRoutes);
};

export default routes;