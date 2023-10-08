

export default function NextLesson({ nextLesson }) {

  return (
    <div className="columns is-centered pt-1">
      <div className="column is-two-thirds">

        <div className="box">
        
          <p className="title is-4 has-text-centered">{/*{nextLesson.title} Lesson*/}Your Learning Path</p>

          {/* <p className="subtitle is-6">{nextLesson.description}</p> */}

        </div> 

      </div>
    </div>
  )
}