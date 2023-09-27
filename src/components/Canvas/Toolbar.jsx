

export default function Toolbar({ clearCanvas, handleColorChange, handleLineWidthChange, toggleEraseMode, eraseMode, undoAction, lineMode, toggleLineMode, rectangleMode, toggleRectangleMode, circleMode, toggleCircleMode, fillMode, toggleFillMode }) {

  return (
    <section className="toolbar">

      <div className="row">

        <label className="title">Shapes</label>
        <ul className="options">

          <li className="option">
            <button onClick={toggleRectangleMode}>
              Rectangle Mode: {rectangleMode ? 'On': 'Off'}
            </button>
            <span>Rectangle</span>
          </li>

          <li className="option">
            <button onClick={toggleCircleMode}>
              Circle Mode: {circleMode ? 'On': 'Off'}
            </button>
            <span>Circle</span>
          </li>

          <li className="option">
            <button onClick={toggleLineMode}>
              Line Mode: {lineMode ? 'On': 'Off'}
            </button>
            <span>Line</span>
          </li>

          <label htmlFor="stroke">Color:</label>
          <li>
            <input 
              name="stroke" 
              id="stroke" 
              type={"color"} 
              onChange={(e) => handleColorChange(e)}
            />
          </li>

          <label htmlFor="lineWidth">Line Width:</label>
          <li>
            <input 
              name="lineWidth" 
              id="lineWidth" 
              type="range" 
              defaultValue="5" 
              onChange={handleLineWidthChange} 
              max="50" 
              min="1"
            />
          </li>

          <li>
            <button onClick={toggleEraseMode}>
              Erase Mode: {eraseMode ? 'On': 'Off'}
            </button>
          </li>

          <li>
            <button onClick={toggleFillMode}>
              Fill Color: {fillMode ? 'On': 'Off'}
            </button>
          </li>

          <li><button onClick={() => undoAction()}>Undo</button></li>

          <li><button onClick={clearCanvas}>Clear</button></li>

        </ul>

      </div>

    </section>
  )
}
