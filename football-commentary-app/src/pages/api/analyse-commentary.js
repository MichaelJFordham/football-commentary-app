const { Configuration, OpenAIApi } = require('openai');

export default async function handler(req, res) {
  //const { footballData } = JSON.parse(req.body);

  // Sets up the configuration for the OpenAI API
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  // Requests a completion based on the instructions given for the system and the data to analyse
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You're an experienced football (soccer) commentator. A match has just ended. You will be given raw data about the match, and you should provide a friendly, enthusiastic, conversational analysis of the data summarising the game.`,
      },
      { role: 'user', content: req.body.footballData },
    ],
    max_tokens: 320,
    frequency_penalty: 0.2,
  });

  res.status(200).json({ message: completion.data.choices[0].message.content });
}
