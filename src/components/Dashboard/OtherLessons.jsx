import { Link } from "react-router-dom";
import React, {useState} from "react";
import LessonInModule from "./LessonInModule";

export default function OtherLessons({ allLessons, client }) {

  const [otherLessons, setOtherLessons] = useState([
    {title: 'Shades Lesson', description: 'Description for Shades Lesson', id: 1}, 
    {title: 'Colors Lesson', description: 'Description for Colors Lesson', id: 2}
  ]);


  // Filters through all lessons to set other lessons to the ones that share the same category as the suggested next, and have not been completed
  // function lessonsInSameCategory() {
  //   setOtherLessons(
  //     allLessons.filter(lesson => lesson.category === nextLesson.category && 
  //       lesson.completionStatus === false)
  //   )
  // }

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
            otherLessons.map((otherLesson) => {
              return <LessonInModule key={otherLesson.id} otherLesson={otherLesson} />
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






{/* <div className="card-content">

  <div className="media">
    <div className="media-left">
      module icon
      <figure className="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon"/>
      </figure>
    </div>
    <div className="media-content">
      <p className="title is-4">{nextLesson.title}</p>
      <p className="subtitle is-6">{nextLesson.module}</p>
    </div>
  </div>

  <div className="content">
    {nextLesson.description}
  </div>

</div>

<footer className="card-footer">
  <Link to={`/lesson/${nextLesson.title}`} className="card-footer-item">
    <button className="button is-rounded is-success">
      <span className="has-text-weight-bold">Start Lesson</span>
    </button>
  </Link>
</footer> */}