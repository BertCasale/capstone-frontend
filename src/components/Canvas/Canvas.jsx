import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";


export default function Canvas({ canvasWidth, canvasHeight }) {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = canvasWidth - canvasOffsetX;
    canvas.height = canvasHeight - canvasOffsetY;

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

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  }

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  const toggleColor = (event) => {
    event.preventDefault();
    contextRef.current.strokeStyle = event.target.value;
  }

  return (
    <div>
      <Toolbar clearCanvas={clearCanvas} toggleColor={toggleColor}/>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{ border: '1px solid black' }}
      >
      </canvas>
    </div>
  )
}
