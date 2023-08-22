import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
// To be determined

export default function Dashboard() {
  const [user, setUser] = useState({})
  const [currentLesson, setCurrentLesson] = useState({});
  const [completedLessons, setCompletedLessons] = useState([]);
//   const [remainingLessons, setRemainingLessons] = useState([]);
  const [allLessons, setAllLessons] = useState([]);
  const [nextLessons, setNextLessons] = useState([]);
//   const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessons/`)
      .then((res) => {
        setAllLessons(res.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])

  // Filters through all lessons to set current lesson to the one in progress
  function currentLessonCard() {
    setCurrentLesson(
        allLessons.filter(lesson => lesson.completionStatus === 'in progress')
    )
  }

  // Filters through all lessons to set completed lessons to the ones that have been completed
  function completedLessons() {
    setCompletedLessons(
        allLessons.filter(lesson => lesson.completionStatus === 'completed')
    )
  }

  // Filters through all lessons to set next lessons to the ones that share the same category as the current, and have not been started
  function lessonsInSameCategory() {
    setNextLessons(
        allLessons.filter(lesson => lesson.category === currentLesson.category && 
            lesson.completionStatus === 'not started')
    )
  }

  return (
    <section className="dashboard">
        <h1 className="greeting">Welcome to your journey into art {user.username}!</h1>
        <img className="profile-pic" src="profile_pic.jpg" alt="profile pic" width="200" height="200"/>
    </section>
  )
}