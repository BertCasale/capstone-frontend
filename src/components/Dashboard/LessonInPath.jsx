import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'

export default function LessonInPath({ lesson }) {

  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 100); // Resets the pressed state after a short delay 
  }

  return (
    <div className="level pb-5"> 
      
        <button 
          className="pushable"
          onClick={handleButtonClick}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"><BsStar height={300}/></span>
        </button>
      <Link to={`/lesson/${lesson.id}`} >
      </Link>
      
      {/* <span className="has-text-weight-bold">Start Lesson</span> */}
      

      {/* <div className="level-left">
        
        <figure className="image level-item is-24x24">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Module Icon"/>
        </figure>        
        <h6 className="level-item">{lesson.title}</h6>
        
      </div>
      
      <div className="level-right">
        
      </div> */}

    </div>
  )
}
