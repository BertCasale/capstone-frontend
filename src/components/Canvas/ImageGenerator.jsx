import { useState } from 'react';
import { openai } from '../../services/config/dalleAPI'


export default function ImageGenerator() {

  const [textPrompt, setTextPrompt] = useState(''); // Text prompt to be sent to image generator API
  const [generatedImage, setGeneratedImage] = useState(''); // Url of AI generated image sent back from API based on textPrompt 

  /* IMAGE GENERATOR FUNCTION */

  const generateImageFromText = async () => {
    // Requests image url from Dall-E based on text prompt
    try {
      const response = await openai.images.generate({
        prompt: promptHelper(textPrompt),
        n: 1,
        size: "512x512",
      })

      if (response.created) {
        const generatedImageUrl = await response.data[0].url;

        // Displays the generated image
        setGeneratedImage(generatedImageUrl);
      } else {
        console.error('Error generating image:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const promptHelper = (input) => {
    // return `${input}, in the real world`
    return input;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a text prompt for inspiration"
        value={textPrompt}
        onChange={(e) => setTextPrompt(e.target.value)}
      />
      <button onClick={generateImageFromText}>Generate Image</button>

      {generatedImage && (
        <div>
          <h2>Generated Image</h2>
          <img src={generatedImage} alt='Generated Image' />
        </div>
      )}
    </div>
  )
}
