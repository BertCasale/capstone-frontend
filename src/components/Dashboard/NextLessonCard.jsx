

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
    <div>

    </div>
  )
}