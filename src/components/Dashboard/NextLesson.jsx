import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function NextLesson({ allLessons, client }) {

  const [nextLesson, setNextLesson] = useState({
    title: 'Lines Lesson', 
    description: 'Description for Lines Lesson', 
    id: 1, 
    preview: 'lesson preview image',
    module: 'Elements of Art'
  });

  // Sets next lesson to be the one next in sequence
  // function getNextLesson() {
  //   setCurrentLesson(     
  //     ??
  //   )
  // }

  return (
    <div className="column is-half">

      <div className="card">
      
        <header className="card-header">
          <p className="card-header-title">
            Your Next Lesson
          </p>
        </header>

        <div className="card-image">
          {/* preview image for next lesson */}
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt={nextLesson.preview}/>
          </figure>
        </div>

        <div className="card-content">

          <div className="media">
            <div className="media-left">
              {/* module icon */}
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
            <button className="button is-rounded is-success"><span className="is-bold">Start Lesson</span></button>
          </Link>
        </footer>

      </div>

    </div>
  )
}

{/* <div className="panel">
  <p className="panel-heading">
    Suggested Next Lesson
  </p>
  <div className="panel-block">
    <figure className="image is-16x9">
      <p>{nextLesson.preview}</p>
    </figure>
    <p>{nextLesson.description}</p>
    <div className="has-text-centered">
      <Link to={`/lesson/${nextLesson.title}`}>
        <button className="button is-rounded is-success">Start Lesson</button>
      </Link>
    </div>
  </div>
</div> */}