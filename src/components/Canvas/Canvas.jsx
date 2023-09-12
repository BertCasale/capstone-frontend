import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";


export default function Canvas({ canvasWidth, canvasHeight }) {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('black');
  const [isErasing, setIsErasing] = useState(false);
  const [restoreArray, setRestoreArray] = useState([]);
  const [index, setIndex] = useState(-1);

  const [lineMode, setLineMode] = useState(false);
  const [startPointX, setStartPointX] = useState('');
  const [startPointY, setStartPointY] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = canvasWidth - canvasOffsetX;
    canvas.height = canvasHeight - canvasOffsetY;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.lineCap = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);

    if (lineMode) {
      setStartPointX(offsetX);
      setStartPointY(offsetY);
    }
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    
  }

  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;

    if (lineMode) {
      
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      return;
    }

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  const stopDrawing = () => {
    if (!isDrawing) return;
    
    if (lineMode) {
      contextRef.current.stroke();
    }
    
    contextRef.current.closePath();
    setIsDrawing(false);
    setRestoreArray([...restoreArray, contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)]);
    setIndex(index + 1);
  }

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setRestoreArray([]);
    setIndex(-1);
  }

  const handleColorChange = (event) => {
    event.preventDefault();
    setBrushColor(event.target.value);
    contextRef.current.strokeStyle = event.target.value;
    setIsErasing(false);
    setLineMode(false);
  }

  const handleLineWidthChange = (event) => {
    event.preventDefault();
    contextRef.current.lineWidth = event.target.value;
  }

  const toggleEraseMode = () => {
    if (contextRef.current.strokeStyle != "#ffffff") {
      contextRef.current.strokeStyle = "white";
    } else {
      contextRef.current.strokeStyle = brushColor;
    }
    setIsErasing(!isErasing);
  }

  const undoAction = () => {
    if (index <= 0) {
      clearCanvas();
    } else {
      setIndex(index - 1);
      setRestoreArray([...restoreArray.slice(0, -1)]);
      contextRef.current.putImageData(restoreArray[index - 1], 0, 0);
    }
  }

  const toggleLineMode = () => {
    setLineMode(!lineMode);
  }

  const drawLine = (startX, startY, endX, endY) => {
    contextRef.current.beginPath();
    contextRef.current.moveTo(startX, startY);
    contextRef.current.lineTo(endX, endY);
    contextRef.current.stroke();
  }

  const handleCanvasClick = (event) => {
    if (lineMode) {
      const { offsetX, offsetY } = event.nativeEvent;
      if (!isDrawing) {
        // Start a new line
        setIsDrawing(true);
        setStartPoint({ x: offsetX, y: offsetY});
      } else {
        //End the line and draw it
        setIsDrawing(false);
        const { x, y } = startPoint;
        drawLine(x, y, offsetX, offsetY);
      }
    }
  }

  return (
    <div>
      <Toolbar 
        clearCanvas={clearCanvas} 
        handleColorChange={handleColorChange} 
        handleLineWidthChange={handleLineWidthChange}
        toggleEraseMode={toggleEraseMode}
        isErasing={isErasing}
        undoAction={undoAction}
        lineMode={lineMode}
        toggleLineMode={toggleLineMode}
      />
      <canvas
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        ref={canvasRef}
        style={{ border: '1px solid black' }}
      />
    </div>
  )
}
