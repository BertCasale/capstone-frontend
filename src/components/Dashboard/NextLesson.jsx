import React, {useState} from "react";

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
            <button className="button is-rounded is-orange">Start Lesson</button>
          </div>
        </div>
      </div>
    </div>
  )
}
