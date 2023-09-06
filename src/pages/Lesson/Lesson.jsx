import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Section from "../../components/Lesson/Section";
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function Lesson() {
  //create state for the lesson and all sections in the lesson
  const [lesson, setLesson] = useState({
    id: 0,
    language_id: 0,
    category: "",
    title: "",
    duration: "",
    difficulty: "",
    description: "",
    materials: "",
    preview: ""
  });
  const [lessonSections, setLessonSections] = useState([]);
  const { lessonId } = useParams();


  useEffect(() => {
    //get the lesson for the page we are on
    axios.get(`${API}/lessons/${lessonId}`)
      .then((res) => {
        console.log(res.data)
        setLesson(res.data);
      })
      .catch((e) => console.warn(e));
      
  }, [lessonId]);

  useEffect(() => {
    //get the sections for the lesson we are on
    axios.get(`${API}/lessonSections/${lessonId}`)
      .then((res) => {
        console.log(res.data[0])
        setLessonSections(res.data)
      })
      .catch((e) => console.warn(e))
  }, [lessonId])



  return (<div className="lesson">
    <h1>{lesson.title}</h1>
    <div className="materials">
      <h3><strong>Materials to Practice:</strong></h3>
      <p>{lesson.materials}</p>
    </div>
    
    <div >
      <Section lessonSections={lessonSections} />
    </div>
    
  </div>);
}