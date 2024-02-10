import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EventPage from './pages/EventPage'
import Schedule from './pages/Schedule'
import About from './pages/About'


 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/events" element={<EventPage />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
   
    </div>
  )
}

export default App
