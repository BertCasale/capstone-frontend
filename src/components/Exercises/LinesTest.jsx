import incorrectArtwork from "../../assets/images/RedBoatsAtArgenteuil.jpg";
import correctArtwork from "../../assets/images/BreezingUp.jpg";
import "./LinesTest.css";

//setCompleted, setAttempted, completed are all from sections
export default function LinesTest({ setCompleted, setAttempted, completed }) {
  
  return (<div className="lines-test">

    <div className="interactive-container">

      <div className="image-div">

        <img src={correctArtwork} alt="Breezing Up" className="artwork" style={completed ? {border:"green 3px solid"} : {}}/>
        <img src={incorrectArtwork} alt="Red Boats at Argenteuil" className="artwork" style={completed ? {border:"red 3px solid"} : {}}/>

      </div>

    </div>

  </div>)
  

}