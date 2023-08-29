
import artwork from "../../assets/images/JarWithZigzagPanels.jpg"
import line from "../../assets/images/ZigzagOne.png"
import "./ZigzagLines.css";

export default function ZigzagLines() {

  return (<div className="zigzag-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="The Swing" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" id="line-1-box" >

        </div>
        <div className="empty-box second-box" id="line-2-box" >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box">
        {/* disable the draggability if the line was placed */}
        {/* remove the rotation angle and the margins when placed */}
        <img draggable={true} src={line} alt="zigzag line" id="line-1" className="line-1 line" />

        <img draggable={true} src={line} alt="zigzag line" id="line-2" className="line-2" />
      </div>

    </div>


    <div className="content">
      <h3 className="question">Place the lines above on the areas with zigzag lines in the image above.</h3>

      <div className="credit">
        <p>Jar with Zigzag Panels, ca. 3500-3300 B.C.E.</p>
        <p>Image credit to Brooklyn Museum</p>
      </div>

    </div>
  </div>)
}