
import artwork from "../../assets/images/TheSwing.jpg"
import line from "../../assets/images/Vertical.png";

import "./DiagonalLines.css"

//setCompleted from sections
export default function DiagonalLines({ setCompleted }) {


  return (<div className="diagonal-lines">
    <div className="interactive-container level">

      <div className="image-div">

        <img src={artwork} alt="The Swing" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" id="line-1-box" >

        </div>
        <div className="empty-box second-box" id="line-2-box" >

        </div>
        <div className="empty-box third-box" id="line-3-box" >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box">
        {/* disable the draggability if the line was placed */}
        <img draggable={true} src={line} alt="diagonal line" id="line-1" className="line-1 line" />
        <img draggable={true} src={line} alt="diagonal line" id="line-2" className="line-2 line" />
        <img draggable={true} src={line} alt="diagonal line" id="line-3" className="line-3 line" />
      </div>

    </div>


    <div className="content">
      <h3 className="question">Place the lines above on some of the prominent diagonal lines in the image above.</h3>

      <div className="credit">
        <p>The Swing, Jean-Honoré Fragonard, 1767-8</p>
        <p>Image credit to Wikipedia</p>
      </div>

    </div>
  </div>)
}