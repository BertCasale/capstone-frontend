import React, {useState} from "react";

export default function CurrentLessonCard({ allLessons }) {

  const [currentLesson, setCurrentLesson] = useState({});

  // Filters through all lessons to set current lesson to the one in progress
  function getCurrentLesson() {
    setCurrentLesson(     
      allLessons.filter(lesson => lesson.completionStatus === 'in progress')
    )
  }

  return (
    <div className="column is-half">
      <div className="panel">
        <p className="panel-heading">
          Current Lesson
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
