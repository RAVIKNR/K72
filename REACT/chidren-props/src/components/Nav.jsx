import React from 'react'
import Nav2 from './Nav2'

const Nav = (props) => {

    console.log(props)
  return (
    <div  className='flex'>
      <h1>
        {props.children[0]}
      </h1>
     <Nav2/>
    </div>
  )
}

export default Nav
