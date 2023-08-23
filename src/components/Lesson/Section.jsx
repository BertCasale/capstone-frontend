//!!! WORK IN PROGRESS
//lazy allows importing a file later/dynamically (useful for exercises), Suspense allows a loading section while the component is getting dynamically imported and rendered
import { useState , useEffect, lazy, Suspense } from "react"

//delete exercise import later to get dynamic imports
import ConvergingLines from "../Exercises/ConvergingLines";

export default function Section(){
    //create state for the next button, which changes based on if the exercise was completed or not
    const [completed, setCompleted] = useState(false);

    //let url = "ConvergingLines";
   //const Exercise = lazy(() => import(`../Exercises/${url}`))

    return (<div className="lesson-section">
        
        <div className="columns is-multiline is-centered">

            <div className="column is-full">

                <h1 className="title is-2">Converging Lines{/* display the title from the database */}</h1>

                <div className="materials"> 
                    <h3><strong>Materials to Practice:</strong></h3>
                    <p>Pen or Pencil, Paper{/* display the materials listed in the database  */}</p>
                </div>

            </div>

            <div className="content column is-half">

                {/* shown or hidden depending on if theres information. If there's no information, only the excersise will show  */}
                <p className="information">{/* display the information_text from the database */}</p>

                <h2 className="learning-info">Converging lines, or lines that point in the same direction, draw your eye in to the point where they meet.</h2>

            </div>

            <div className="column is-centered">
                <ConvergingLines/>
            </div>

        </div>

        {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
        {/* should start disabled until the user completes an exercise */}
        <button disabled={!completed} className="button">Next</button>

    </div>)
}