import artwork from "../../assets/images/GirlWithAPearlEarring.jpg"
import "./LightSourceValue.css";

//setCompleted, completed, and setAttempted come from section
export default function LightSourceValue({ setCompleted, setAttempted, completed }) {

  //what should be done when the correct area is clicked
  function handleCorrectClick() {
    setAttempted(true);
    setCompleted(true);
  }

  //what should be done when the incorrect area is clicked
  function handleIncorrectClick() {
    setAttempted(true);
  }

  return (<div className="light-source-value">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        {/* the button that contains the image will give "incorrect_feedback" when clicked */}
        <img src={artwork} alt="Girl with a Pearl Earring" className="artwork is-clickable" onClick={handleIncorrectClick} />

        {/* this button is styled over the correct area on the image button */}
        {/* will give the "correct_feedback" message when clicked, and allow the user to move on to the next section */}
        <button className="correct-button is-clickable" onClick={handleCorrectClick} style={completed ? {opacity:"50%"} : {opacity:"0%"}}></button>

      </div>
      
    </div>

  </div>)
}