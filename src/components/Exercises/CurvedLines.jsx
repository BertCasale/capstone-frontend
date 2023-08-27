
import artwork from "../../assets/images/TheGreatWaveOffKanagawa.jpg"

//setCompleted from Section
export default function CurvedLines({ setCompleted }) {


  return(<div className="curved-lines">

    <div className="interactive-container">

      <div className="image-div">

        <img src={artwork} alt="The Great Wave off Kanagawa" />

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
        <img draggable={true} src={""} alt="vertical line" id="line-1" className="line-1" />
        <img draggable={true} src={""} alt="vertical line" id="line-2" className="line-2" />
      </div>

      </div>


      <div className="content">
      <h3 className="question">Place the lines above on some of the prominent curved lines in the image above.</h3>

      <div className="credit">
        <p>The Great Wave off Kanagawa, Katsushika Hokusai, 1831</p>
        <p>Image credit to Wikipedia</p>
      </div>

      </div>

  </div>)
}