import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between bg-purple-950 px-8 py-2 items-center'>
      <h1 className='text-6xl bg-pink-800 px-3 rounded-2xl'>Ravi</h1>
      <div className='flex gap-9 text-lg underline'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Product'>Products</Link>
        <Link to='/Courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Nav
