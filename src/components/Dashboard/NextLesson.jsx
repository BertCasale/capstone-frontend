import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function NextLesson({ allLessons, client }) {

  const [nextLesson, setNextLesson] = useState({
    title: 'Lines Lesson', 
    description: 'Description for Lines Lesson', 
    id: 1, 
    preview: 'lesson preview image'
  });

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
            <p>{nextLesson.preview}</p>
          </figure>
          <p>{nextLesson.description}</p>
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
