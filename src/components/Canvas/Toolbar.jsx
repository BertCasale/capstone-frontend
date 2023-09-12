

export default function Toolbar({ clearCanvas, handleColorChange, handleLineWidthChange, toggleEraseMode, eraseMode, undoAction, lineMode, toggleLineMode }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">

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
            <button onClick={toggleLineMode}>
              Line Mode: {lineMode ? 'On': 'Off'}
            </button>
          </li>

          <li><button onClick={() => undoAction()}>Undo</button></li>

          <li><button onClick={clearCanvas}>Clear</button></li>

        </ul>
      </aside>
    </div>
  )
}
