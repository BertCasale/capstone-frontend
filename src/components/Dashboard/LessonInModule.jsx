import React from 'react'
import { Link } from 'react-router-dom'

export default function LessonInModule({ otherLesson }) {
  return (
    <li className="has-text-centered"> 
      {otherLesson.title} <Link to={`/lesson/${otherLesson.title}`}><button className="button is-rounded is-success">Start Lesson</button></Link>
      <p>{otherLesson.description}</p>
    </li>
  )
}
