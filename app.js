const express = require('express');
const app = express();
const openai = require('openai');
app.use(express.json()) 




// Define a route to interact with GPT-3
app.get('/gpt3', async (req, res) => {
  try {
    var requestBody = req.body;
    const response = await openaiClient.completions.create({
      model: 'text-davinci-002',
      prompt: 'Responda se isso tem a ver com o contexto de governanca de TI ou corporativa: ' + requestBody.text,
      max_tokens: 50,
    });

    res.json({ response: response.choices[0].text });
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
