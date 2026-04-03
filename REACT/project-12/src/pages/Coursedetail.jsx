import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {
    const params = useParams()
  return (
     <div className='text-9xl flex justify-center relative top-[25%] underline  rounded flex-col items-center'>
      <h1>{params.id}</h1>
    </div>
  )
}

export default Coursedetail
