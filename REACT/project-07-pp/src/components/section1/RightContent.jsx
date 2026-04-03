import React from 'react'

const RightContent = (props) => {
  return (
    <div className='bg-red-200 w-80 h-full relative rounded-4xl shrink-0'>
        <img className='h-full object-cover rounded-4xl' src={props.img} alt="" />
        <div className='absolute top-0 left-0 w-full h-full rounded-4xl p-7 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold bg-white w-12 h-12 flex justify-center items-center rounded-full'>{props.id+1}</h1>
          <div className='text-white'>
            <p className='leading-relaxed text-shadow-2xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate sapiente quibusdam aliquid placeat, cumque esse rerum </p>
              <div className='flex justify-between  items-center mt-10 '>
                <button style={{ backgroundColor: props.color }}  className='px-6 py-2 rounded-4xl'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' h-11 w-11 rounded-full'><i class="ri-arrow-right-line"></i></button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default RightContent
