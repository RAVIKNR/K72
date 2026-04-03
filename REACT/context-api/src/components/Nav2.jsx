import React from 'react'
import { useContext } from 'react'
import Themecontext, { Postcontext } from './Themecontext'

const Nav2 = () => {

   const [Theme,setTheme] = useContext(Postcontext)

  return (
    <div  className={Theme}>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{Theme}</h4>
    </div>
  )
}

export default Nav2
