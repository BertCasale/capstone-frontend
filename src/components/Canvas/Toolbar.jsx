

export default function Toolbar({ clearCanvas, toggleColor, toggleLineWidth, eraseMode }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">
          <label htmlFor="stroke">Color Stroke</label>
          <li><input name="stroke" type="color" onChange={toggleColor}></input></li>
          <label htmlFor="lineWidth">Line Width</label>
          <li><input name="lineWidth" type="number" defaultValue="5" onChange={toggleLineWidth} max="10" min="1"></input></li>
          <li><button onClick={eraseMode}>Erase</button></li>
          <li><button onClick={clearCanvas}>Clear</button></li>
        </ul>
      </aside>
    </div>
  )
}
