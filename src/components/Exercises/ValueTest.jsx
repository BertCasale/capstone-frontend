import artwork from "../../assets/images/ValueTest.jpg";
import "./ValueTest.css";

//setCompleted from Section
export default function ValueTest({ setCompleted, setAttempted }) {


  return (<div className="value-test">

    <div className="interactive is-flex is-flex-direction-column">

      <div className="artwork-div">

        <img src={artwork} alt="Value Test" className="artwork"/>

        <div className="empty-area first-area is-flex is-align-items-center">
          <p>1</p>
        </div>

        <div className="empty-area second-area is-flex is-align-items-center">
          <p>2</p>
        </div>

        <div className="empty-area third-area is-flex is-align-items-center">
          <p>3</p>
        </div>

        <div className="empty-area fourth-area is-flex is-align-items-center">
          <p>4</p>
        </div>

        <div className="empty-area fifth-area is-flex is-align-items-center">
          <p>5</p>
        </div>

      </div>

      {/* the box the contains the shades at the start */}
      <div className="starting-box is-flex is-justify-content-center">

      </div>

    </div>

  </div>)
}
