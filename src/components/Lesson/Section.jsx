//lazy allows importing a file later/dynamically (useful for exercises), Suspense allows a loading section while the component is getting dynamically imported and rendered
import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Section.css"
import Confetti from "react-confetti";
import ProgressBar from "../../components/Lesson/ProgressBar";
const API = import.meta.env.VITE_REACT_APP_API_URL;

//lessonSections from lesson
export default function Section({ lessonSections }) {

  //create state for the next button, which changes based on if the exercise was successfully completed or not
  const [completed, setCompleted] = useState(false);
  //state to display the feedback message if the problem was attempted
  const [attempted, setAttempted] = useState(false);
  //will change to empty fields, filled in for testing purposes
  const [sectionData, setSectionData] = useState({
    id: "",
    lesson_id: "",
    language_id: "",
    title: "",
    information_text: "",
    interactive_element: "",
    correct_feedback: "",
    incorrect_feedback: "",
    question: "",
    image_credit: ""
  });
  const [sectionIndex, setSectionIndex] = useState(0);
  const [exercise, setExercise] = useState([]);
  const [confettiRan, setConfettiRan] = useState(false);
  const navigate = useNavigate();

  function importExercise(exerciseName) {
    return lazy(() => import(`../Exercises/${exerciseName}.jsx`))
  }

  //when the sectionindex gets changed, set the section data to the section with the new index
  //also reset the complete and attempted status
  useEffect(() => {
    if (lessonSections[sectionIndex]) {
      setSectionData(lessonSections[sectionIndex])
    }
    setCompleted(false);
    setAttempted(false);
    setConfettiRan(false);
  }, [sectionIndex, lessonSections]);

  //if theres an interactive element set import it into the page
  //otherwise set the complete status to true
  useEffect(() => {
    if (sectionData.interactive_element && sectionData.interactive_element !== "none") {
      async function loadExercise() {
        const ExerciseLoaded = importExercise(sectionData.interactive_element);

        return <ExerciseLoaded setCompleted={setCompleted} setAttempted={setAttempted} completed={completed} />
      }
      loadExercise().then((res) => setExercise(res))
    } else {
      setCompleted(true)
    }
  }, [sectionData])


  //for the testing buttons to change the index of the sections
  function changeSectionIndex(num) {
    //console.log(sectionIndex + num)
    setSectionIndex(sectionIndex + num)
  }



  //move to the next section when clicked 
  //if theres no next section in the lesson, set the users completion status
  function handleNextClick() {
    if (lessonSections[sectionIndex + 1]) {
      setSectionIndex(sectionIndex + 1);
    } else {
      //let progress = {client_id: , lesson_id: sectionData.lesson_id, lesson_completion_status: true}
      //axios.post(`${API}/clientLessonsProgress`, progress)
      //  .then(() => {
      navigate("/user/dashboard")
      //  })
      //  .catch((e) => console.warn(e))
    }
  }

  return (<div className="lesson-section">

    <div className="progress-div">
      {/* show the progress of the current lesson */}
      <ProgressBar numberOfSections={lessonSections.length} currentSection={sectionIndex + 1}/>
    </div>
      
    <div className="columns is-multiline is-centered is-desktop">

      <div className="column is-full title-div">

        <h1 className="title">{sectionData.title}</h1>

        {/* testing buttons */}
        {/* <button onClick={() => changeSectionIndex(1)}>+1</button>
        <button onClick={() => changeSectionIndex(-1)}>-1</button> */}

      </div>

      {/* hide the content div if theres no content to show */}
      {sectionData.information_text || (attempted && sectionData.incorrect_feedback) || (completed && sectionData.correct_feedback) ? <div className="content column main-content">

        {/* shown or hidden depending on if theres information. If there's no information, only the exercise will show  */}
        <h2 className="learning-info" style={{ whiteSpace: "pre-wrap" }}>{sectionData.information_text ? sectionData.information_text.replaceAll("\\n", "\n") : null}</h2>

        {/* hide the feedback until the user attempts the exercise*/}
        {/* chenge the color of the feedback based on whether it's completed successfully or not */}
        {(attempted || completed) && (sectionData.correct_feedback || sectionData.incorrect_feedback) ? <div className={`${completed ? "correct-feedback" : "incorrect-feedback"} feedback`}>
          
          <h3>{completed ? sectionData.correct_feedback : sectionData.incorrect_feedback}</h3>
          
        </div> : null}

        <div className="button-div is-hidden-touch">
          {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
          {/* should start disabled until the user completes an exercise */}
          <button disabled={!completed} className="next-button button is-rounded is-large" onClick={handleNextClick}><strong>{lessonSections[sectionIndex + 1] ? "Next" : "Finish"}</strong></button>
        </div>

      </div> : null}

      {/* dont show the interactive element div if there isnt one */}
      {sectionData.interactive_element && sectionData.interactive_element !== "none" ? <div className="column exercise content is-flex-direction-column is-flex is-align-items-center">

        <h3 className="question">{sectionData.question}</h3>

        <Suspense fallback={<h2>Exercise Loading...</h2>}>
          {exercise}
        </Suspense>

        {sectionData.image_credit ? <span className="credit notification is-centered" style={{ whiteSpace: "pre-wrap" }}>{sectionData.image_credit ? sectionData.image_credit.replaceAll("\\n", "\n") : null} </span> : null}

      </div> : null}

      {/* div for confetti on final exercise completion */}
      {!lessonSections[sectionIndex + 1] && completed && !confettiRan ? <div className="confetti-div">

        <Confetti className="confetti" recycle={false} numberOfPieces={500} onConfettiComplete={() => setConfettiRan(true)} />

      </div> : null}

      <div className="button-div column is-full is-hidden-desktop">
        {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
        {/* should start disabled until the user completes an exercise */}
        <button disabled={!completed} className="next-button button is-rounded is-large" onClick={handleNextClick}><strong>{lessonSections[sectionIndex + 1] ? "Next" : "Finish"}</strong></button>
      </div>

    </div>
    
  </div>)
}