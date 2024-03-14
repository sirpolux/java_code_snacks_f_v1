import React from 'react'

const NavButton = ({text,action, data, myHandler}) => {
  console.log(data)
  console.log(myHandler)
  const handleNavClick=()=>{
    let val = 0
    if(action=="f"){
      val=data+1
    }
    if(action=="b"){
      val=data-1
    }
    //updatePage(true)
    console.log("New value: "+ val)
    myHandler(val)
  }
  return (
    <div className=''>
        <button onClick={handleNavClick} className='bg-primary text-white rounded-full px-6 py-2 font-inter text-[0.8rem] font-light'>{text}</button>
    </div>
  )
}

export default NavButton