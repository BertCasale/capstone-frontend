import LessonInPath from "./LessonInPath";


export default function LearningPath({ allLessons, setNextLesson }) {

  return (
    <div className="columns is-centered">

      <div className="column is-two-thirds">

        <div className="section has-background-white is-flex is-flex-direction-column is-align-items-center">

          <div className="pt-5">
            {
              allLessons.map((lesson) => {
                return <LessonInPath key={lesson.lessons2_id} lesson={lesson} />
              })
            }
          </div>

        </div>

      </div>

    </div>
  )
}

