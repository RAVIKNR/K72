import React from 'react'
import { useContext } from 'react'
import { Postcontext } from './Themecontext'



const Button = () => {

   const [Theme,setTheme] = useContext(Postcontext)

   function click(){
    
    setTheme('Dark')
   }

  return (
    <div>
      <button onClick={
        click
      }>
        Click me
      </button>
    </div>
  )
}

export default Button
