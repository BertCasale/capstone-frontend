import artwork from "../../assets/images/LePontdelEurope.jpg"
import "./ConvergingLines.css";

//setCompleted, completed, and setAttempted come from section
export default function ConvergingLines({ setCompleted, setAttempted, completed }) {

  //what should be done when the correct area is clicked
  function handleCorrectClick() {
    setAttempted(true);
    setCompleted(true);
  }

  //what should be done when the incorrect area is clicked
  function handleIncorrectClick() {
    setAttempted(true);
  }

  return (<div className="converging-lines">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        {/* the button that contains the image will give "incorrect_feedback" when clicked */}
        <img src={artwork} alt="Le Pont de l'Europe" className="artwork is-clickable" onClick={handleIncorrectClick} />

        {/* this button is styled over the correct area on the image button */}
        {/* will give the "correct_feedback" message when clicked, and allow the user to move on to the next section */}
        <button className="correct-button is-clickable" onClick={handleCorrectClick} style={completed ? {opacity:"50%"} : {opacity:"0%"}} ></button>

      </div>
      
    </div>

    <div className="content">
      <h3 className="question">In the image above, click on the area that the converging lines seem to be directing your eyes toward.</h3>

      <div className="credit">
        <p>Le Pont de l'Europe, Gustav Caillebotte, 1876</p>
        <p>Image credit to Wikipedia</p>
      </div>

    </div>

  </div>)
}