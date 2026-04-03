import React, { createContext, useState } from 'react'

export const Navbarcontext = createContext()



const Navcontext = ({children}) => {

    const [Navopen, setNavopen] = useState(false)

  return (
    <div>
        <div>
            <Navbarcontext.Provider value={[Navopen,setNavopen]}>
        {children}
        </Navbarcontext.Provider>
        </div>
    </div>
  )
}

export default Navcontext
