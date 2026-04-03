import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <h4 className='bg-black text-white px-2 py-1 rounded-full  text-xs uppercase tracking-widest'>
        Target Audience
        </h4>
      <button className='text-xs uppercase tracking-widest px-2 py-1 rounded-full bg-gray-100'>
        Digital Banking Platform
        </button>
    </div>
  )
}

export default Navbar