import artwork from "../../assets/images/TheMonkByTheSea.jpg";
import "./HorizontalLines.css";

//setCompleted, completed, and setAttempted come from section
export default function HorizontalLines({ setCompleted, setAttempted, completed }) {
  return (<div className="horizontal-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="The Monk by the Sea" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box">

        </div>

      </div>

      {/* the box the contains the line in the beginning */}
      <div className="starting-box" draggable>

      </div>


    </div>

    <div className="content">
      <h3 className="question">Place this line on the horizontal line in the image above.</h3>

      <div className="credit">
        <p>The Monk by the Sea, Caspar David Friedrich, 1808-10</p>
        <p>Image credit to Wikipedia</p>
      </div>

    </div>

  </div>)
}