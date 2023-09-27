import { useState } from 'react';
import { openai } from '../../services/config/dalleAPI'
import './ImageGenerator.css'


export default function ImageGenerator() {

  const [textPrompt, setTextPrompt] = useState(''); // Text prompt to be sent to image generator API
  const [generatedImage, setGeneratedImage] = useState(''); 
  // Url of AI generated image sent back from API based on textPrompt 
  const [loading, setLoading] = useState(false);

  // Requests image url from Dall-E based on text prompt and sets it to be displayed
  const generateImage = async () => {
    setLoading(true); // Displays loading message
    try {
      const response = await openai.images.generate({
        prompt: promptHelper(textPrompt),
        n: 1,
        size: "512x512",
      })

      if (response.created) {
        setLoading(false); // Hides loading message
        setGeneratedImage(response.data[0].url); // Displays the generated image
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
    <section className='img-generator'>

      <label className='label-title'>Generate an image with Dall-E:</label>

      <div className="prompt-box">
        <input
          type="text"
          placeholder="Enter a prompt for inspiration"
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
        />
        <button className="gen-button" onClick={generateImage}>Generate Image</button>
      </div>

      <div className="generated-image">

        {loading && (
          <h2>Generating Image... Please wait...</h2>
        )}

        {generatedImage && (
          <div>
            <img src={generatedImage} alt='Generated Image' />
          </div>
        )}

      </div>

      

    </section>
  )
}
