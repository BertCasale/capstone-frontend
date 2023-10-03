

export default function NextLesson({ nextLesson }) {

  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">

        <div className="box">
        
          <p className="title is-4">{nextLesson.title} Lesson</p>

          <p className="subtitle is-6">{nextLesson.description}</p>

        </div> 

      </div>
    </div>
  )
}