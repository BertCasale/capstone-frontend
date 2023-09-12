import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";


export default function Canvas({ canvasWidth, canvasHeight }) {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false); // controls when brush should draw or not
  const [brushColor, setBrushColor] = useState('black');
  const [eraseMode, setEraseMode] = useState(false); // controls erase mode
  const [restoreArray, setRestoreArray] = useState([]);
  const [index, setIndex] = useState(-1);

  const [lineMode, setLineMode] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: null, y: null });
  const [snapshot, setSnapshot] = useState({});

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
    setStartPoint({ x: offsetX, y: offsetY }); // sets start point to be the current mouse position
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    // sets snapshot to be the current canvas data
    setSnapshot(contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
  }

  const draw = (event) => {
    if (!isDrawing) return;
    contextRef.current.putImageData(snapshot, 0, 0); // adds copied canvas data on to the current canvas
    const { offsetX, offsetY } = event.nativeEvent;

    if (lineMode) {
      const { x, y } = startPoint;
      drawLine(x, y, offsetX, offsetY);
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
    setEraseMode(false);
    setLineMode(false);
  }

  const handleLineWidthChange = (event) => {
    event.preventDefault();
    contextRef.current.lineWidth = event.target.value;
  }

  const toggleEraseMode = () => {
    if (contextRef.current.strokeStyle != "#ffffff") {
      contextRef.current.strokeStyle = "white";
    }
    setEraseMode(!eraseMode);
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

  return (
    <div>
      <Toolbar 
        clearCanvas={clearCanvas} 
        handleColorChange={handleColorChange} 
        handleLineWidthChange={handleLineWidthChange}
        toggleEraseMode={toggleEraseMode}
        eraseMode={eraseMode}
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
