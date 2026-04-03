import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    let navigate = useNavigate()
  return (
    <div className='flex justify-between px-7 py-2 bg-purple-500'>
        <button
        onClick={()=>{
         navigate(-1)
        }}
        className='bg-pink-900 px-6 py-2 rounded-2xl'>Back</button>
     <button
     onClick={()=>{
      navigate('/')
     }}
      className='bg-pink-900 px-6 py-2 rounded-2xl'>Return to Home</button>
     <button
     onClick={()=>{
      navigate(+1)
     }}
     className='bg-pink-900 px-6 py-2 rounded-2xl'>Next</button>
    </div>
  )
}

export default Nav2
