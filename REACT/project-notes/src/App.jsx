import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
          e.preventDefault()
         setTask([...task, { title, detail }])
  }

  function delelte(idx){
      const copyTask = [...task]
      copyTask.splice(idx,1)
      setTask(copyTask)
  }

  return (
    <div className='overflow-hidden h-screen w-screen bg-black lg:flex '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='text-white flex flex-col gap-6 lg:w-1/2 shrink-0 p-10'>
        
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} className='border-2 border-white p-3 rounded-2xl font-medium outline-none w-full' type="text" placeholder='Enter Notes Heading' />
        <textarea value={detail}
         onChange={(e)=>{
          setDetail(e.target.value)
         }}
        className='p-3 border-2 border-white h-32 rounded-2xl font-medium outline-none w-full'  name="" id="" placeholder='Write Details Here '></textarea>
        <button className='bg-white text-1xl p-2 rounded-2xl text-black font-medium '>Add Note</button>
   
      </form>
      <div className='p-10 ml-8 pl-8 lg:border-l-white lg:border-2 '>
        <h1 className='text-white text-4xl font-bold mb-6'>Recent Notes</h1>
        <div id='scroller' className='flex gap-5 flex-wrap h-full overflow-auto'>
        
          {task.map(function(elem , idx) 
           {
            return  <div  key={idx} className="flex flex-col justify-between w-40 h-52 text-black rounded-2xl p-3 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div >
            <h2 className='font-medium text-2xl'>{elem.title}</h2>
            <p className='mt-1 leading-tight wrap-break-word text-gray-500'>{elem.detail}</p>
              </div>
              <button className='bg-red-500 rounded active:scale-95' onClick={()=>{
                delelte(idx)
              }}>Delete</button>
                       </div>
          
            
           } 
          )} 
      
        </div>
      </div>
    </div>
  )
}

export default App