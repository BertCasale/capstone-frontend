import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function NextLesson({ allLessons, client }) {

  const [nextLesson, setNextLesson] = useState({});

  // Sets next lesson to be the one next in sequence
  // function getNextLesson() {
  //   setCurrentLesson(     
  //     ??
  //   )
  // }

  return (
    <div className="column is-half">
      <div className="panel">
        <p className="panel-heading">
          Suggested Next Lesson
        </p>
        <div className="panel-block">
          <figure className="image is-16x9">
            <img src="https://placehold.it/1280x720"/>
          </figure>
          <div className="has-text-centered">
            <Link to={`/lesson/${nextLesson.title}`}>
              <button className="button is-rounded is-success">Start Lesson</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
