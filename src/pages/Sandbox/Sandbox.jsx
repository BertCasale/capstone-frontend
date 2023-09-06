import Canvas from "../../components/Canvas/Canvas"

export default function Sandbox() {
  return(
    <section className="section is-flex is-align-items-center is-justify-content-center">
      <Canvas canvasWidth={1000} canvasHeight={600}/>
    </section>
  )
}

