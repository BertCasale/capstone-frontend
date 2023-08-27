import artwork from "../../assets/images/ChurchofSaintBevo.jpg";
import line from "../../assets/images/Vertical.jpg";
import "./VerticalLines.css";

export default function VerticalLines({ setCompleted }) {

  return (<div className="vertical-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="Church of Saint Bevo" />

        {/* the box where the line can be drag and dropped into */}
        {/* once the line is dropped in, the next button will enable */}
        <div className="empty-box first-box" >

        </div>
        <div className="empty-box second-box" >

        </div>

      </div>

      {/* the box the contains the line at the start */}
      <div className="starting-box">
        <img draggable src={line} alt="vertical line" id="draggable-line-1" />
      </div>

    </div>


    <div className="content">
      <h3 className="question">Place the line above on some of the prominent vertical lines in the image above.</h3>

      <div className="credit">
        <p>The Choir and North Ambulatory of the Church of Saint Bavo, Haarlem, Pieter Jansz, 1634</p>
        <p>Image credit to Getty</p>
      </div>

    </div>

  </div>)
}
