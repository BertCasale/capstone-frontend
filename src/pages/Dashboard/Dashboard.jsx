import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Dashboard.css'
import CompletedLessons from "../../components/Dashboard/CompletedLessons";
import NextLessonCard from "../../components/Dashboard/NextLessonCard";
import CurrentLessonCard from "../../components/Dashboard/CurrentLessonCard";

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
    <div class="section">
      {/* <div class="columns">
        <div class="column">
          <div class="level">
            <div class="level-left">
              <div class="title">Dashboard</div>
            </div>
          </div>
        </div>
      

        <CurrentLessonCard allLessons={allLessons} />
        <NextLessonCard allLessons={allLessons} />
        <CompletedLessons allLessons={allLessons} />
      </div> */}
      <main>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="title">Dashboard</div>
            </div>
          </div>
        </div>
        
        <div class="columns is-multiline">

          <div class="column">
            <div class="box">
              <div class="title">Welcome to your art journey!</div>
              <div class="level">
                <div class="level-item">
                    <div class="title">Profile Pic</div>
                </div>
                <div class="level-item">
                  <div class="">
                    <div class="title">Username</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="box">
              <div class="title">Growing Tree Animation</div>
            </div>
          </div>
          
        </div>
        
        <div class="columns is-multiline">
          
          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
                Current Lesson
              </p>
              <div class="panel-block">
                <figure class="image is-16x9">
                  <img src="https://placehold.it/1280x720"/>
                </figure>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="panel">
              <p class="panel-heading">
                Next Lesson
              </p>
              <div class="panel-block">
                <figure class="image is-16x9">
                  <img src="https://placehold.it/1280x720"/>
                </figure>
              </div>
            </div>
          </div>

          <div class="column is-full">
            <div class="panel">
              <p class="panel-heading">
                Collapsible Syllabus
              </p>
              <div class="panel-block">
                <figure class="image is-16x9">
                  <img src="https://placehold.it/1280x720"/>
                </figure>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}