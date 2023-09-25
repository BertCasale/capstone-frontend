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
  const [nextLesson, setNextLesson] = useState({});
  const [otherLessons, setOtherLessons] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessons`)
      .then((res) => {
        setAllLessons([res.data[0], res.data[1], res.data[2]]);
        setNextLesson(res.data[0]);
        setOtherLessons([res.data[1], res.data[2]])
      })
      .catch((e) => console.warn('catch', e))
      console.log(allLessons)
      console.log(nextLesson)
      console.log(otherLessons)
  }, [])

  return (
    <main className="section">
      
      <div className="columns is-centered">

        <div className="column is-half">
          <div className="box">
            
          </div>
        </div>

        {/* <GrowingTree/> */}
        
      </div>
      
      <div className="columns">

        {/* <NextLesson nextLesson={nextLesson} /> */}

        {/* <OtherLessons otherLessons={otherLessons} /> */}

        <Syllabus />

      </div>
    </main>
  )
}