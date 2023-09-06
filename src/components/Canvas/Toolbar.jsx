

export default function Toolbar({ clearCanvas }) {

  return (
    <div>
      <aside className="menu">
        <ul className="menu-list">
          <li><button onClick={clearCanvas}>Clear</button></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    </div>
  )
}
