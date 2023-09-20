import { useState } from "react";
import LessonInCategory from "./LessonInCategory";

export default function OtherLessons({ otherLessons }) {

  return (
    <div className="column is-half">

      <div className="card">
        
        <header className="card-header">
          <p className="card-header-title">
            Other Lessons
          </p>
        </header>

        <div className="card-content">
          {
            otherLessons.map((lesson) => {
              return <LessonInCategory key={lesson.id} lesson={lesson} />
            })
          }
        </div>

      </div>

    </div>
  )
}

{/* <div className="panel">
  <p className="panel-heading">
    Module Name
  </p>
  <div className="panel-block">
    <figure className="image is-16x9">
      <img src="https://placehold.it/1280x720"/>
    </figure>
    map all other lessons within the same module/category as the suggested next lesson
    <section className="menu">
      <ul className="menu-list">
        {
          otherLessons.map((otherLesson) => {
            return <LessonInModule key={otherLesson.id} otherLesson={otherLesson} />
          })
        }
      </ul>
    </section>
  </div>
</div> */}