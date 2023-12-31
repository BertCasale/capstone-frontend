import { Route, Routes } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Lesson from './pages/Lesson/Lesson'
import Profile from './pages/Profile/Profile'
import Sandbox from './pages/Sandbox/Sandbox'
import NotFound from './pages/NotFound/NotFound'
import SignUpPage from './pages/SignUpPage'
import { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import axios from 'axios'

const API = import.meta.env.VITE_REACT_APP_API_URL;

function App() {

//set auth variable
  // const {currentUser} = useAuth()

  const [user, setUser] = useState(null)
  const [userDetails, setUserDetails] = useState({})


  const [userName, setUserName] = useState(null)
  const [language, setLanguage] = useState(1); 

//   useEffect(()=>{
//   if(currentUser){
//     axios.get(`${API}/clients/${currentUser.uid}`)
//     .then((results)=>{
//       setUserDetails(results.data.username)
//       console.log(userDetails);
//     })
//     console.log(`user UID: ${currentUser.uid}`);

//   }else console.log(null);
// },[currentUser])

  return (
    <div className="App">
      <NavBar 
      user={user} 
      setUser={setUser} 
      // auth={auth}
      userName={userName}
      setUserName={setUserName}
      language={language}
      setLanguage={setLanguage}
      userDetails={userDetails}
      />
      <Routes>
        <Route path='/' element={<Landing language={language}/>} />
        <Route path='/dashboard' element={<Dashboard userName={userName} language={language}/>} />
        <Route path='/lesson/:lessonId' element={<Lesson language={language}/>} />
        {/* Below test route for working on profile page before backend username params*/}
        <Route path='/profile' element={<Profile userDetails={userDetails}/>} />
        <Route path='/sandbox' element={<Sandbox/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
