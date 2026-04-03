import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [index, setindex] = useState(1)


  const api = async (elem) => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setData(response.data)
  }

  let printUserdata = <h1 className='text-5xl text-gray-500 absolute top-1/2 left-[43%]'>LOADING...</h1>
  if (data.length > 0) {
    printUserdata = data.map(function (elem, idx) {
      return <div className='w-80 h-80'>
        <a href={elem.url}>
        <img className='object-cover h-[90%] w-[100%] rounded-2xl' src={elem.download_url} alt="" />
        <h1 className='font-bold  text-2xl'>{idx+1}. {elem.author}</h1>
        </a>
      </div>

    })
  }

  useEffect(function(){
     api()
  },[index])



  return (
    <div className='p-5 h-screen overflow-auto w-screen bg-black text-white'>
      
    
        <div className='overflow-hidden  flex flex-wrap gap-10 mt-5'>{printUserdata}</div>

        <div className='flex justify-center mt-9 gap-4 '>
          <button className='bg-amber-900 px-7 py-2 rounded text-2xl'
          onClick={()=>{
            if(index>1){
            setindex(index-1)
            setData([])
            }
          }}
          >Prev</button>
          <button className='bg-amber-900 px-7 py-2 rounded text-2xl'
          onClick={()=>{
            setindex(index+1)
            setData([])
           
          }}
          >Next</button>
        </div>
     
    </div>
  )
}

export default App
