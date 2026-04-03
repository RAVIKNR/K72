import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Section1 = (props) => {

  return (
    <div className=' px-12 py-8'>
      <Navbar />
        <Content users={props.users} />
    </div>
  )
}

export default Section1
