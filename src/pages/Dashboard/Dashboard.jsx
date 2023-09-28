import {useState, useEffect} from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import './Dashboard.css'
import NextLesson from "../../components/Dashboard/NextLesson";
// import LearningPath from "../../components/Dashboard/LearningPath";
// import GrowingTree from "../../components/Dashboard/GrowingTree";
import LearningPath from "../../components/Dashboard/LearningPath";
import Syllabus from "../../components/Dashboard/Syllabus";

const API = import.meta.env.VITE_REACT_APP_API_URL;

// eslint-disable-next-line react/prop-types
export default function Dashboard({userName, language}) {

  // const [client, setClient] = useState({})
  const [allLessons, setAllLessons] = useState([]);
  const [nextLesson, setNextLesson] = useState({});
  const [otherLessons, setOtherLessons] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessonTopContent2/${language}`)
      .then((res) => {
        setAllLessons([res.data[0], res.data[1], res.data[2]]);
        setNextLesson(res.data[0]);
        // setOtherLessons([res.data[1], res.data[2]])
      })
      .catch((e) => console.warn('catch', e))
  }, [language])

  return (
    <main className="section has-background-light">
      
      <NextLesson nextLesson={nextLesson} />

      <LearningPath allLessons={allLessons}/>

      <Syllabus />

    </main>
  )
}