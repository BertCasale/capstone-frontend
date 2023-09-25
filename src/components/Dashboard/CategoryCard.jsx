import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"
import LessonInPath from "./LessonInPath";

export default function CategoryCard({ category }) {

  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div className="a">
      <div className="card" aria-hidden={selected ? "false" : "true"}>

        <header
          className="card-header is-flex is-align-items-center is-justify-content-center"
          style={{ cursor: "pointer" }}
          onClick={toggleSelected}
        >
          {/* Category Icon */}
          <figure className="image level-item is-24x24">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon" />
          </figure>

          <p className="p-4 has-text-weight-medium is-size-5">{category.title}</p>

          {selected ? <FaMinus/> : <FaPlus />}
          
        </header>

        <div 
          className="card-content" 
          style={{
            maxHeight: selected ? 1000 : 0,
            padding: selected ? null : 0,
            overflow: "hidden",
            transition: "padding 250ms ease",
          }}
        >
          <div className="content accordion-content is-flex is-flex-direction-column">
            {
              category.lessons.map((lesson) => {
                return <LessonInPath key={lesson.id} lesson={lesson} />
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}
