import artwork from "../../assets/images/LePontdelEurope.jpg"
import "./ConvergingLines.css";

export default function ConvergingLines (){

    return (<div>

        {/* the button that contains the image will give "incorrect_feedback" when clicked */}
        <button className="incorrect-button"><img src={artwork} alt="Le Pont de l'Europe" className="artwork"/></button>

        {/* this button will be styled to be over the correct area on the image button */}
        {/* will give the "correct_feedback" message when clicked, and allow the user to move on to the next section */}
        <button className="correct-button"></button>

        <h2 className="question">In the image above, click on the area that the converging lines seem to be directing your eyes toward.</h2>

        <p>Le Pont de l'Europe, Gustav Caillebotte, 1876</p>
        <p>Image credit to Wikipedia</p>

    </div>)
}