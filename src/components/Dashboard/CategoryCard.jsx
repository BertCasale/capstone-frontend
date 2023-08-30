import { useState } from "react";

export default function CategoryCard({ category }) {

  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div className="a">
      <div className="card" aria-hidden={selected ? "false" : "true"}>

        <header
          className="card-header is-flex is-align-items-center"
          style={{ cursor: "pointer" }}
          onClick={toggleSelected}
        >
          {/* Category Icon */}
          <figure className="image level-item is-24x24">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon" />
          </figure>

          <p className="p-4 has-text-weight-medium is-size-5">{category.title}</p>
        </header>

      </div>
    </div>
  )
}
