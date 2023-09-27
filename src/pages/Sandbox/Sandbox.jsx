import Canvas from "../../components/Canvas/Canvas";
import ImageGenerator from "../../components/Canvas/ImageGenerator";
import './Sandbox.css'

export default function Sandbox() {
  return(
    <div className="page-container">
      <section key={1} className="section-container">

        <Canvas canvasWidth={1000} canvasHeight={600}/>
      
        <ImageGenerator />

      </section>
    </div>
  )
}

