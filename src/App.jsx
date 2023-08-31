import { Route, Routes } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Lesson from './pages/Lesson/Lesson'
import Profile from './pages/Profile/Profile'
import Sandbox from './pages/Sandbox/Sandbox'

function App() {

  const [user, setUser] = useState(null)
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
  // console.log(usersList);


 

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/lesson/:lesson_title' element={<Lesson/>} />
        {/* Is having two path params the best way around this? Could we use section_id alone? */}
        <Route path='/:username/profile' element={<Profile/>} />
        <Route path='/sandbox' element={<Sandbox/>} />
      </Routes>
    </div>
  )
}

export default App
