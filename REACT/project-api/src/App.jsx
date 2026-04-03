import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

const [first, setFirst] = useState([])

const api = async() =>{
  const {data} = await axios.get('https://picsum.photos/v2/list')
  setFirst(data)
}


  return (
    <div>
        <button onClick={api}>Get</button>
        {first.map(function(elem,idx){
            return  <h1>{elem.author}{idx}</h1>
        })}
       
    </div>
  )
}

export default App
