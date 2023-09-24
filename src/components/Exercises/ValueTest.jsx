import { useEffect, useState } from "react";
import artwork from "../../assets/images/ValueTest.jpg";
import "./ValueTest.css";

//setCompleted from Section
export default function ValueTest({ setCompleted, setAttempted }) {
  //keep track of the colors in each area, along with their correct color
  const [areasFilled, setAreasFilled] = useState([
    {correctColor: "#BFBFBF", correct: false},
    {correctColor: "#3F3F3F", correct: false},
    {correctColor: "#7F7F7F", correct: false},
    {correctColor: "#000000", correct: false},
    {correctColor: "#FFFFFF", correct: false},
  ]);
  //keep track of how many areas are filled
  const [areaFilledAmount, setAreaFilledAmount] = useState(0);

  //when either the areas filled amount or the areas filled change, 
  //check if the areas are all correct and set either attempted or completed
  useEffect(() => {
    if (areaFilledAmount === 5) {
      let solved = areasFilled.every((area) => {
        return area.correct === true;
      })

      if (solved){
        setCompleted(true);
      } else {
        setAttempted(true);
      }
    }
    
  }, [areaFilledAmount, areasFilled])

  //allow the divs on the image to recieve a dropped element
  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  //when starting to drag, allo
  function handleDragStart(event) {
    event.dataTransfer.setData("shade", event.target.id);
    event.dataTransfer.effectallowed = "copy";
  }

  //set the background color of the area on the image to be the same color as the div dropped onto it
  function handleDrop(event) {
    let blankArea = event.target.style
    //area index value
    let areaNumber = event.target.id[5] - 1;
    //get the correct color for the specific area from state
    let correctColorValue = areasFilled[areaNumber].correctColor;

    //if the are was empty, then increase area filled amount by 1
    if (blankArea.backgroundColor === "") {
      setAreaFilledAmount(areaFilledAmount + 1);
    }
    const data = event.dataTransfer.getData("shade");
    blankArea.backgroundColor = data;

    let allAreas = [...areasFilled];
    //if the color is correct, set the correct boolean in the areaFilled state for that area to true, otherwise set to false
    if (correctColorValue === data) {
      allAreas[areaNumber].correct = true;
      setAreasFilled([...allAreas]);
    } else {
      allAreas[areaNumber].correct = false;
      setAreasFilled([...allAreas]);
    }
  }

  //remove the color from the div on the image
  //lower the amount of the areas filled amount state by one
  function handleClick(event) {
    let areaColor = event.target.style;
    if (areaColor.backgroundColor !== "") {
      areaColor.backgroundColor = "";
      setAreaFilledAmount(areaFilledAmount - 1);
    }
  }

  return (<div className="value-test">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column ">

      <div className="artwork-div">

        <img src={artwork} alt="Value Test" className="artwork" />

        <div
          className="empty-area first-area is-flex is-align-items-center is-clickable"
          id="area-1"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area second-area is-flex is-align-items-center is-clickable"
          id="area-2"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area third-area is-flex is-align-items-center is-clickable"
          id="area-3"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area fourth-area is-flex is-align-items-center is-clickable"
          id="area-4"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        <div
          className="empty-area fifth-area is-flex is-align-items-center is-clickable"
          id="area-5"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
          onClick={(e) => handleClick(e)}>
        </div>

        {/* divs to outline the correct or incorrect areas  */}
        <div className={`empty-area first-background-area 
          ${areaFilledAmount === 5 && areasFilled[0].correct ? "correct-selection" : ""}
          ${areaFilledAmount === 5 && !areasFilled[0].correct ? "incorrect-selection" : ""}`}></div>

        <div className={`empty-area second-background-area 
          ${areaFilledAmount === 5 && areasFilled[1].correct ? "correct-selection" : ""}
          ${areaFilledAmount === 5 && !areasFilled[1].correct ? "incorrect-selection" : ""}`}></div>

        <div className={`empty-area third-background-area 
          ${areaFilledAmount === 5 && areasFilled[2].correct ? "correct-selection" : ""}
          ${areaFilledAmount === 5 && !areasFilled[2].correct ? "incorrect-selection" : ""}`}></div>

        <div className={`empty-area fourth-background-area 
          ${areaFilledAmount === 5 && areasFilled[3].correct ? "correct-selection" : ""}
          ${areaFilledAmount === 5 && !areasFilled[3].correct ? "incorrect-selection" : ""}`}></div>

        <div className={`empty-area fifth-background-area 
          ${areaFilledAmount === 5 && areasFilled[4].correct ? "correct-selection" : ""}
          ${areaFilledAmount === 5 && !areasFilled[4].correct ? "incorrect-selection" : ""}`}></div>

      </div>

      {/* the box the contains the shades at the start */}
      <div className="starting-box is-flex is-justify-content-center">

        <div className="shade white is-clickable" title="White" id="#FFFFFF" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade light-gray is-clickable" title="Light Gray" id="#BFBFBF" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade middle-gray is-clickable" title="Middle Gray" id="#7F7F7F" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade dark-gray is-clickable" title="Dark Gray" id="#3F3F3F" draggable onDragStart={(e) => handleDragStart(e)}></div>

        <div className="shade black is-clickable" title="Black" id="#000000" draggable onDragStart={(e) => handleDragStart(e)}></div>

      </div>

    </div>

  </div>)
}
