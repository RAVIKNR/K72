import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Postcontext = createContext()

const Themecontext = (props) => {

    const [Theme, setTheme] = useState('Light')

  return (
    <div>
      <Postcontext.Provider value={[Theme,setTheme]}>
      {props.children}
      </Postcontext.Provider>
    </div>
  )
}

export default Themecontext