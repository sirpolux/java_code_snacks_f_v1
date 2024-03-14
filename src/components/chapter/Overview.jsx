import React from 'react'
import NavButton from './NavButton'

const Overview = ({data}) => {
  return (
    <div className='w-full  p-4 rounded-3xl text-left font-mono text-sm leading-loose ' >
        {data}
        <br/>
    </div>
  )
}

export default Overview