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
import Hamster from './pages/Hamster'
// import { db } from './services/config/firebase' //---Comment setup for firestore DB - may need to move this
// import { getDocs, collection} from 'firebase/firestore' //---Comment retrieving data to firestore DB
import { useEffect, useState } from 'react'
import useAthState from './services/config/useAuthState'
import axios from 'axios'


const API = import.meta.env.VITE_REACT_APP_API_URL;

function App() {

  const [user, setUser] = useState(null)
  const authUser = useAthState();
  const [clientList, setClientList] = useState([])

useEffect(() => {
    axios
    .get(`${API}/clients`)
    .then((resp) => {
      setClientList( resp.data)
    })
},[])


  // const [usersList, setUsersList] = useState([]);
  // const userCollectionRef = collection(db, "users")
  // useEffect(() => {
  //    const getUserList = async () => {
  //     //read db data
  //     try{
  //     const data = await getDocs(userCollectionRef)
  //       const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  //     setUsersList(filteredData);
  //     console.log(usersList);
  //     }catch(err) {
  //       console.error(err);
  //     }
  // };
  // getUserList()
  // },[]);

  //console log of created users on firestore db
  // console.log(authUser.auth.currentUser.uid);
  // console.log(authUser.auth.currentUser.email);

console.log(clientList);
 

  return (
    <div className="App">
      <NavBar 
      user={user} 
      setUser={setUser} 
      authUser={authUser}
      clientList={clientList}
      />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/:username/dashboard' element={<Dashboard/>} />
        <Route path='/lesson/:lessonId' element={<Lesson/>} />
        <Route path='/:username/profile' element={<Profile/>} />
        {/* Below test route for working on profile page before backend username params*/}
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sandbox' element={<Sandbox/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/hamster' element={<Hamster/>} />
      </Routes>
    </div>
  )
}

export default App
