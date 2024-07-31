// back-end: server.js

 const path = require('path');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const openAI = require('openai');

// express app initialization
const app = express();
const port = 5000;


// Allowed origins
const allowedOrigins = ['http://localhost:5173', 'https://tmurphywebdev.netlify.app'];

// middleware
app.use(cors({
  origin: allowedOrigins
}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'FE', 'dist')));

// routes
app.post('/api/generate', async (req, res) => {
  const client = new openAI({ apiKey: process.env.OPENAI_API_KEY });

  const aiModel = 'gpt-3.5-turbo-0125';
  const messages = [
    {
      role: 'system',
      content:
        You are a self-help guru and mindfulness coach. The user will share accomplishments from today with you, both big and small. In 3 sentences, provide a statement of positive affirmations for each accomplishment directed to the user, highlighting its personal value to the user. The response must be in the following JSON format: {"response": "Your full response to the user", "summary": "using verbiage from the user's message, create a summary with a max of 4 words."},
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
    temperature: 1.2,

  });

  const aiResponse = completion.choices[0].message.content;

// JSON is parsed into a JavaScript object and then converted back to JSON because the response from the API is a stringified JSON object and we want to send the response as a JSON object.
  const json = JSON.parse(aiResponse);
  res.json(json);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'FE', 'dist', 'index.html'));
});

app.listen(port, () => { console.log(port) })
