

export default function Toolbar({ clearCanvas, toggleColor, toggleLineWidth, contextRef }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">
          <label htmlFor="stroke">Color Stroke</label>
          <li><input name="stroke" type="color" onChange={toggleColor}></input></li>
          <label htmlFor="lineWidth">Line Width</label>
          <li><input name="lineWidth" type="number" defaultValue="5" onChange={toggleLineWidth}></input></li>
          <li><button onClick={clearCanvas}>Clear</button></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </div>
  )
}
