

export default function Toolbar({ clearCanvas, toggleColor, toggleLineWidth, toggleEraseMode, brushColor }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">
          <label htmlFor="stroke">Color Stroke</label>
          <li><input name="stroke" type={"color"} onChange={(e) => toggleColor(e)}></input></li>
          <label htmlFor="lineWidth">Line Width</label>
          <li><input name="lineWidth" type="number" defaultValue="5" onChange={toggleLineWidth} max="10" min="1"></input></li>
          <li><button onClick={toggleEraseMode}>Erase</button></li>
          <li><button onClick={clearCanvas}>Clear</button></li>
        </ul>
      </aside>
    </div>
  )
}
