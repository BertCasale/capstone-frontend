

export default function Toolbar({ clearCanvas }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">
          <label for="stroke">Color Stroke</label>
          <li><input name="stroke" type="color"></input></li>
          <label for="lineWidth">Line Width</label>
          <li><input name="lineWidth" type="number" value="5"></input></li>
          <li><button onClick={clearCanvas}>Clear</button></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </div>
  )
}
