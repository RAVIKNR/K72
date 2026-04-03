import React from 'react'
import Video from '../components/home/Video'
import TopText from '../components/home/TopText'
import BottomText from '../components/home/BottomText'
import Navbar from '../components/Navigation/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-screen h-screen fixed'>
       <Video/>
      </div>
      <div className='relative h-screen w-screen flex flex-col justify-between items-center'>  
        <TopText/>
        <BottomText/> 
      </div>
    </div>
  )
}

export default Home
