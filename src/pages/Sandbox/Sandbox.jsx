import Canvas from "../../components/Canvas/Canvas";
import ImageGenerator from "../../components/Canvas/ImageGenerator";
import './Sandbox.css'

export default function Sandbox() {
  return(
    <div className="page-container">
      <div className="div-container">

        <Canvas canvasWidth={900} canvasHeight={650}/>
      
        <ImageGenerator />

      </div>
    </div>
  )
}

