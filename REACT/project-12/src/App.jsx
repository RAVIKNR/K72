import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Woman from './pages/Woman'
import Courses from './pages/Courses'
import Coursedetail from './pages/Coursedetail'
import Nav2 from './components/Nav2'


const App = () => {
  return (
    <div className='bg-black h-screen w-screen text-white '>
      <Nav/>
      <Nav2/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/Product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Woman/>}/>
       </Route>
       <Route path='/Courses' element={<Courses/>}/>
       <Route path='/Courses/:id' element={<Coursedetail/>}/>
    </Routes>

    <Footer />

    </div>
  )
}

export default App
