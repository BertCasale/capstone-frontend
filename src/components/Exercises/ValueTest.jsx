import artwork from "../../assets/images/ValueTest.jpg";
import "./ValueTest.css";

//setCompleted from Section
export default function ValueTest({ setCompleted, setAttempted }) {


  return (<div className="value-test">

    <div className="interactive is-flex is-flex-direction-column is-align-items-center">

      <div className="artwork-div">

        <img src={artwork} alt="Value Test" className="artwork"/>

        <div className="empty-area first-area is-flex is-align-items-center is-clickable">
          <p>1</p>
        </div>

        <div className="empty-area second-area is-flex is-align-items-center is-clickable">
          <p>2</p>
        </div>

        <div className="empty-area third-area is-flex is-align-items-center is-clickable">
          <p>3</p>
        </div>

        <div className="empty-area fourth-area is-flex is-align-items-center is-clickable">
          <p>4</p>
        </div>

        <div className="empty-area fifth-area is-flex is-align-items-center is-clickable">
          <p>5</p>
        </div>

      </div>

      {/* the box the contains the shades at the start */}
      <div className="starting-box is-flex is-justify-content-center">

        <div className="shade white" title="White" draggable></div>

        <div className="shade light-gray" title="Light Gray" draggable></div>

        <div className="shade middle-gray" title="Middle Gray" draggable></div>

        <div className="shade dark-gray" title="Dark Gray" draggable></div>

        <div className="shade black" title="Black" draggable></div>


      </div>

    </div>

  </div>)
}
