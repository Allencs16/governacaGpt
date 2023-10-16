const express = require('express');
const app = express();
const openai = require('openai');
app.use(express.json()) 
require('dotenv').config();

const apiKey = process.env.OPENIA_TOKEN;
const openaiClient = new openai({ apiKey: apiKey });

app.get('/gpt3', async (req, res) => {
  try {
    var requestBody = req.body;
    const response = await openaiClient.completions.create({
      model: 'text-davinci-002',
      prompt: 'Responda com base nos seus conhecimentos em Governança corporativa: ' + requestBody.text,
      max_tokens: 400,
    });
    res.json({ response: response.choices[0].text });

    // if(response.choices[0].text.replace('\n\n', '').toLowerCase() == 'sim'){
    //   const response = await openaiClient.completions.create({
    //     model: 'text-davinci-002',
    //     prompt: requestBody.text,
    //     max_tokens: 200,
    //   });
    //   res.json({ response: response.choices[0].text });
    // } else {
    //   res.json({ response: 'Sua Pergunta não esta alinhada com governança' })
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
