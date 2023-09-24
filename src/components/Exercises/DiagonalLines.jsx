import { useState, useEffect } from "react";
import artwork from "../../assets/images/TheSwing.jpg"
import line from "../../assets/images/Vertical.png";
import "./DiagonalLines.css"

//setCompleted from sections
export default function DiagonalLines({ setCompleted }) {
  //state to make the lines nondraggable and set complete 
  const [linesPlaced, setLinesPlaced] = useState({
    line1: false,
    line2: false,
    line3: false
  });

  //whenever a line is placed check to see if all are placed, to set complete
  useEffect(() => {
    if (linesPlaced.line1 && linesPlaced.line2 && linesPlaced.line3) {
      setCompleted(true);
    }
  }, [linesPlaced]);

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
    //get the id of the box and the image
    let emptyBoxId = event.target.id;
    const data = event.dataTransfer.getData("image");
    //check if the line dropped belongs to the corresponding box
    if (emptyBoxId === `${data}-box`) {
      event.target.appendChild(document.getElementById(data));
      //change state to reflect which line was placed
      setLinesPlaced({ ...linesPlaced, [`line${data[5]}`]: true });
    }
  }

  return (<div className="diagonal-lines">

    <div className="interactive is-flex is-flex-direction-column is-align-items-center">

      <div className="artwork-div">

        <img src={artwork} alt="The Swing" className="artwork"/>

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" id="line-1-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box second-box" id="line-2-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box third-box" id="line-3-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box is-flex is-justify-content-center">
        {/* disable the draggability if the line was placed */}
        {/* remove the rotation angle and the margins when placed */}
        <img draggable={!linesPlaced.line1} src={line} alt="diagonal line" id="line-1" className="line-1 line is-clickable" onDragStart={(e) => handleDragStart(e)} style={linesPlaced.line1 ? {transform: "rotate(0deg)", margin: "0px"} : {}}/>

        <img draggable={!linesPlaced.line2} src={line} alt="diagonal line" id="line-2" className="line-2 line is-clickable" onDragStart={(e) => handleDragStart(e)} style={linesPlaced.line2 ? {transform: "rotate(0deg)", margin: "0px"} : {}}/>

        <img draggable={!linesPlaced.line3} src={line} alt="diagonal line" id="line-3" className="line-3 line is-clickable" onDragStart={(e) => handleDragStart(e)} style={linesPlaced.line3 ? {transform: "rotate(0deg)", margin: "0px"} : {}}/>
      </div>

    </div>

  </div>)
}