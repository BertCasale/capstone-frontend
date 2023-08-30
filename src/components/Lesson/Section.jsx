//lazy allows importing a file later/dynamically (useful for exercises), Suspense allows a loading section while the component is getting dynamically imported and rendered
import { useState , useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

//lessonSections from lesson
export default function Section({lessonSections}){

    //create state for the next button, which changes based on if the exercise was successfully completed or not
    const [completed, setCompleted] = useState(false);
    //state to display the feedback message if the problem was attempted
    const [attempted, setAttempted] = useState(false);
    //will change to empty fields, filled in for testing purposes
    const [sectionData, setSectionData] = useState({
        title: "Converging Lines",
        informationText: "Converging lines, or lines that point in the same direction, draw your eye in to the point where they meet.",
        interactiveElement: "DiagonalLines",
        correctFeedback: "Correct! The lines of the bridge, bridge shadow, sidewalk, and even the building in the back seem to be directing your attention to the couple walking.",
        incorrectFeedback: "Hint: Follow the bridge and sidewalk lines to find where they meet."
    });
    const {sectionId} = useParams();

    let Exercise;

    //when the section id gets changed in the path, set the section data to the results of api call
    useEffect(() => {
        //setSectionData(lessonSections[sectionId])
    }, [sectionId]);

    //move exercise down to useEffect
    Exercise = lazy(() => import(`../Exercises/${sectionData.interactiveElement}.jsx`));
    //when the section data gets changed, import a new exercise
    useEffect(() => {

    }, [sectionData])
    
    return (<div className="lesson-section">
        
        <div className="columns is-multiline is-centered">

            <div className="column is-full">

                <h1 className="title is-2">{sectionData.title}</h1>

            </div>

            {/* hide the content div if theres no content to show */}
            <div className="content column is-half" style={sectionData.informationText || (attempted && sectionData.incorrectFeedback) || (completed && sectionData.correctFeedback) ? null : {display:"none"}}>

                {/* shown or hidden depending on if theres information. If there's no information, only the exercise will show  */}
                <h2 className="learning-info">{sectionData.informationText}</h2>

                {/* hide the feedback until the user attempts the exercise*/}
                <div className="feedback" style={attempted || completed ? null : {display:"none"}}>
                    {/* chenge the color of the feedback based on whether it's completed successfully or not */}
                    <h3 style = {completed ? {color:"green"} : {color:"red"}}>{completed ? sectionData.correctFeedback : sectionData.incorrectFeedback}</h3>
                </div>

            </div>

            <div className="column">

                <Suspense fallback={<h2>Exercise Loading...</h2>}>
                    <Exercise setCompleted={setCompleted} setAttempted={setAttempted} completed={completed}/>
                </Suspense>
                
            </div>

        </div>

        {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
        {/* should start disabled until the user completes an exercise */}
        <button disabled={!completed} className="button">Next</button>

    </div>)
}