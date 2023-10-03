import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Section from "../../components/Lesson/Section";
import "./Lesson.css"
const API = import.meta.env.VITE_REACT_APP_API_URL;

//language from app.jsx
export default function Lesson({language}) {
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
    axios.get(`${API}/lessonTopContent2/${language}/${lessonId}`)
      .then((res) => {
        setLesson(res.data);
      })
      .catch((e) => console.warn(e));
      
  }, [lessonId, language]);

  useEffect(() => {
    //get the sections for the lesson we are on
    axios.get(`${API}/lessonSections2/${language}/${lessonId}`)
      .then((res) => {
        setLessonSections(res.data)
      })
      .catch((e) => console.warn(e))
  }, [lessonId, language])



  return (<div className="lesson columns is-multiline has-text-centered">
    <div className="content lesson-details is-centered column is-half is-offset-one-quarter">

      <h3 className="title">{lesson.title}</h3>

      <div className="materials">
        <h4>Materials to Practice:</h4>
        <p><strong>{lesson.materials}</strong></p>
      </div>

    </div>
    
    
    <div className="column is-full section-div">
      <Section lessonSections={lessonSections} />
    </div>
    
  </div>);
}