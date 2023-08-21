import React, {useState} from "react";
import axios from "axios";

export default function Dashboard() {
    const [currentLesson, setCurrentLesson] = useState({});
    const [completedLessons, setCompletedLessons] = useState([]);
    const [remainingLessons, setRemainingLessons] = useState([]);
}