import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import About from './pages/about'
import Contact from './pages/Contact'
import Updates from './pages/Updates'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </Router>
  )
}

export default App
