import { Route, Routes, useNavigate } from 'react-router-dom'
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
import UserProfile from './components/Auth/UserProfile'
import Hamster from './pages/Hamster'
// import { db } from './services/config/firebase' // setup for firestore DB - may need to move this
// import { getDocs, collection} from 'firebase/firestore' // retrieving data to firestore DB
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuthState from './services/config/useAuthState'
import axios from 'axios'


const API = import.meta.env.VITE_API_URL;


function App() {

  const [user, setUser] = useState(null)
  const authUser = useAthState();
  const [usersList, setUsersList] = useState([]);
  const userCollectionRef = collection(db, "users")
  useEffect(() => {
     const getUserList = async () => {
      //read db data
      try{
      const data = await getDocs(userCollectionRef)
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setUsersList(filteredData);
      console.log(usersList);
      }catch(err) {
        console.error(err);
      }
  };
  getUserList()
  },[]);


  //console log of created users on firestore db
  // console.log(authUser.auth.currentUser.uid);
  // console.log(authUser.auth.currentUser.email);



  console.log(`email: ${user}`);
  console.log(`userID: ${userId}`);
  console.log(`userName: ${userName}`);
  console.log(clientList);
   

  return (
    <div className="App">
      <NavBar 
      clientList={clientList} 
      authUser={authUser}
      user={user} 
      setUser={setUser} 
      userId={userId} 
      setUserId={setUserId}
      userName={userName}
      setUserName={setUserName}
      userEmail={userEmail}
      setUserEmail={setUserEmail}
      userProfilePicture={userProfilePicture}
      setUserProfilePicture={setUserProfilePicture}
      userRole={userRole}
      setUserRole={setUserRole}
      />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/:userName/dashboard' element={<Dashboard userName={userName}/>} />
        {/* <Route path='/client/dashboard/:id' element={<Dashboard/>} /> */}
        <Route path='/lesson/:lesson_title' element={<Lesson/>} />
        <Route path='/client/:client_id/lesson/:lesson_title' element={<Lesson/>} />
        {/* Is having two path params the best way around this? Could we use section_id alone? */}
        <Route path='/:userName/profile' element={<UserProfile/>} />
        {/* Below test route for working on profile page before backend username params*/}
        <Route path='/:id/sandbox' element={<Sandbox/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/hamster' element={<Hamster/>} />
      </Routes>
    </div>
  )
}

export default App
