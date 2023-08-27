import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Dashboard.css'
import CompletedLessons from "../../components/Dashboard/CompletedLessons";
import NextLessonCard from "../../components/Dashboard/NextLessonCard";
import CurrentLessonCard from "../../components/Dashboard/CurrentLessonCard";
import GrowingTree from "../../components/Dashboard/GrowingTree";
import Syllabus from "../../components/Dashboard/Syllabus";

// const API = process.env.REACT_APP_API_URL;
// To be determined

export default function Dashboard() {

  const [user, setUser] = useState({})
  const [allLessons, setAllLessons] = useState([]);
//   const { id } = useParams();

  // useEffect(() => {
  //   axios.get(`${API}/${user.username}/lessons/`)
  //     .then((res) => {
  //       setAllLessons(res.data)
  //     })
  //     .catch((e) => console.warn('catch', e))
  // }, [])

  return (
    <main className="section">

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="title">Dashboard</div>
          </div>
        </div>
      </div>
      
      <div className="columns">

        <div className="column">
          <div className="box">
            <div className="title">Welcome to your art journey!</div>
            <div className="level">
              <div className="level-item">
                  <div className="title">Profile Pic</div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="title">Username</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GrowingTree/>
        
      </div>
      
      <div className="columns is-multiline">

        <CurrentLessonCard allLessons={allLessons}/>

        <NextLessonCard allLessons={allLessons}/>

        <Syllabus allLessons={allLessons}/>

      </div>
    </main>
  )
}