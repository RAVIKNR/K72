import React from 'react'
import RightContent from './RightContent'

const Right = (props) => {
  return (
    <div id='scroll' className=' w-2/3 h-[90vh] p-7 display flex gap-7 overflow-x-auto flex-nowrap rounded-4xl'>
      {props.users.map(function(elem,idx){
         return      <RightContent color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag} />
         
 } )}
 
    </div>
  )
}

export default Right
