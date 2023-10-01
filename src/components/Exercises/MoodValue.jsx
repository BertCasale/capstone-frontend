import { useState, useEffect } from "react";
import artwork from "../../assets/images/SadForebodingsOfWhatIsToHappen.jpg";
import "./MoodValue.css";

//setCompleted and setAttempted come from section
export default function MoodValue({ setCompleted, setAttempted }) {
  //keep track of which buttons are selected
  const [buttonsSelected, setButtonsSelected] = useState({
    emotion1: false,
    emotion2: false,
    emotion3: false,
    emotion4: false,
    emotion5: false,
    emotion6: false,
    emotion7: false,
    emotion8: false,
    emotion9: false
  });
  //how many buttons are selected
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [success, setSuccess] = useState(false);


  //toggle the button selected state, and update the number of buttons selected
  function handleButtonToggle(event) {
    let selected = buttonsSelected[event.target.id];
    if (selected) {
      setSelectedAmount(selectedAmount - 1);
    } else {
      setSelectedAmount(selectedAmount + 1);
    }

    setButtonsSelected({ ...buttonsSelected, [event.target.id]: !selected })
  }

  //if 2 buttons are selected set attempted to be true
  //and if any incorrect buttons are selected, set complete to true
  useEffect(() => {
    setAttempted(false);

    if (selectedAmount === 2) {
      if (buttonsSelected.emotion1 || buttonsSelected.emotion2 || buttonsSelected.emotion5 || buttonsSelected.emotion6 || buttonsSelected.emotion7){
        setAttempted(true);
      } else {
        setSuccess(true);
        setCompleted(true);
      }
    }
    
  }, [selectedAmount]);


  return (<div className="mood-value">

    <div className="interactive is-flex is-justify-content-center">

      <div className="artwork-div">

        <img src={artwork} alt="Sad forebodings of what is to happen" className="artwork" />

        <div className="button-div column starting-box">

          <div className="level is-mobile">

            {/* the buttons gain class selected when they are clicked */}
            {/* they also gain  */}
            <button
              className={`level-item button 
                ${buttonsSelected.emotion1 ? "selected" : ""} 
                ${success ? "completed-incorrect-selection" : ""}`}
              id="emotion1"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion1) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Energetic</button>

            <button
              className={`level-item button
                ${buttonsSelected.emotion2 ? "selected" : ""} 
                ${success ? "completed-incorrect-selection" : ""}`}
              id="emotion2"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion2) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Jealous</button>

            <button
              className={`level-item button 
                ${buttonsSelected.emotion3 ? "selected" : ""} 
                ${success ? "completed-correct-selection" : ""}`}
              id="emotion3"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion3) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Hopeless</button>

          </div>
          <div className="level is-mobile">

            <button
              className={`level-item button 
                ${buttonsSelected.emotion4 ? "selected" : ""} 
                ${success ? "completed-correct-selection" : ""}`}
              id="emotion4"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion4) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Afraid</button>

            <button
              className={`level-item button 
                ${buttonsSelected.emotion5 ? "selected" : ""} 
                ${success ? "completed-incorrect-selection" : ""}`}
              id="emotion5"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion5) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Love</button>

            <button
              className={`level-item button 
                ${buttonsSelected.emotion6 ? "selected" : ""} 
                ${success ? "completed-incorrect-selection" : ""}`}
              id="emotion6"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion6) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Excited</button>

          </div>
          <div className="level is-mobile">

            <button
              className={`level-item button 
                ${buttonsSelected.emotion7 ? "selected" : ""} 
                ${success ? "completed-incorrect-selection" : ""}`}
              id="emotion7"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion7) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Happy</button>

            <button
              className={`level-item button
                ${buttonsSelected.emotion8 ? "selected" : ""} 
                ${success ? "completed-correct-selection" : ""}`}
              id="emotion8"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion8) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Sad</button>

            <button
              className={`level-item button 
                ${buttonsSelected.emotion9 ? "selected" : ""} 
                ${success ? "completed-correct-selection" : ""}`}
              id="emotion9"
              disabled={(selectedAmount === 2 && !buttonsSelected.emotion9) || (success) ? true : false}
              onClick={handleButtonToggle}
            >Anxious</button>

          </div>

        </div>

      </div>

    </div>

  </div>)
}