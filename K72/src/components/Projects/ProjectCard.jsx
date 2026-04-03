import React from 'react'

const ProjectCard = (props) => {
  return (
       
      
<>
      

    
    
    <div className='relative group  w-full  lg:w-[48.92vw] h-full  overflow-hidden  hover:rounded-[3vw] transition-all  mb-2'>
            <img className='object-cover hover:scale-[1.05] transition-all w-full h-full' src={props.img1} alt='Project Image' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20'>
            <h1 className='text-white  text-[4vw] uppercase font-[font2] border-2 border-white px-4 pt-2 rounded-full leading-[3vw]'>
                 Voir le projet
              </h1>
            </div>
            </div>


    <div className='relative group w-full lg:w-[48.92vw] h-full  overflow-hidden  hover:rounded-[3vw] transition-all mb-2 '>
            <img className='object-cover hover:scale-[1.05] transition-all w-full h-full' src={props.img2} alt='Project Image' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20'>
            <h1 className='text-white  text-[4vw] uppercase font-[font2] border-2 border-white px-4 pt-2 rounded-full leading-[3vw]'>
                 Voir le projet
              </h1>
            </div>
            </div>
           
           
           </>
            
  )
}

export default ProjectCard
