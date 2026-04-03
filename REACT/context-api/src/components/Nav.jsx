import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { Postcontext } from './Themecontext'

const Nav = () => {

   const [Theme] = useContext(Postcontext)

  return (
    <div  className={Theme}>
      <h1>
       Ravi
      </h1>
     <Nav2/>
    </div>
  )
}

export default Nav
