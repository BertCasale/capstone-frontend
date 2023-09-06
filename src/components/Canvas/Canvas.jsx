import { useEffect, useRef, useState } from "react";


export default function Canvas() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    // const canvasOffsetX = canvas.offsetLeft;
    // const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  }

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  return (
    <>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width={200}
        height={200}
        style={{ border: '1px solid black' }}
      >
      </canvas>
      <button onClick={clearCanvas}>Clear</button>
    </>
  )
}
