
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, {useContext, useRef } from 'react'
import { Navbarcontext } from '../../context/Navcontext'

const FullscreenNav = () => {

 const [Navopen, setNavopen] = useContext(Navbarcontext)

  const NavLink = useRef(null)

     function gsapAnimation(){
   
      const tl = gsap.timeline()
     
      tl.to('.fullscreenNav',{
        display:'block',
      })    


    tl.to('.stairing',{
      delay:0.5,
      height:'100%',
      stagger:{
        amount:-0.25
      }
    })    
    
    tl.to('.mainlink',{
     opacity:1,
     rotateX:0,
     stagger:{
      amount:0.25
     }
    })    
    tl.to('.navlink',{
      opacity:1,

  })


}


  function gsapAnimationLeave(){

   let tl = gsap.timeline()

   tl.to('.mainlink',{
    opacity:0,
    rotateX:90,
    stagger:{
     amount:0.25
    }
  })    
 tl.to('.stairing',{
   height:0,
   stagger:{
     amount:0.25
   }
  })
    
 tl.to('.navlink',{
   opacity:0,

})
tl.to('.fullscreenNav', {
            display: 'none',
        })

      
}


  




  useGSAP(function() {

  if(Navopen){
    
    gsapAnimation()
   
  } else{   
    gsapAnimationLeave()
  }
},[Navopen])




  const Arr=[
    {
      title:'Projets',
      img1:'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a',
      img2:'https://k72.ca/images/caseStudies/Capture_d%E2%80%99ecran_le_2025-09-17_a_18.11.25.png?w=1920&fm=jpg&s=53fb69332aedd6c1fa5499623c55789a',
      para:'Pour Tout Voir'
    },
    {
      title:'Agence',
      img1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b',
      img2:'https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81'  ,
       para:'Pour Tout saVoir'
    },
    {
      title:'Contact',
      img1:'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a',
      img2:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5'  ,
      para:'Pour Envoyer Un fax'
    },
    {
      title:'Blogue',
      img1:'https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec',
      img2:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' , 
      para:'Lire less Articles'
    },

  ]


  const Hovrefs = useRef([])

  const Enter = (index) =>{ 
const el = Hovrefs.current[index]

   gsap.from(el,{
    opacity:0,
   
   }  )

    gsap.to(el,{
      opacity:1,
      height:'100%',
      duration:0.5,
    })
  }

  const Leave = (index) =>{
const el = Hovrefs.current[index]
    gsap.to(el,{
      
      height:'0%',
      duration:0.5,
      ease:'power2.inOut'
    })
  }


  return (
    <div className='overflow-hidden fullscreenNav z-50 absolute py-[9.5vw] w-full h-screen uppercase font-[font2] text-white'>

       <div className='h-screen w-full fixed top-0  flex'>
        <div className='flex w-full h-full'>
      <div className='stairing bg-black h-full w-1/5'></div>
      <div className='stairing bg-black h-full w-1/5'></div>
      <div className='stairing bg-black h-full w-1/5'></div>
      <div className='stairing bg-black h-full w-1/5'></div>
      <div className='stairing bg-black h-full w-1/5'></div>
      </div>
     </div>

          
          <div ref={NavLink} >

      <div className='navlink absolute top-0 p-3 flex justify-between w-full ' >
                     <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="103" height="44" viewBox="0 0 103 44">
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                     </div>
                     <div  
                      onClick={()=>{
                        setNavopen(false)
                      }}
                     className='w-[20vw] h-[20vw] lg:w-[8vw] lg:h-[8vw] crosser flex justify-center items-center l lg:pb-4 p-5 lg:p-0'>
                      <div className=' bg-white w-[0.4vw] h-30 cross lg:w-0.5  lg:h-36 -rotate-45'></div>
                      <div className='bg-white  w-[0.4vw] h-30  cross lg:w-0.5 lg:h-36 rotate-45'></div>
                     </div>
                    
             </div>
      <div className='lg:mt-0 mt-40'>

     { Arr.map((item, index)=>(
        <div
               onMouseEnter={() => Enter(index)}
               onMouseLeave={() => Leave(index)}
               key={index}
        className='mainlink origin-top border-y border-white relative overflow-hidden'>
          <h1 className='text-[13vw] lg:text-[8vw] text-center leading-14 lg:leading-[0.8] pt-2 lg:pt-5 '>{item.title}</h1>
          <div
          ref={(el)=>{
            Hovrefs.current[index] = el
          }} 
          className='link  h-0 bg-[#D3FD50]  absolute top-0 flex text-black'>
          <div className='move flex overflow-hidden items-center'>
            <h1 className='whitespace-nowrap text-[13vw] lg:text-[8vw] text-center leading-[0.8] pt-2 lg:pt-5 '>{item.para}</h1>
            <img className='rounded-full w-68 h-24 mt-1 object-cover shrink-0 ml-6 mr-6' src={item.img1} alt="" />
            <h1 className='text-[13vw] lg:text-[8vw] whitespace-nowrap leading-[0.8] pt-2 lg:pt-5'>{item.para}</h1>
            <img className='rounded-full w-68 h-24 mt-1 object-cover shrink-0 ml-6 mr-6' src={item.img2} alt="" />
          </div>
          <div className='move overflow-hidden  flex items-center '>
            <h1 className='whitespace-nowrap text-[13vw] lg:text-[8vw] text-center leading-[0.8] pt-2 lg:pt-5'>{item.para}</h1>
           <img className='rounded-full w-68 h-24 mt-1 object-cover shrink-0 ml-6 mr-6' src={item.img1} alt="" />
            <h1 className='text-[13vw] lg:text-[8vw] whitespace-nowrap leading-[0.8] pt-2 lg:pt-5'>{item.para}</h1>
            <img className='rounded-full w-68 h-24 mt-1 object-cover shrink-0 ml-6 mr-6' src={item.img2} alt="" />
          </div>
          </div>
        </div>

      ))
    }
      
      
       </div>
     
      </div>
    
    </div>
  )
}

export default FullscreenNav
