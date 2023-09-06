import { useEffect, useRef } from "react";


export default function Canvas() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext("2d")
  }, [])

  const startDrawing = () => {

  }

  const endDrawing = () => {

  }

  const draw = () => {

  }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    >
      
    </canvas>
  )
}
