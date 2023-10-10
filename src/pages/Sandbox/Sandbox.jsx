import Canvas from "../../components/Canvas/Canvas";
import ImageGenerator from "../../components/Canvas/ImageGenerator";
import './Sandbox.css'

export default function Sandbox() {
  return(
    <div className="page-container">
      <div className="div-container">

        <Canvas canvasWidth={1000} canvasHeight={800}/>
      
        <ImageGenerator />

      </div>
    </div>
  )
}

