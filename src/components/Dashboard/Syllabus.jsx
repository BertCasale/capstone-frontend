import { useState } from "react"

export default function Syllabus({ allLessons, client }) {

  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected(!selected);
  }
  
  return (
    <div className="column is-full">
      <div className="panel">
        <p className="panel-heading">
          Collapsible Syllabus
        </p>
        <div className="panel-block">

        </div>
      </div>
    </div>
  )
}