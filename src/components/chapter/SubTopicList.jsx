import React from 'react'

const SubTopicList = ({clickHandle,subIndex,topic,duration,exe}) => {

  const handleTopicClick=()=>{
    clickHandle(subIndex)
  }

  return (
    <div className='flex flex-col gap-2 shadow-sm border p-4 font-mono text-[13px] cursor-pointer'  onClick={()=>handleTopicClick()}>
        <div className='flex justify-between items-center font-normal'>
            <p className='font-madini text-[0.9rem]'>{topic} </p>
        </div>
        <div className='flex gap-6 mt-1 text-[0.8rem] font-serif items-center h-6'>
            <div className='flex items-center gap-1'>
                <ion-icon name="time-outline"></ion-icon> 
                <p><span>{duration}</span></p>
            </div>
         
            <p>Tasks: {exe}</p>
        </div>
    </div>
  )
}

export default SubTopicList