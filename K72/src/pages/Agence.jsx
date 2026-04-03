import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import Navbar from '../components/Navigation/Navbar'



const Agence = () => {

  const imageArr=[
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
  'https://k72.ca/images/teamMembers/CAMILLE_640X960_2.jpg?w=640&h=960&s=28b4a95be0b5d4f2d698c8a63de0c8df',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
  'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]


  const imageref = useRef(null)
  const imageDivref = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


       let imageIndex

  useGSAP(function(){
    gsap.to(imageDivref.current,{
            scrollTrigger:{
              trigger:imageDivref.current,
                
                 start:'top 20%',
                 end:'top -125%',
                 pin:true,
                  scrub:true,
                  pinReparent:true,
                  pinSpacing:true,
                  pinType:'transform',
                  anticipatePin:true,
                 onUpdate:function(elem){
           
                  
                  if(elem.progress < 1){
                 imageIndex = Math.floor(elem.progress * imageArr.length)
                  }
                  else{
                    imageIndex = imageArr.length-1;
                  }
                      imageref.current.src = imageArr[imageIndex]
                 }

            }

    })
  })





  return (
    <div className=''>
      <div className='Sec1 p-[0.01vw]'>
        <Navbar color="black"/>
      <div ref={imageDivref} className=' w-[20vw] lg:w-[14.5vw] h-[14vh] lg:h-[40vh] absolute top-[10vh] lg:top-[23.3vh] left-[30vw] rounded-2xl overflow-hidden'>
        <img ref={imageref} className='object-cover h-full w-full'   src={imageArr[imageIndex]} alt="" />
      </div>
     <div className='text-[20vw] font-[font2] uppercase leading-[17vw] text-center  mt-[30vh] lg:mt-[55vh] relative'>
      Soixan7e
      Douze
     </div>
     <div className='lg:text-[3.4vw] text-[5.5vw] font-[font2] lg:pl-[40%] mt-2 leading-[5.5vw] lg:leading-[3.4vw] font-bold '>
      <p className='lg:mt-0 mt-[14vh] lg:p-0 p-3'>
       &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit
notre créativité. On reste humbles et
on dit non aux gros egos, même le
vôtre. Une marque est vivante. Elle a
des valeurs, une personnalité, une
histoire. Si on oublie ca, on peut faire
de bons chiffres à court terme, mais
on la tue à long terme. C'est pour ça
qu'on s'engage à donner de la
perspective, pour bâtir des marques
influentes.
      </p>
     </div>
     </div>
     <div className='Sec2 h-[70vh] w-full lg:p-32 mt-26'>
      <div className=''>
        <div className='text-[4.5vw] lg:text-[1.3vw] font-[font2] flex lg:w-[33.5vw] justify-between w-[70vw]'>
          <h2 className='lg:pl-6 pl-2.5'>Expertise</h2>
          <div className='leading-[5.5vw] lg:leading-[1.5vw]'>
            <h2>Stratégie</h2>
<h2>Publicité</h2>
<h2>Branding</h2>
<h2>Design</h2>
<h2>Contenu</h2>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col justify-between text-[4.5vw] lg:text-[1.3vw] font-[font2]  mt-[14vw] lg:mt-[6vw] lg:pr-0 pr-10 leading-5 lg:leading-6'>
          <h2 className='p-[2vw]'>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h2>
          <h2 className='p-[2vw]'>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</h2>
          <h2 className='p-[2vw]'>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</h2>
        </div>
      </div>
     </div>
    </div>
    
  )
}

export default Agence
