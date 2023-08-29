import incorrectArtwork from "../../assets/images/RedBoatsAtArgenteuil.jpg"
import correctArtwork from "../../assets/images/BreezingUp.jpg";
import "./LinesTest.css";

//setCompleted, setAttempted, completed are all from sections
export default function LinesTest({ setCompleted, setAttempted, completed }) {
  return (<div>
    <img src={correctArtwork} alt="Breezing Up" className="artwork"/>
    <img src={incorrectArtwork} alt="Red Boats at Argenteuil" className="artwork"/>
  </div>)
  

}