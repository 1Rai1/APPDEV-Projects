import { useState } from 'react'
import './CSS/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Homepage';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar/>
        </div>
        <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
