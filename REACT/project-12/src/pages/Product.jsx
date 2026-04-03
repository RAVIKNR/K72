import React from 'react'
import Men from './Men'
import Woman from './Woman'
import { Link, Outlet } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'


const Product = () => {
  return (
   <div >

<div className='flex justify-between p-10 '>
    <Link  className='bg-pink-900 px-6 py-2 rounded-2xl' to='/Product/Men'>Men</Link>
    <Link  className='bg-pink-900 px-6 py-2 rounded-2xl' to='/Product/Women'>Women</Link>
    </div>

    <div className='text-9xl flex justify-center  underline mt-15'>
        <h1> Products</h1>
    </div>
        
       <Outlet/>

     
    </div>
  )
}

export default Product
