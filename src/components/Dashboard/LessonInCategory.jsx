import React from 'react'
import { Link } from 'react-router-dom'

export default function LessonInCategory({ otherLesson }) {
  return (
    <div className="level"> 

      <div className="level-left">
        {/* module icon */}
        <figure className="image level-item is-24x24">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon"/>
        </figure>        
        <h6 className="level-item">{otherLesson.title}</h6>
        {/* <p className="level-item">{otherLesson.description}</p> */}
      </div>
      
      <div className="level-right">
        <Link to={`/lesson/${otherLesson.title}`} className="level-item">
          <button className="button is-rounded is-success">
            <span className="has-text-weight-bold">Start Lesson</span>
          </button>
        </Link>
      </div>

    </div>
  )
}