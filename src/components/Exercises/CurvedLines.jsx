import { useEffect, useState } from "react";
import artwork from "../../assets/images/TheGreatWaveOffKanagawa.jpg";
import lineOne from "../../assets/images/CurvedOne.png";
import lineTwo from "../../assets/images/CurvedTwo.png";
import "./CurvedLines.css"

//setCompleted from Section
export default function CurvedLines({ setCompleted }) {
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
      //check if the elemnt directly below is the correct empty box div
      if (elementBelow.id === `${movingLine.id}-box`){
        //append the line to the div 
        elementBelow.appendChild(movingLine);

        setLinesPlaced({ ...linesPlaced, [movingLine.id]: true });
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
      if (elementBelow.id === `${movingLine.id}-box`){
        elementBelow.appendChild(movingLine);
        setLinesPlaced({ ...linesPlaced, [movingLine.id]: true });
      }

      movingLine.style.left = "";
      movingLine.style.top = "";
      movingLine.style.position = "";
      movingLine.style.zIndex = "";

      document.removeEventListener("touchmove", handleMove);
      movingLine.ontouchend = null;
    };
  }

  return (<div className="curved-lines">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column">

      <div className="artwork-div">

        <img src={artwork} alt="The Great Wave off Kanagawa" className="artwork" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div 
          className="empty-box first-box" 
          id="line1-box" 
        >

        </div>
        <div 
          className="empty-box second-box" 
          id="line2-box" 
        >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box is-flex is-justify-content-center">
        <img 
          draggable="false"
          src={lineOne} 
          alt="curved line" 
          id="line1" 
          className="line-1 is-clickable" 
          onMouseDown={linesPlaced.line1 ? null : (e) => handleMouseDown(e)}
          onTouchStart={linesPlaced.line1 ? null : (e) => handleTouch(e)}
        />

        <img 
          draggable="false"
          src={lineTwo} 
          alt="curved line" 
          id="line2" 
          className="line-2 is-clickable" 
          onMouseDown={linesPlaced.line2 ? null : (e) => handleMouseDown(e)}
          onTouchStart={linesPlaced.line2 ? null : (e) => handleTouch(e)} 
        />
      </div>

    </div>

  </div>)
}