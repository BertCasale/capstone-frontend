import incorrectArtwork from "../../assets/images/RedBoatsAtArgenteuil.jpg";
import correctArtwork from "../../assets/images/BreezingUp.jpg";
import "./LinesTest.css";

//setCompleted, setAttempted, completed are all from sections
export default function LinesTest({ setCompleted, setAttempted, completed }) {
  
    //what should be done when the correct area is clicked
    function handleCorrectClick() {
      setAttempted(true);
      setCompleted(true);
      event.target.style = "border: green 3px solid"
    }

    //what should be done when the incorrect area is clicked
    function handleIncorrectClick(event) {
        setAttempted(true);
        event.target.style = "border: red 3px solid"
    }

  return (<div className="lines-test">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        <img src={correctArtwork} alt="Breezing Up" className="artwork is-clickable" onClick={handleCorrectClick} />
        <img src={incorrectArtwork} alt="Red Boats at Argenteuil" className="artwork is-clickable" onClick={handleIncorrectClick} />

      </div>

    </div>

  </div>)
}