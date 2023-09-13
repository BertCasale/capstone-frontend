import artwork from "../../assets/images/ValueTest.jpg";
import "./ValueTest.css";

//setCompleted from Section
export default function ValueTest({ setCompleted, setAttempted }) {

  //allow the divs on the image to recieve a dropped element
  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  //when starting to drag, allo
  function handleDragStart(event) {
    event.dataTransfer.setData("shade", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
  }

  //set the background color of the area on the image to be the same color as the div dropped onto it
  function handleDrop(event) {
    let blankArea = event.target;
    const data = event.dataTransfer.getData("shade");
    blankArea.style.backgroundColor = `#${data}`;
  }

  //remove the color from the div on the image
  function handleClick(event) {
    event.target.style.backgroundColor = "";
  }

  return (<div className="value-test">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column ">

      <div className="artwork-div">

        <img src={artwork} alt="Value Test" className="artwork" />

        <div
          className="empty-area first-area is-flex is-align-items-center is-clickable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area second-area is-flex is-align-items-center is-clickable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area third-area is-flex is-align-items-center is-clickable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area fourth-area is-flex is-align-items-center is-clickable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area fifth-area is-flex is-align-items-center is-clickable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

      </div>

      {/* the box the contains the shades at the start */}
      <div className="starting-box is-flex is-justify-content-center">

        <div className="shade white" title="White" id="FFFFFF" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade light-gray" title="Light Gray" id="BFBFBF" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade middle-gray" title="Middle Gray" id="7F7F7F" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade dark-gray" title="Dark Gray" id="3F3F3F" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade black" title="Black" id="000000" draggable onDragStart={(e) => handleDragStart(e)}></div>


      </div>

    </div>

  </div>)
}
