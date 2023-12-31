import React from 'react'
import { Link } from 'react-router-dom'

export default function SyllabusLesson({ lesson }) {

  return (
    <div className="level"> 

      <div className="level-left">
        {/* <figure className="image level-item is-24x24">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon"/>
        </figure>         */}
        <h6 className="level-item">{lesson.title}</h6>
      </div>
      
      <div className="level-right">
        <Link to={`/lesson/${lesson.id}`}>
          <button className="button is-rounded is-success">
            <span className="has-text-weight-bold">Start Lesson</span>
          </button>
        </Link>
      </div>

    </div>
  )
}