import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'
import './LessonInPath.css'

export default function LessonInPath({ lesson }) {

  return (
    <div className="level pb-5"> 
      
        <button 
          className="pushable"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"><BsStar height={300}/></span>
        </button>
      <Link to={`/lesson/${lesson.id}`} >
      </Link>

    </div>
  )
}
