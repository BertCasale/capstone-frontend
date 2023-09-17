import "./PrimaryColors.css";

//setCompleted comes from section
export default function PrimaryColors({ setCompleted }) {


  return (<div className="primary-colors">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column">

      <div className="artwork-div">

        <div className="red" title="Red"></div>

        <div className="yellow" title="Yellow"></div>
        
        <div className="blue" title="Blue"></div>

      </div>

    </div>

  </div>)
}