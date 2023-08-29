import React from 'react'
import { Link } from 'react-router-dom'

export default function LessonInModule({ otherLesson }) {
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

// {otherLesson.title} <Link to={`/lesson/${otherLesson.title}`}><button className="button is-rounded is-success">Start Lesson</button></Link>
// <p>{otherLesson.description}</p>

{/* <div className="card-content">

  <div className="media">
    <div className="media-left">
      module icon
      <figure className="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon"/>
      </figure>
    </div>
    <div className="media-content">
      <p className="title is-4">{nextLesson.title}</p>
      <p className="subtitle is-6">{nextLesson.module}</p>
    </div>
  </div>

  <div className="content">
    {nextLesson.description}
  </div>

</div>

<footer className="card-footer">
  <Link to={`/lesson/${nextLesson.title}`} className="card-footer-item">
    <button className="button is-rounded is-success">
      <span className="has-text-weight-bold">Start Lesson</span>
    </button>
  </Link>
</footer> */}