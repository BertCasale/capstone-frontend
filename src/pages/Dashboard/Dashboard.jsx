import React, {useState, useEffect} from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import './Dashboard.css'
import NextLesson from "../../components/Dashboard/NextLesson";
import OtherLessons from "../../components/Dashboard/OtherLessons";
import GrowingTree from "../../components/Dashboard/GrowingTree";
import Syllabus from "../../components/Dashboard/Syllabus";
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function Dashboard() {

  // const [client, setClient] = useState({})
  const [allLessons, setAllLessons] = useState([]);
  const [nextLesson, setNextLesson] = useState({})
  // const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessons/1`)
      .then((res) => {
        setNextLesson(res.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])

  useEffect(() => {
    axios.get(`${API}/lessons`)
      .then((res) => {
        setAllLessons(res.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])

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

        <NextLesson nextLesson={nextLesson} />

        <OtherLessons allLessons={allLessons} />

        <Syllabus allLessons={allLessons} />

      </div>
    </main>
  )
}