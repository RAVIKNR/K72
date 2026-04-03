import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <div id='nav'>
        <h1>Ravi</h1>
        <div>
        <Link className='lin' to='/'>Home</Link>
        <Link className='lin' to='/About'>About</Link>
        <Link className='lin' to='/Contact'>Contact</Link>
        </div>
      </div>
  )
}

export default Nav
