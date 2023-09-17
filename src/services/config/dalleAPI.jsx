import OpenAI from "openai";


// Core function of openAI
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
}); 


// const generateImage = async () => {
//   await openai.createImage({
//     prompt: textPrompt,
//     n: 1,
//     size: "512x512",
//   })
// }

