import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/Projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Navbar from '../components/Navigation/Navbar'



const Project = () => {

  const Arr=[{
      img1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c',
      img2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd'
   },
   
   {
      img1: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      img2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
   },
   
   {
      img1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      img2: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377'
   },

  
]
gsap.registerPlugin(ScrollTrigger)


  useGSAP(function() {
  
    gsap.from('.hero', {
     height: '80px',
     stagger: {
      amount: 0.7
     },
      scrollTrigger: {
         trigger: '.lol',   
       start: 'top 85%',
end: 'top -200%',
        scrub: true
        }
    })
  })



  return (
   
    <div className='pt-[0.01vw] pro'>
    

      <Navbar color='black' />

       <div className='mt-[50vh] lg:mt-[19vw]'>
          <h1 className='text-[22vw] lg:text-[12vw] uppercase font-[font2]'>Projets</h1>
      </div>
      <div className='-mt-8.5 lg:-mt-19  lol'>
               { Arr.map(function (item,index){    
            return <div key={index} className='hero w-full h-200 lg:h-140  lg:gap-0 gap-2 flex lg:flex-row flex-col lg:flex-wrap  mb-2 justify-between px-1.5'>
         <ProjectCard img1={item.img1} img2={item.img2} />
         </div>
          })}
           <div className='bg-black w-full text-white relative'>
            <div className='flex lg:justify-between lg:flex-row flex-col w-full lg:p-4 lg:mb-[35vh] mb-[77vh] '>
            <div className='flex lg:gap-6 lg:mt-0 mt-2 gap-2.5 pl-2'>
       <a href="https://www.facebook.com/profile.php?id=61566802305539" className='border-white border-2 lg:px-6 px-3 leading-7 pt-1 font-[font2] lg:leading-15 lg:pt-3 lg:text-[4vw] text-[8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full'>FB</a>
       <a href='https://www.instagram.com/ravi_yadav04_/' className='border-white border-2 lg:px-6 px-3 leading-7 pt-1 font-[font2] lg:leading-15 lg:pt-3 lg:text-[4vw] text-[8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full'>IG</a>
       <a href='https://www.linkedin.com/in/ravi-yadav-517a56268/' className='border-white border-2 lg:px-6 px-3 leading-7 pt-1 font-[font2] lg:leading-15 lg:pt-3 lg:text-[4vw] text-[8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full'>IN</a>
       <h1 className='border-white border-2 lg:px-6 px-3 leading-7 pt-1 font-[font2] lg:leading-15 lg:pt-3 lg:text-[4vw] text-[8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] rounded-full'>BE</h1>
       </div>

       <div>
         <h1 className='border-white lg:relative left-[2%] absolute bottom-[15vh] lg:top-0 border-2 lg:px-6 px-3 leading-11 pt-2 font-[font2] lg:leading-15 lg:pt-3 lg:text-[4vw] text-[16vw] w-fit rounded-full hover:text-[#D3FD50] lg:mt-0 mb-10 lg:mb-0 hover:border-[#D3FD50]'>CONTACT</h1>
         </div>

       </div>

        <div className='flex lg:justify-between lg:flex-row flex-col lg:items-center pl-2 '>
         <div className='bg-black w-10'></div>
         <div className='flex uppercase lg:gap-6  lg:flex-row flex-col '>
            <h1 className='hover:text-[#D3FD50] hover:border-[#D3FD50] lg:text-[1vw]  text-[3vw]'>Politique de confidentialité</h1>
<h1 className='hover:text-[#D3FD50] hover:border-[#D3FD50] lg:text-[1vw] text-[3vw]'>Avis de confidentialité</h1>
     <h1 className='hover:text-[#D3FD50] hover:border-[#D3FD50] lg:text-[1vw] text-[3vw]'>Rapport éthique</h1>
     <h1 className='hover:text-[#D3FD50] hover:border-[#D3FD50] lg:text-[1vw] text-[3vw]'>option de consentment</h1>
          </div>
             <div><h1 className='uppercase lg:mb-4 mb-2 lg:mt-0 mt-3 text-center lg:mr-1  hover:text-[#D3FD50] lg:text-[2vw] text-[4vw] '>
               Retour En Haunt
               </h1></div>
        </div>
          
       </div>
         </div>
        </div>
    
  )
}

export default Project
