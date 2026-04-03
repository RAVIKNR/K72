import React from 'react'

const App = () => {
//  localStorage.setItem('user','ravi')
// const user = localStorage.getItem('user')
//  console.log(user)
// localStorage.removeItem('ravi')

const user = {
  username:'ravi',
  age:18,
  city:'boisar'
    
}
    localStorage.setItem('users', JSON.stringify(user))


const use = JSON.parse(localStorage.getItem('users'))
console.log(use)

// localStorage.clear()

  return (
    <div>
         
    </div>
  )
}

export default App
