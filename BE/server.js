require('dotenv').config();

const express = require('express');
const cors = require('cors');
const openAI = require('openai');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/api/generate', async (req, res) => {
  // calling the openAI API to generate text

  const client = new openAI({ apiKey: process.env.OPENAI_API_KEY });
  const aiModel = 'gpt-3.5-turbo-0125';
  const messages = [
    {
      role: 'system',
      content: `
      You are a self-help guru and mindfulness coach. The user will share accomplishments from today with you, both big and small. Provide a statement of positive affirmations for each accomplishment, highlighting their personal value to the user. Avoid being patronizing in your response. The response must be in the following format: {"response": "Your full response", "summary": "a maximum 4-word summary of your response."}
      `,
    },
    {
      role: 'user',
      content: 'I ate a bowl of cherries',
      // stream: '',
    },
  ];

  const completion = await client.chat.completions.create({
    model: aiModel,
    messages,
  });

  const aiResponse = completion.choices[0].message.content;

  res = res.status(200).json({ response: aiResponse });
});

app.listen(port, () => { console.log })

