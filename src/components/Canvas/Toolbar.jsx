import './Toolbar.css'


export default function Toolbar({ clearCanvas, handleColorChange, handleLineWidthChange, toggleEraseMode, eraseMode, undoAction, lineMode, toggleLineMode, rectangleMode, toggleRectangleMode, circleMode, toggleCircleMode, fillMode, toggleFillMode }) {

  return (
    <section className="toolbar">

      <div className="row">

        <label className="label-title">Shapes</label>
        <ul className="options">

          <li className="option tool" id="rectangle">
            {/* <button onClick={toggleRectangleMode}>
              Rectangle Mode: {rectangleMode ? 'On': 'Off'}
            </button> */}
            <span>Rectangle</span>
          </li>

          <li className="option tool" id="circle">
            {/* <button onClick={toggleCircleMode}>
              Circle Mode: {circleMode ? 'On': 'Off'}
            </button> */}
            <span>Circle</span>
          </li>

          <li className="option tool" id="line">
            {/* <button onClick={toggleLineMode}>
              Line Mode: {lineMode ? 'On': 'Off'}
            </button> */}
            <span>Line</span>
          </li>

          <li className="option">
            <input type="checkbox" id="fill-color"/>
            <label htmlFor="fill-color">Fill color</label>
            {/* <button onClick={toggleFillMode}>
              Fill Color: {fillMode ? 'On': 'Off'}
            </button> */}
          </li>

        </ul>

      </div>

      <div className="row">

        <label className="label-title">Options</label>
        <ul className="options">
          
          <li className='option'>
            <label htmlFor="color-picker">Color</label>
            <input 
              name="color-picker" 
              id="color-picker" 
              type={"color"} 
              onChange={(e) => handleColorChange(e)}
            />
          </li>

          <li className='option tool' id='eraser'>
            <span>Eraser</span>
            {/* <button onClick={toggleEraseMode}>
              Erase Mode: {eraseMode ? 'On': 'Off'}
            </button> */}
          </li>

          <li className='option'>
            <input  
              id="line-width" 
              type="range" 
              defaultValue="5" 
              onChange={handleLineWidthChange} 
              max="30" 
              min="1"
            />
          </li>

        </ul>

      </div>

      <div className="row buttons">

        <button className="undo-action" onClick={() => undoAction()}>Undo</button>

        <button className="clear-canvas" onClick={clearCanvas}>Clear</button>

        {/* <button className="save-img">Save as Image</button> */}

      </div>

    </section>
  )
}
