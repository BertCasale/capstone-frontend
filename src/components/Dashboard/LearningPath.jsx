import LessonInPath from "./LessonInPath";
import { useEffect, useState } from "react";


export default function LearningPath({ allLessons, nextLesson, setNextLesson }) {

  const [selectedLesson, setSelectedLesson] = useState('');

  const handleLessonSelect = (id) => {
    if (id === selectedLesson) {
      setSelectedLesson('');
    } else {
      setSelectedLesson(id)
      setNextLesson(allLessons[id - 1]);
    }
    console.log(allLessons)
  }
  
  return (
    <div className="columns is-centered">

      <div className="column is-two-thirds">

        <div className="section has-background-white is-flex is-flex-direction-column box">

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

