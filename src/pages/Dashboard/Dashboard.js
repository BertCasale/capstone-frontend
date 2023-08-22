import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Dashboard.css'

const API = process.env.REACT_APP_API_URL;
// To be determined

export default function Dashboard() {
  const [user, setUser] = useState({})
  const [completedLessons, setCompletedLessons] = useState([]);
//   const [remainingLessons, setRemainingLessons] = useState([]);
  const [allLessons, setAllLessons] = useState([]);
//   const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/${user.username}/lessons/`)
      .then((res) => {
        setAllLessons(res.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])

  // Filters through all lessons to set completed lessons to the ones that have been completed
  function completedLessons() {
    setCompletedLessons(
        allLessons.filter(lesson => lesson.completionStatus === 'completed')
    )
  }

  return (
    <section class="dashboard">
      <section>
        <h1 class="greeting">Welcome to your journey into art {user.username}!</h1>
        <img class="profile-pic" src="profile_pic.jpg" alt="profile pic" width="200" height="200"/>
      </section>
      <CurrentLessonCard allLessons={allLessons} />
      <NextLessons allLessons={allLessons} />
    </section>
  )
}