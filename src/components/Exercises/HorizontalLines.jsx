import artwork from "../../assets/images/TheMonkByTheSea.jpg";
import line from "../../assets/images/Horizontal.png"
import "./HorizontalLines.css";
import { useState } from "react";

//setCompleted, completed, and setAttempted come from section
export default function HorizontalLines({ setCompleted }) {
  const [linePlaced, setLinePlaced] = useState(false);

  //event for clicking on the line
  function handleMouseDown(event) {
    //the line that we are moving
    let movingLine = event.target;
    //create a variable for the dropping area
    let elementBelow = null;

    //get the spot where the mouse is clicked relative to the line
    let shiftX = event.clientX - movingLine.getBoundingClientRect().left;
    let shiftY = event.clientY - movingLine.getBoundingClientRect().top;

    //prepare to move
    movingLine.style.position = 'absolute';
    movingLine.style.zIndex = 1000;

    //move the line, using the mouse as the reference point
    function moveAt(pageX, pageY) {
      movingLine.style.left = pageX - shiftX + 'px';
      movingLine.style.top = pageY - shiftY + 'px';
    }
    
    function handleMove(event) {
      //move the line everytime the mouse moves
      moveAt(event.pageX, event.pageY);

      //get the element directly under the mouse
      movingLine.hidden = true;
      elementBelow = document.elementFromPoint(event.clientX, event.clientY);
      movingLine.hidden = false;

    }

    //move the line when first clicking
    moveAt(event.pageX, event.pageY);

    //add the mousemove event listener to the document to move the line
    document.addEventListener("mousemove", handleMove);

    //when releasing the mouse
    movingLine.onmouseup = function() {
      //check if the elemnt directly below is the empty box div
      if (elementBelow.id === "line-box"){
        //append the line to the div 
        elementBelow.appendChild(movingLine);

        setCompleted(true);
        setLinePlaced(true);
      }
      //return the line to starting position
      movingLine.style.left = "";
      movingLine.style.top = "";
      movingLine.style.position = "";
      movingLine.style.zIndex = "";

      //remove the event listener from the document
      document.removeEventListener("mousemove", handleMove);
      movingLine.onmouseup = null;
    };

  }


  //same as above, but for touch screens
  function handleTouch(event) {
    let movingLine = event.target;
    let elementBelow = null;

    let shiftX = event.touches[0].clientX - movingLine.getBoundingClientRect().left;
    let shiftY = event.touches[0].clientY - movingLine.getBoundingClientRect().top;

    movingLine.style.position = 'absolute';
    movingLine.style.zIndex = 1000;

    function moveAt(pageX, pageY) {
      movingLine.style.left = pageX - shiftX + 'px';
      movingLine.style.top = pageY - shiftY + 'px';
    }

    moveAt(event.touches[0].pageX, event.touches[0].pageY);

    function handleMove(event) {

      moveAt(event.touches[0].pageX, event.touches[0].pageY);

      movingLine.hidden = true;
      elementBelow = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
      movingLine.hidden = false;
    }

    document.addEventListener("touchmove", handleMove);

    movingLine.ontouchend = function() {
      if (elementBelow.id === "line-box"){
        elementBelow.appendChild(movingLine);
        setCompleted(true);
        setLinePlaced(true);
      }

      movingLine.style.left = "";
      movingLine.style.top = "";
      movingLine.style.position = "";
      movingLine.style.zIndex = "";

      document.removeEventListener("touchmove", handleMove);
      movingLine.ontouchend = null;
    };
  }

  return (<div className="horizontal-lines">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column">

      <div className="artwork-div">

        <img src={artwork} alt="The Monk by the Sea" className="artwork"/>

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div 
          className="empty-box" 
          id="line-box"
        >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box is-flex is-justify-content-center">
        <img 
          draggable="false"
          src={line} 
          alt="horizontal line" 
          id="draggable-line" 
          className="line is-clickable" 
          onMouseDown={linePlaced ? null : (e) => handleMouseDown(e)}
          onTouchStart={linePlaced ? null : (e) => handleTouch(e)}
        />
      </div>

    </div>

  </div>)
}