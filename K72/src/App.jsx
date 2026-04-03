import React, { useRef } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import FullscreenNav from './components/Navigation/FullscreenNav'



const App = () => {







  return (
    <div className=''>

      <FullscreenNav/>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Agence' element={<Agence/>}/>
        <Route path='/Project' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
