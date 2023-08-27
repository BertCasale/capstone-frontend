import { useState, useEffect } from "react";
import artwork from "../../assets/images/ChurchofSaintBevo.jpg";
import line from "../../assets/images/Vertical.png";
import "./VerticalLines.css";

//setCompleted from Section
export default function VerticalLines({ setCompleted }) {
  //state to make the lines nondraggable and set complete 
  const [linesPlaced, setLinesPlaced] = useState({
    line1: false,
    line2: false
  });

  //whenever a line is placed check to see if both are placed, to set complete
  useEffect(() => {
    if (linesPlaced.line1 && linesPlaced.line2) {
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

  return (<div className="vertical-lines">

    <div className="interactive-container level">

      <div className="image-div level-item">

        <img src={artwork} alt="Church of Saint Bevo" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" id="line-1-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box second-box" id="line-2-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box third-box" id="line-2-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box fourth-box" id="line-1-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box level-item">
        {/* disable the draggability if the line was placed */}
        <img draggable={!linesPlaced.line1} src={line} alt="vertical line" id="line-1" className="line-1" onDragStart={(e) => handleDragStart(e)} />
        <img draggable={!linesPlaced.line2} src={line} alt="vertical line" id="line-2" className="line-2" onDragStart={(e) => handleDragStart(e)} />
      </div>

    </div>


    <div className="content">
      <h3 className="question">Place the lines above on some of the prominent vertical lines in the image above.</h3>

      <div className="credit">
        <p>The Choir and North Ambulatory of the Church of Saint Bavo, Haarlem, Pieter Jansz, 1634</p>
        <p>Image credit to Getty</p>
      </div>

    </div>

  </div>)
}
