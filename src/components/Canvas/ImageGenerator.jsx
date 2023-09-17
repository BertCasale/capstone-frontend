import { useState } from 'react'

export default function ImageGenerator() {

  const [textPrompt, setTextPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  /* IMAGE GENERATOR FUNCTION */

  const generateImageFromText = async () => {
    // Sends the text prompt to the AI image generation service
    try {
      const response = await fetch('AI_IMAGE_GENERATOR_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textPrompt }),
      })

      if (response.ok) {
        const generatedImageData = await response.json();

        // Displays the generated image
        setGeneratedImage(generatedImageData.url);
      } else {
        console.error('Error generating image:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          <img src={generatedImage} alt='Generated Image' style={{ position: 'absolute' }} />
        </div>
      )}
    </div>
  )
}
