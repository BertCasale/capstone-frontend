import LessonInPath from "./LessonInPath";
import { useEffect, useState } from "react";


export default function LearningPath({ allLessons, nextLesson, setNextLesson }) {

  const [selectedLesson, setSelectedLesson] = useState('');

  const handleLessonSelect = (id) => {
    console.log(nextLesson.lessons2_id)
    if (id === selectedLesson) {
      setSelectedLesson('');
    } else {
      setSelectedLesson(id)
      setNextLesson(allLessons[id - 1]);
    }
  }

  return (
    <div className="columns is-centered">

      <div className="column is-half">

        <div className="section has-background-white is-flex is-flex-direction-column">

          <div className="pt-5">
            {
              allLessons.map((lesson) => {
                return (
                  <LessonInPath 
                    key={lesson.lessons2_id} 
                    lesson={lesson} 
                    setNextLesson={setNextLesson} 
                    selectedLesson={selectedLesson}
                    handleLessonSelect={handleLessonSelect}
                  />
                )
              })
            }
          </div>

        </div>

      </div>

    </div>
  )
}

