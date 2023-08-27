import { Route, Routes } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
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
        <Route path='/:username/dashboard' element={<Dashboard/>} />
        <Route path='/lesson/:lesson_title' element={<Lesson/>} />
        {/* Is having two path params the best way around this? Could we use section_id alone? */}
        <Route path='/:username/profile' element={<Profile/>} />
        <Route path='/sandbox' element={<Sandbox/>} />
      </Routes>
    </div>
  )
}

export default App
