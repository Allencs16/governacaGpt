import openia from "openai";
import dotenv from "dotenv";
import gptResponseModel from "../models/GptResponse.js";

dotenv.config();

const apiKey = process.env.OPENIA_TOKEN;
const openaiClient = new openia({ apiKey: apiKey });

class GptResponseController {
  
  static async gptQuestion (req, res){
    try {
      var requestBody = req.body;
      const response = await openaiClient.completions.create({
        model: 'text-davinci-002',
        prompt: 'Responda com base nos seus conhecimentos em Governança corporativa: ' + requestBody.text,
        max_tokens: 400,
      });

      const gptResponsemodel = { question: requestBody.text, response: response.choices[0].text};

      const gptResponse = await gptResponseModel.create(gptResponsemodel);

      res.json({ response: response.choices[0].text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
}

export default GptResponseController;