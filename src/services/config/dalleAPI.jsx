import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
})

export const openai = new OpenAIApi(configuration); // Core function of openAI

