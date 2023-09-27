import Canvas from "../../components/Canvas/Canvas";
import ImageGenerator from "../../components/Canvas/ImageGenerator";

export default function Sandbox() {
  return(
    <section key={1} className="container">

      <Canvas canvasWidth={1000} canvasHeight={600}/>
    
      <ImageGenerator />

    </section>
  )
}

