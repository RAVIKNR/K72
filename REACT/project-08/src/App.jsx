import React, { useState } from 'react'

const App = () => {

  const [a, seta] = useState(0)



  return (

    

    <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-purple-500 to-pink-500'>
       
       <h1 className='text-9xl'>{a}</h1>
       <div className='flex gap-30 mb-10'>
        <button className='px-4 py-2 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 transition duration-300' onClick={()=>{seta(a+1)}}>Click Me To Increase</button>
        <button className='px-4 py-2 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 transition duration-300' onClick={() => seta(a - 1)}>Click Me To Decrease</button>
         </div>
         <button className='px-4 py-2 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 transition duration-300' onClick={() => seta(0)}>Click Me To Reset</button>
    </div>
  )
}

export default App