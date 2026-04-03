import React from 'react'

const Sidebar = (props) => {

    function click(){
        props.setTheme('Light')
    }

  return (
    <div>
      <button
      onClick={click}
      >Change The Theme</button>
    </div>
  )
}

export default Sidebar
