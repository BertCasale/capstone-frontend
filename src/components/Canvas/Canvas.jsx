import { useEffect, useRef } from "react";


export default function Canvas() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
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
