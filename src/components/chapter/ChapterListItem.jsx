import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const ChapterListItem = ({name,topic,duration,exe,id}) => {

    const navigate = useNavigate();
    

    const handleTopicClick=()=>{
        console.log(name);
        let path = "/subtopic?chapterId="+id
        navigate(path)
    }

    const subTopics={
        "CHAPTER ONE":{

        }
    }

  return (
    <Link to={{pathname:"/subtopic", search:'?chapterId='+id}}>
        <div className='flex flex-col gap-[1vw] shadow-sm border p-[4vw] font-mono text-[13px]' >
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
    </Link>

  )
}

export default ChapterListItem