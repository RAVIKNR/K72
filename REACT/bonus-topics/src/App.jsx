import React, { useState } from 'react'
import Sidebar from './components/Sidebar'


const App = () => {

  const [Theme, setTheme] = useState('Dark')

  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Sidebar theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
