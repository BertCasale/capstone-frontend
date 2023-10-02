import LessonInPath from "./LessonInPath";
import { useState } from "react";


export default function LearningPath({ allLessons, nextLesson, setNextLesson }) {

  const [selectedLesson, setSelectedLesson] = useState(nextLesson.lessons2_id);

  const handleLessonSelect = (id) => {
    setSelectedLesson(id);
    setNextLesson(allLessons[id - 1]);
  }

  return (
    <div className="columns is-centered">

      <div className="column is-two-thirds">

        <div className="section has-background-white is-flex is-flex-direction-column is-align-items-center">

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

