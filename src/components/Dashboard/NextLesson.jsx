import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function NextLesson({ allLessons }) {

  const [nextLesson, setNextLesson] = useState({});


  // Sets next lesson to be the one next in sequence
  // function getNextLesson() {
  //   setNextLesson(allLessons[0])
  // }

  useEffect(() => {
    setNextLesson(allLessons[0])
  }, [])

  return (
    <div className="column is-half">

      <div className="card">
      
        <header className="card-header">
          <p className="card-header-title">
            Your Next Lesson
          </p>
        </header>

        <div className="card-image ">
          {/* preview image for next lesson */}
          <figure className="image is-3by1 ">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt={nextLesson.preview}/>
          </figure>
        </div>

        <div className="card-content">

          <div className="media">
            <div className="media-left">
              {/* category icon */}
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Category Icon"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{nextLesson.title}</p>
              <p className="subtitle is-6">{nextLesson.category}</p>
            </div>
          </div>

          <div className="content">
            {nextLesson.description}
          </div>

        </div>

        <footer className="card-footer">
          <Link to={`/lesson/${nextLesson.id}`} className="card-footer-item">
            <button className="button is-rounded is-success">
              <span className="has-text-weight-bold">Start Lesson</span>
            </button>
          </Link>
        </footer>

      </div>

    </div>
  )
}