import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../../components/Lesson/Section";

export default function Lesson() {
    //create state for the lesson and all sections in the lesson
    const [lesson, setLesson] = useState();
    const [lessonSections, setLessonSections] = useState();


    return (<div className="lesson">

        <div className="materials"> 
            <h3><strong>Materials to Practice:</strong></h3>
            <p>Pen or Pencil, Paper{/* display the materials listed in the database  */}</p>
        </div>

        <Section lessonSections={lessonSections}/>  
    </div>);
}