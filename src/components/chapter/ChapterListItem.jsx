import React from 'react'


const ChapterListItem = ({name,topic,duration,exe}) => {
    const handleTopicClick=(e)=>{
        console.log(name);
    }

    const subTopics={
        "CHAPTER ONE":{
            
        }
    }

  return (
    <div className='flex flex-col gap-[1vw] shadow-sm border p-[4vw] font-mono text-[13px]'  onClick={()=>handleTopicClick(name)}>
        <div className='flex justify-between items-center font-normal'>
            <p className='font-madini text-lg'>{name}</p>
            <div className='rounded-full py-2 px-3 bg-gray-300 text-[13px]'>
                <span>Progress: 0/3</span>
            </div>
        </div>
        <div className='mt-2'>
            <p>{topic}</p>
        </div>
        <div className='flex gap-6 mt-1 font-serif'>
            <p>Total duration: <span>{duration}</span></p>
            <p>Exercises: {exe}</p>
        </div>
    </div>
  )
}

export default ChapterListItem