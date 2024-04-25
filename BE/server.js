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
  const OPENAI_API_KEY = '';
  const client = new openAI({ apiKey: OPENAI_API_KEY });
  const aiModel = 'gpt-3.5-turbo-0125';
  const messages = [
    {
      role: 'system',
      content: `
      As a self-help guru and mindfulness coach, I value your insights. I'd like to share my accomplishments from today with you, no matter how big or small. Please provide positive affirmations for each, highlighting their personal value to me. Keep responses concise and respectful, and avoid being patronizing.
      `,
    },
    {
      role: 'user',
      content: 'What is the meaning of life?',
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

app.listen(port, () => {console.log(`Server is running on port ${port}`)});

