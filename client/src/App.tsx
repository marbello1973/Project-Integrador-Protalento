
import './App.css'
import { Routes, Route, useLocation} from 'react-router-dom'
import Home from './views/home/Home'
import { About } from './views/about/About'
import Landing from './views/landing/Landing'
import Navbar from './views/navbar/Navbar'
import Tasks from './views/tasks/Tasks'

function App() {
  const location = useLocation()
  return (
    <div>  
      {location.pathname !== '/' && <Navbar />}
        <Routes>
          <Route path='/' element={<Landing />} />        
          <Route path='/home' element={<Home />} />        
          <Route path='/about' element={<About />} />        
          <Route path='/task' element={<Tasks />} />        
        </Routes>
    </div>   
  )  
}

export default App
