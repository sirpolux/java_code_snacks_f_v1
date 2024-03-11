import React from 'react'

const SubTopicList = ({topic,exe,duration}) => {

  return (
    <div className='flex flex-col gap-[1vw] shadow-sm border p-[4vw] font-mono text-[13px]'  onClick={()=>handleTopicClick(name)}>
        <div className='flex justify-between items-center font-normal'>
            <p className='font-madini text-[0.9rem]'>Topic: <span className='font-mono text-[0.8rem]'>{topic}</span> </p>
        </div>
        <div className='flex gap-6 mt-1 text-[0.8rem] font-serif'>
            <p>Duration: <span>{duration}</span></p>
            <p>Tasks: {exe}</p>
        </div>
    </div>
  )
}

export default SubTopicList