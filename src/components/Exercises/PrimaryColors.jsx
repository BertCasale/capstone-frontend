import { useEffect, useState } from "react";
import "./PrimaryColors.css";

//setCompleted comes from section
export default function PrimaryColors({ setCompleted }) {
  const [colorsFilled, setColorsFilled] = useState({
    red: false,
    yellow: false,
    blue: false
  })

  //setComplete status to true when all the colors are filled
  useEffect(() => {
    if (colorsFilled.red && colorsFilled.yellow && colorsFilled.blue) {
      setCompleted(true);
    }
  }, [colorsFilled])

  //change the color when the button is clicked
  function handleClick(event) {
    let colorButton = event.target;
    let colorId = colorButton.id;

    //get each of the rgb values to set a readable text color
    let rgbValues = colorId.split(",");
    let r = rgbValues[0];
    let g = rgbValues[1];
    let b = rgbValues[2];

    //2 ways to calculate brightness
    //first way seems more accurate
    //brightness  =  sqrt( .241 R2 + .691 G2 + .068 B2 )
    //((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
    let brightness = Math.sqrt((.241 * r * r) + (.691 * g * g) + (.068 * b * b))

    //anything with a brightness value greater than 127 will have black text, otherwise its white
    let brightnessThreshold = 127;
    if (brightness > brightnessThreshold) {
      colorButton.style.color = "black"
    } else {
      colorButton.style.color = "white"
    }

    colorButton.style.backgroundColor = `rgb(${colorId})`;

    setColorsFilled({...colorsFilled, [colorButton.name]: true})

  }

  return (<div className="primary-colors">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column">

      <div className="artwork-div">

        <button className="red color button" name="red" title="Red" id="255,0,0" onClick={handleClick}>Red</button>

        <button className="yellow color button" name="yellow" title="Yellow" id="255,255,0" onClick={handleClick}>Yellow</button>

        <button className="blue color button" name="blue" title="Blue" id="0,0,255" onClick={handleClick}>Blue</button>

      </div>

    </div>

  </div>)
}