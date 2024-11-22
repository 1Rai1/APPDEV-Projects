import { useState } from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import Game from './assets/Components/Game'
import Games from './assets/Components/Games'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import NotFound from './assets/Components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/games">Games</Link></li>   
      </ul>
    </nav>
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
