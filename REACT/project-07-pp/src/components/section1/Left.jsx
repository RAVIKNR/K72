
import React from 'react'
import Arrow from './Arrow'

const Left = () => {
  return (
    <div className='w-1/6 h-[88vh] flex flex-col justify-between'>
        <div className='mt-22'>
      <h1 className='text-5xl font-bold '>
        Prospective <br />
       <span className='bg-gray-200 rounded-full inline-block  px-3 mt-3 h-14'>customer</span><br />
segmentation</h1>
      <p className=' mt-7'>Depending on customer
satisfaction and access
to banking products, potential
target audience can be divided
into three groups</p>
</div>
       <Arrow />
    </div>
  )
}

export default Left
