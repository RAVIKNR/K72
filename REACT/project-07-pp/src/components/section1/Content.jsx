import React from 'react'
import Left from './Left'
import Right from './Right'

const Content = (props) => {
  return (
    <div className='flex justify-between items-center  '>
      <Left />
      <Right  users={props.users} />
    </div>
  )
}

export default Content
