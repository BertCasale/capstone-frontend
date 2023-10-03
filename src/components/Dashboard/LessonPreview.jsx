import preview from "../../assets/images/Preview_Lines.png"

export default function LessonPreview({ nextLesson }) {
  return (
    <div className="columns is-centered pt-1">
      <div className="column is-full">
        <div className="box">
          <img className="pop-image" src={preview} alt="lesson preview image" />
        </div>
      </div>
    </div>
  )
}
