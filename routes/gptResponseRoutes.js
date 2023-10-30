import express from "express";
import GptResponseController from "../controllers/gptResponseController.js"

const routes = express.Router();

routes.get("/gpt3", GptResponseController.gptQuestion);
routes.get("/findAll", GptResponseController.getAllQuestions);

export default routes;