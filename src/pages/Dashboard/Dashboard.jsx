import {useState, useEffect} from "react";
import axios from "axios";
import './Dashboard.css'
import NextLesson from "../../components/Dashboard/NextLesson";
import LearningPath from "../../components/Dashboard/LearningPath";
import Syllabus from "../../components/Dashboard/Syllabus";
// import GrowingTree from "../../components/Dashboard/GrowingTree";

const API = import.meta.env.VITE_REACT_APP_API_URL;

// eslint-disable-next-line react/prop-types
export default function Dashboard({userName, language}) {

  // const [client, setClient] = useState({})
  const [allLessons, setAllLessons] = useState([]);
  const [nextLesson, setNextLesson] = useState({});
  // const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessonTopContent2/${language}`)
      .then((res) => {
        setAllLessons([res.data[0], res.data[1], res.data[2]]);
        setNextLesson(res.data[0]);
        // setNextLesson([res.data[0], res.data[1], res.data[2]].find((lesson) => lesson.completion_status == 'false'))
        // Need to access lesson completion status to determine the next lesson
      })
      .catch((e) => console.warn('catch', e))
  }, [language])

  return (
    <main className="section has-background-light">
      
      <NextLesson nextLesson={nextLesson} />

      <LearningPath allLessons={allLessons} nextLesson={nextLesson} setNextLesson={setNextLesson}/>

      <Syllabus />

    </main>
  )
}