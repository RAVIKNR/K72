import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(67)

  const oni = () => {
    setA(prev=>prev+2)
    setA(prev=>prev+2)
    setA(prev=>prev+2)
  }

  // const oni = () => {
  //   setA(prev=>({...prev, user: 'michael'}))
  // }



  return (
    <div>
      <h1>{a}</h1>
      <button onClick={oni}>Change User</button>
    </div>
  )

}
export default App
