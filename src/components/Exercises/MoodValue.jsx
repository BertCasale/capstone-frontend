import { useState } from "react";
import artwork from "../../assets/images/SadForebodingsOfWhatIsToHappen.jpg";
import "./MoodValue.css";

//setCompleted and setAttempted come from section
export default function MoodValue({ setCompleted, setAttempted }) {


  return (<div className="mood-value">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        <img src={artwork} alt="Sad forebodings of what is to happen" className="artwork"/>

        <div className="button-div column"> 

          <div className="level is-mobile">
            <button className="level-item button">Energetic</button>
            <button className="level-item button">Jealous</button>
            <button className="level-item button">Hopeless</button>
          </div>
          <div className="level is-mobile">
            <button className="level-item button">Afraid</button>
            <button className="level-item button">Love</button>
            <button className="level-item button">Excited</button>
          </div>
          <div className="level is-mobile">
            <button className="level-item button">Happy</button>
            <button className="level-item button">Sad</button>
            <button className="level-item button">Bored</button>
          </div>

        </div> 

      </div>
      
    </div>

  </div>)
}