import { Link } from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'
import './LessonInPath.css'
import preview from "../../assets/images/Preview_Lines.png"

export default function LessonInPath({ lesson, selectedLesson, handleLessonSelect }) {

  return (
    <div className="level pb-5"> 
      
        <button 
          className="pushable"
          onClick={() => handleLessonSelect(lesson.lessons2_id)}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            {selectedLesson === lesson.lessons2_id ? <BsStarFill size={30}/> : <BsStar size={30} />}
          </span>
        </button>

        {selectedLesson === lesson.lessons2_id ? 
          <div className='popup'>
            <span className={`popupcontent ${selectedLesson === lesson.lessons2_id ? 'show': ''}`}>
              <img className="pop-image" src={preview} alt="lesson preview image" />
              <Link to={`/lesson/${lesson.lessons2_id}`} >
                <button className='pushable'>
                  <span className="front-pop">Start Lesson</span>    
                </button>
              </Link>
            </span>
          </div> 
        : null}
        
    </div>
  )
}
