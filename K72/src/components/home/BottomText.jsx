import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../../pages/Project'
import Agence from '../../pages/Agence'

const BottomText = () => {
  return (
    <div className='flex gap-3 lg:gap-5 leading-[6vw] pb-2'>
      <Link className='text-[6vw] font-[font2] uppercase text-white border-3 hover:text-[#D3FD50] border-white hover:border-[#D3FD50] rounded-full px-2 pt-1 lg:px-8 lg:pt-2' to='/Project '>Projects</Link>
      <Link className='text-[6vw] font-[font2] uppercase text-white border-3 hover:text-[#D3FD50] border-white  hover:border-[#D3FD50] rounded-full px-2 lg:px-8 pt-1 lg:pt-2' to='/Agence'>Agence</Link>
    </div>
  )
}

export default BottomText
