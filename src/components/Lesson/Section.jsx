//lazy allows importing a file later/dynamically (useful for exercises), Suspense allows a loading section while the component is getting dynamically imported and rendered
import { useState, useEffect, lazy, Suspense } from "react";

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
  const [exercise, setExercise] = useState([])

  function importExercise(exerciseName) {
    return lazy(() => import(`../Exercises/${exerciseName}.jsx`))
  }

  //when the sectionindex gets changed, set the section data to the section with the new index
  //also reset the complete and attempted status
  useEffect(() => {
    if (lessonSections[0]) {
      setSectionData(lessonSections[sectionIndex])
    }
    setCompleted(false);
    setAttempted(false);
  }, [sectionIndex, lessonSections]);

  //if theres an interactive element set import it into the page
  //otherwise set the complete status to true
  useEffect(() => {
    if (sectionData.interactive_element && sectionData.interactive_element !== "none") {
      async function loadExercise() {
        const ExerciseLoaded = await importExercise(sectionData.interactive_element);

        return <ExerciseLoaded setCompleted={setCompleted} setAttempted={setAttempted} completed={completed} />
      }
      loadExercise().then((res) => setExercise(res))
    } else {
      setCompleted(true)
    }
  }, [sectionData])




  //for the testing buttons to change the index of the sections
  function changeSectionIndex(num) {
    console.log(sectionIndex + num)
    setSectionIndex(sectionIndex + num)
  }



  return (<div className="lesson-section">

    <div className="columns is-multiline is-centered">

      <div className="column is-full">

        <h1 className="title is-2">{sectionData.title}</h1>

        {/* testing buttons */}
        <button onClick={() => changeSectionIndex(1)}>+1</button>
        <button onClick={() => changeSectionIndex(-1)}>-1</button>

      </div>

      {/* hide the content div if theres no content to show */}
      <div className="content column is-half" style={sectionData.information_text || (attempted && sectionData.incorrect_feedback) || (completed && sectionData.correct_feedback) ? null : { display: "none" }}>

        {/* shown or hidden depending on if theres information. If there's no information, only the exercise will show  */}
        <h2 className="learning-info">{sectionData.information_text}</h2>

        {/* hide the feedback until the user attempts the exercise*/}
        <div className="feedback" style={attempted || completed ? null : { display: "none" }}>
          {/* chenge the color of the feedback based on whether it's completed successfully or not */}
          <h3 style={completed ? { color: "green" } : { color: "red" }}>{completed ? sectionData.correct_feedback : sectionData.incorrect_feedback}</h3>
        </div>

      </div>

      <div className="column exercise" style={sectionData.interactive_element && sectionData.interactive_element !== "none" ? null : { display: "none" }}>


        <Suspense fallback={<h2>Exercise Loading...</h2>}>
          {exercise}
          {/* <Exercise setCompleted={setCompleted} setAttempted={setAttempted} completed={completed}/> */}
        </Suspense>


      </div>

    </div>

    {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
    {/* should start disabled until the user completes an exercise */}
    <button disabled={!completed} className="button">Next</button>

  </div>)
}