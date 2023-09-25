import LessonInCategory from "./LessonInCategory";

export default function LearningPath({ allLessons }) {

  return (
    <div className="columns is-centered">

      <div className="column is-two-thirds">

        <div className="section has-background-white is-flex is-flex-direction-column is-align-items-center">

          <div className="pt-5">
            {
              allLessons.map((lesson) => {
                return <LessonInCategory key={lesson.id} lesson={lesson} />
              })
            }
          </div>

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