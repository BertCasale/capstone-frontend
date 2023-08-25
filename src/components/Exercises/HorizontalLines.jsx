import { useState } from "react";
import artwork from "../../assets/images/TheMonkByTheSea.jpg";
import line from "../../assets/images/Horizontal.png"
import "./HorizontalLines.css";

//setCompleted, completed, and setAttempted come from section
export default function HorizontalLines({ setCompleted, setAttempted, completed }) {


  //allow the div to accept a dropped element
  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  //what to do when starting to drag
  function handleDragStart(event) {
    event.dataTransfer.setData("image", event.target.id);
    event.dataTransfer.effectAllowed = "move";
  }

  //what to do when the picture gets dropped
  function handleDrop(event) {
    const data = event.dataTransfer.getData("image");
    event.target.appendChild(document.getElementById(data));
  }

  return (<div className="horizontal-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="The Monk by the Sea" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)} >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box">
        <img draggable src={line} alt="horizontal line" id="draggable-line" onDragStart={(e) => handleDragStart(e)} />
      </div>


    </div>

    <div className="content">
      <h3 className="question">Place the line above on the prominent horizontal line in the image above.</h3>

      <div className="credit">
        <p>The Monk by the Sea, Caspar David Friedrich, 1808-10</p>
        <p>Image credit to Wikipedia</p>
      </div>

    </div>

  </div>)
}