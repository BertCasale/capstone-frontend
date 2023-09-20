import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Dashboard.css'
import NextLesson from "../../components/Dashboard/NextLesson";
import OtherLessons from "../../components/Dashboard/OtherLessons";
import GrowingTree from "../../components/Dashboard/GrowingTree";
import Syllabus from "../../components/Dashboard/Syllabus";

// const API = process.env.REACT_APP_API_URL;
// To be determined

export default function Dashboard({userName}) {

  const [client, setClient] = useState({})
  const [allLessons, setAllLessons] = useState([]);
//   const { id } = useParams();

  // useEffect(() => {
  //   axios.get(`${API}/${client.username}/lessons/`)
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
                  <div className="title">Username:{userName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GrowingTree/>
        
      </div>
      
      <div className="columns is-multiline">

        <NextLesson allLessons={allLessons} client={client}/>

        <OtherLessons allLessons={allLessons} client={client}/>

        <Syllabus allLessons={allLessons} client={client}/>

      </div>
    </main>
  )
}