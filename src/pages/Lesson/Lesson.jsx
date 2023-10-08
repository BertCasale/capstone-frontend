import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Section from "../../components/Lesson/Section";
import ProgressBar from "../../components/Lesson/ProgressBar";
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
  const [sectionIndex, setSectionIndex] = useState(0);
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

    <div className="column progress-div">
      {/* show the progress of the current lesson */}
      <ProgressBar numberOfSections={lessonSections.length} currentSection={sectionIndex + 1} lessonTitle={lesson.title}/>
    </div>
    
    <div className="column is-full section-div">
      <Section lessonSections={lessonSections} materials={lesson.materials} sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} language={language} />
    </div>
    
  </div>);
}