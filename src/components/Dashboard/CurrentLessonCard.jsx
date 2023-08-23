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
    <div class="column">
      <p>Current lesson card</p>
    </div>
  )
}
