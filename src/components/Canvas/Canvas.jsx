import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";


export default function Canvas({ canvasWidth, canvasHeight }) {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false); // signals when user is drawing or not
  const [brushColor, setBrushColor] = useState('black');
  const [eraseMode, setEraseMode] = useState(false); // controls erase mode
  const [restoreArray, setRestoreArray] = useState([]); // holds actions made in the canvas to be undone
  const [index, setIndex] = useState(-1); // holds the index of last action in the restoreArray
  const [lineMode, setLineMode] = useState(false); // controls lineMode
  const [startPoint, setStartPoint] = useState({ x: null, y: null }); 
  const [snapshot, setSnapshot] = useState({}); // holds the current canvas data
  const [rectangleMode, setRectangleMode] = useState(false);
  const [circleMode, setCircleMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = canvasWidth - canvasOffsetX; // sets correct canvas horizontal position in the page
    canvas.height = canvasHeight - canvasOffsetY; // sets correct canvas vertical position in the page

    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.lineCap = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  // Executes on mouse down in the canvas and triggers isDrawing to true
  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent; // current mouse position
    setIsDrawing(true);
    setStartPoint({ x: offsetX, y: offsetY }); // sets start point to be the current mouse position
    contextRef.current.beginPath(); // defines new path to draw
    contextRef.current.moveTo(offsetX, offsetY); // defines a start point to draw from
    // sets snapshot to be the current canvas data
    setSnapshot(contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
  }

  // Executes on mouse move in the canvas while isDrawing is true
  const draw = (event) => {
    if (!isDrawing) return; // if mouse moves on canvas when isDrawing is false, nothing happens
    contextRef.current.putImageData(snapshot, 0, 0); // adds copied canvas data on to the current canvas
    const { offsetX, offsetY } = event.nativeEvent; // current mouse position
    if (lineMode) {
      drawLine(event); // draws a temporary line from the saved start point to current mouse position
      return;
    }
    if (rectangleMode) {
      drawRectangle(event);
      return;
    }

    contextRef.current.lineTo(offsetX, offsetY); // defines an end point to draw to
    contextRef.current.stroke(); // executes the drawing
  }

  // Executes on mouse up in the canvas or on mouse leave, while isDrawing is true
  const stopDrawing = () => {
    if (!isDrawing) return; // if mouse leaves the canvas when isDrawing is false, nothing happens
    if (lineMode) {
      contextRef.current.stroke(); // draws the final line on mouse up or mouse leave
    }
    setIsDrawing(false);
    setRestoreArray([...restoreArray, contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)]);
    // adds an instance of the canvas data that includes the last drawing
    setIndex(index + 1); // sets index of the last drawing so it can be removed with the undo button
  }

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // clears the canvas
    setRestoreArray([]); // clears all canvas instances from the restoreArray
    setIndex(-1);
  }

  const handleColorChange = (event) => {
    event.preventDefault();
    setBrushColor(event.target.value);
    contextRef.current.strokeStyle = event.target.value;
    setEraseMode(false);
  }

  const handleLineWidthChange = (event) => {
    event.preventDefault();
    contextRef.current.lineWidth = event.target.value;
  }

  const toggleEraseMode = () => {
    if (contextRef.current.strokeStyle != "#ffffff") {
      contextRef.current.strokeStyle = "white";
    }
    if (eraseMode) contextRef.current.strokeStyle = brushColor; 
    // if eraseMode is being turned off, sets the brush color to the previous one
    if (lineMode) setLineMode(false);
    if (rectangleMode) setRectangleMode(false);
    if (circleMode) setCircleMode(false);
    setEraseMode(!eraseMode);
  }

  const undoAction = () => {
    if (index <= 0) {
      clearCanvas();
    } else {
      setRestoreArray([...restoreArray.slice(0, -1)]); 
      // sets the restoreArray to itself without the last instance of canvas, i.e. without the last drawing
      contextRef.current.putImageData(restoreArray[index - 1], 0, 0); 
      // displays all drawings except for the last one on the canvas. 
      setIndex(index - 1);
    }
  }

  const toggleLineMode = () => {
    if (eraseMode) {
      setEraseMode(false);
      contextRef.current.strokeStyle = brushColor; 
      // if eraseMode was on, sets it to off and sets the brush color to the previous one
    }
    if (rectangleMode) setRectangleMode(false);
    if (circleMode) setCircleMode(false);
    setLineMode(!lineMode);
  }

  const drawLine = (event) => {
    const { offsetX, offsetY } = event.nativeEvent; // current mouse position
    const { x, y } = startPoint;
    contextRef.current.beginPath(); // defines a new path
    contextRef.current.moveTo(x, y); // defines a start point
    contextRef.current.lineTo(offsetX, offsetY); // defines an end point
    contextRef.current.stroke(); // executes line drawing
  }

  const toggleRectangleMode = () => {
    if (eraseMode) {
      setEraseMode(false);
      contextRef.current.strokeStyle = brushColor;
      // if eraseMode was on, sets it to off and sets the brush color to the previous one
    }
    if (lineMode) setLineMode(false);
    if (circleMode) setCircleMode(false);
    setRectangleMode(!rectangleMode);
  }

  const drawRectangle = (event) => {
    const { offsetX, offsetY } = event.nativeEvent; // current mouse position
    const { x, y } = startPoint;
    contextRef.current.strokeRect(offsetX, offsetY, x - offsetX, y - offsetY);
  }

  const toggleCircleMode = () => {
    if (eraseMode) {
      setEraseMode(false);
      contextRef.current.strokeStyle = brushColor;
      // if eraseMode was on, sets it to off and sets the brush color to the previous one
    }
    if (lineMode) setLineMode(false);
    if (rectangleMode) setRectangleMode(false);
    setCircleMode(!circleMode);
  }

  const drawCircle = () => {

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
        rectangleMode={rectangleMode}
        toggleRectangleMode={toggleRectangleMode}
        circleMode={circleMode}
        toggleCircleMode={toggleCircleMode}
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
