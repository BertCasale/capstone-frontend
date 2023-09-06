import Canvas from "../../components/Canvas/Canvas"
import Toolbar from "../../components/Canvas/Toolbar"

export default function Sandbox() {
  return(
    <section className="container">
      <Toolbar/>
      <Canvas canvasWidth={500} canvasHeight={500}/>
    </section>
  )
}

