import { useEffect, useState } from "react";
import "./SecondaryColors.css";

//setCompleted comes from section
export default function SecondaryColors({ setCompleted }) {


  return (<div className="secondary-colors">

    <div className="interactive is-flex is-align-items-center is-flex-direction-column">

      <div className="artwork-div">

        <div className="orange mixing">

          <button className="red color button" name="red" title="Red" id="255,0,0" >Red</button>

          <button className="yellow color" name="yellow" title="Yellow" id="255,255,0" >Yellow</button>

        </div>

        <div className="green mixing">

          <button className="yellow color button" name="yellow" title="Yellow" id="255,255,0" >Yellow</button>

          <button className="blue color" name="blue" title="Blue" id="0,0,255" >Blue</button>

        </div>

        <div className="violet mixing">

          <button className="blue color button" name="blue" title="Blue" id="0,0,255" >Blue</button>

          <button className="red color" name="red" title="Red" id="255,0,0" >Red</button>

        </div>

        

        

        

      </div>

    </div>

  </div>)
}