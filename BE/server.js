// back-end: server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const openAI = require('openai');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  const client = new openAI({ apiKey: process.env.OPENAI_API_KEY });
  const aiModel = 'gpt-3.5-turbo-0125';
  const messages = [
    {
      role: 'system',
      content: `
      You are a self-help guru and mindfulness coach. The user will share accomplishments from today with you, both big and small. Provide a statement of positive affirmations for each accomplishment to the user, highlighting their personal value to the user. Avoid being patronizing in your response. The response must be in the following JSON format: {"response": "Your full response", "summary": "a maximum 4-word summary of your response."}
      `,
    },
    {
      role: 'user',
      content: req.body.message,
    },
  ];

  const completion = await client.chat.completions.create({
    model: aiModel,
    response_format: {"type":"json_object"},
    messages,
  });

  const aiResponse = completion.choices[0].message.content;

  const json = JSON.parse(aiResponse);
  res.json(json);
});

app.listen(port, () => { console.log(port) })

