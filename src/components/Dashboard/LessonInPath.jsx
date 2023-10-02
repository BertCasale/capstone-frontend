import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'
import './LessonInPath.css'

export default function LessonInPath({ lesson }) {

  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div className="level pb-5"> 
      
        <button 
          className="pushable"
          onClick={toggleSelected}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            {selected ? <BsStarFill/> : <BsStar height={300}/>}
          </span>
        </button>

        {selected ? 
          <div className='popup'>
            <span className={`popuptext ${selected ? 'show': ''}`}>
              <Link to={`/lesson/${lesson.lessons2_id}`} >
                <button className='button is-rounded is-link'>
                  <p className='has-text-weight-bold'>Start Lesson</p>
                </button>
              </Link>
            </span>
          </div> 
        : null}
        
    </div>
  )
}
