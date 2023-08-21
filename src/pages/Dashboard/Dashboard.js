import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
// To be determined

export default function Dashboard() {
  const [currentLesson, setCurrentLesson] = useState({});
  const [completedLessons, setCompletedLessons] = useState([]);
  const [remainingLessons, setRemainingLessons] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/lessons/${id}`)
      .then((res) => {
        setCurrentLesson(res.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])
}