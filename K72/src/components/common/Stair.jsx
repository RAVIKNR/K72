import React, { Children, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (prop) => {

    const pageref = useRef(null)
    const StairParent = useRef(null)
    const currentPath =useLocation().pathname

  useGSAP(function(){

    const tl = gsap.timeline()

    tl.to(StairParent.current,{
        display:'block'
    })

    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
       y:'100%',
       stagger:{
        amount:-0.25
       }
    })

     tl.to(StairParent.current,{
        display:'none'
    })

    tl.to('.stair',{
      y:'0%',
    })

    gsap.from(pageref.current,{
      opacity:0,
      delay:1,
      scale:1.2,
      duration:1.1,
    } )


  },[currentPath])





  return (
    <div>
    <div className='h-screen w-full fixed top-0 z-20 flex' ref={StairParent}>
        <div className='flex w-full h-full'>
      <div className='stair bg-black h-full w-1/5'></div>
      <div className='stair bg-black h-full w-1/5'></div>
      <div className='stair bg-black h-full w-1/5'></div>
      <div className='stair bg-black h-full w-1/5'></div>
      <div className='stair bg-black h-full w-1/5'></div>
      </div>
     </div>
     <div ref={pageref}>{prop.children}</div>
     </div>
  )
}

export default Stair
