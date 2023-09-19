import { useState } from 'react';
import { openai } from '../../services/config/dalleAPI'


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
    <div className='field'>

      <label className='label is-large'>Generate an Image using Dall-E</label>

      <div className="control">
        <input
          className='input is-large'
          type="text"
          placeholder="Enter a prompt for inspiration"
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
        />
      </div>

      <button className='button' onClick={generateImage}>Generate Image</button>

      {loading && (
        <h2>Generating Image... Please wait...</h2>
      )}

      {generatedImage && (
        <div className='mt-4'>
          <img src={generatedImage} alt='Generated Image' />
        </div>
      )}

    </div>
  )
}
