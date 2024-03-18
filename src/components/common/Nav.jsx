import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({target, text}) => {
  return (
    <div className='h-12 bg-primary w-full text-white flex items-center text-[28px] px-4 '>
       
            <Link to={target}  > 
                <div className='cursor-pointer w-auto h-12 flex items-center'>
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>  <span className='text-sm uppercase ml-2' >Chapter: {text}</span>
                </div>
            </Link> 
        
    </div>
  )
}

export default Nav