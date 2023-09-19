import OpenAI from "openai";


// Core function of openAI
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
}); 


