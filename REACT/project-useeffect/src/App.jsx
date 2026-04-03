import React, { use, useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  
  const changes = ()=>{
    setnum(num+1)
  }
  const changes2 = ()=>{
    setnum(num+10)
  }

  useEffect(function(){
    console.log('running')
  },[num])

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
       
      }}
      onMouseEnter={()=>{
         setnum2(num2+10)
      }}
      >click</button>
    </div>
  )
}

export default App
