
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Lesson from './pages/Lesson/Lesson'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard/:username' element={<Dashboard/>} />
        <Route path='/lesson/:lesson_id/:section_id' element={<Lesson/>} />
        {/* Is having two path params the best way around this? Could we use section_id alone? */}
        <Route path='/profile/:username' element={<Profile/>} />
        <Route path='/canvas' element={<Sandbox/>} />
      </Routes>
    </div>
  )
}

export default App
