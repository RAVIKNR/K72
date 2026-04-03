import React, { useContext, useRef } from 'react'
import { Navbarcontext } from '../../context/Navcontext'

const Navbar = ({color}) => {

 const navgreen = useRef(null)
 const line1 = useRef(null)
 const line2 = useRef(null)

   const [Navopen, setNavopen] = useContext(Navbarcontext)

  return (
    <div className='fixed z-10 flex justify-between w-full '>
        <div className='p-2 lg:p-[0.7vw]'>
          
            <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: color || "white" }} width="103" height="44" viewBox="0 0 103 44">
                     
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
        </div>
        
      <div onMouseEnter={() => {
         navgreen.current.style.height = '100%'
        line1.current.style.backgroundColor = 'black'
        line2.current.style.backgroundColor = 'black'


      }}
      onMouseLeave={() => {
        navgreen.current.style.height = '0%'
        line1.current.style.backgroundColor = 'white'
        line2.current.style.backgroundColor = 'white'
        
      }}
      onClick={() => setNavopen(true)
        
      }
       className='h-[6.5vh] w-[50vw] lg:h-[6.8vh] lg:w-[15vw]  bg-black relative cursor-pointer'>
       <div ref={navgreen} className='bg-[#D3FD50] transition-all h-0 w-full'></div>
       <div className='flex flex-col gap-1.5 lg:gap-[0.25vw] absolute right-7 lg:right-[1.5vw] top-0 justify-center h-full'>
          <div ref={line1} className=' bg-white w-[12vw] h-[0.32vw] lg:w-[3.6vw] lg:h-[0.1vw]' ></div> 
       <div ref={line2} className=' bg-white w-[6vw] h-[0.32vw] lg:w-[1.8vw] lg:h-[0.1vw] ml-[6vw] lg:ml-[1.8vw]  '></div>
       </div>
       </div>
      </div>

    
  )
}

export default Navbar
