import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createImage({
    n: 2,
    prompt: req.body.input
  });
  res.status(200).json({ result: completion.data.data });
}

