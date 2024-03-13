import React from 'react'
import NavButton from './NavButton'

const Overview = ({data}) => {
  return (
    <div className='w-full h-full p-6 rounded-3xl text-left font-mono text-sm leading-loose ' >
        {data}
        <NavButton/>
        <br/>
    </div>
  )
}

export default Overview