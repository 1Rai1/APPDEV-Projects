import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Games from './Components/Games'
import NotFound from './Components/NotFound'
import Game from './Components/Game'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is my React Page</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/games">Games</Link></li>   
         
      </ul>
    </nav>
     {/**This are the routes for the application */}
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/games"> 
        <Route index element={<Games />}/>
        <Route path=':gameId' element={<Game/>}/>
      
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
