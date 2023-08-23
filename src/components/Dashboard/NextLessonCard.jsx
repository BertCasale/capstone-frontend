

import React, {useState} from "react";

export default function NextLessonCard({ allLessons }) {

  const [nextLessons, setNextLessons] = useState([]);


  // Filters through all lessons to set next lessons to the ones that share the same category as the current, and have not been started
  function lessonsInSameCategory() {
    setNextLessons(
      allLessons.filter(lesson => lesson.category === currentLesson.category && 
        lesson.completionStatus === 'not started')
    )
  }

  return (
    <div className="column is-half">
      <div className="panel">
        <p className="panel-heading">
          Next Lesson
        </p>
        <div className="panel-block">
          <figure className="image is-16x9">
            <img src="https://placehold.it/1280x720"/>
          </figure>
        </div>
      </div>
    </div>
  )
}