import artwork from "../../assets/images/ChurchofSaintBevo.jpg";
import line from "../../assets/images/Vertical.png";
import "./VerticalLines.css";

export default function VerticalLines({ setCompleted }) {

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
    setCompleted(true);
  }

  return (<div className="vertical-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="Church of Saint Bevo" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box second-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box third-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>
        <div className="empty-box fourth-box" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>

        </div>

          {/* the box the contains the line at the start */}
        <div className="starting-box">
          <img draggable src={line} alt="vertical line" id="draggable-line-1" className="line-1" onDragStart={(e) => handleDragStart(e)}/>
          <img draggable src={line} alt="vertical line" id="draggable-line-2" className="line-2" onDragStart={(e) => handleDragStart(e)}/>
        </div>

      </div>

    </div>


    <div className="content">
      <h3 className="question">Place the line above on some of the prominent vertical lines in the image above.</h3>

      <div className="credit">
        <p>The Choir and North Ambulatory of the Church of Saint Bavo, Haarlem, Pieter Jansz, 1634</p>
        <p>Image credit to Getty</p>
      </div>

    </div>

  </div>)
}
