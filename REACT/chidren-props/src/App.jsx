import React, { useState } from 'react'
import Nav from './components/Nav'
import Nav2 from './components/Nav2'

const App = () => {

  const [Theme, setTheme] = useState('light')

  return (
    <div>
      <Nav  Theme={Theme}>
            <h1> Ravi</h1>
            <h1> Raviffdddws</h1>
      </Nav>
     
    </div>
  )
}

export default App
