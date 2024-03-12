import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../common/Nav';



const ChapterListItem = ({name,topic,duration,exe,id,itemInitial}) => {

    const navigate = useNavigate();
    

    const handleTopicClick=()=>{
        console.log(name);
        console.log(itemInitial)
        let path = "/subtopic?chapterId="+id
        navigate(path)
    }

    const subTopics={
        "CHAPTER ONE":{

        }
    }

  return (
    <div>
        <Link to={{pathname:"/subtopic", search:'?chapterId='+id+"&itemInitial="+itemInitial}}>
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
                    <div className='flex items-center gap-1'>
                    <ion-icon name="hourglass-outline"></ion-icon> <p><span>{duration}</span></p>
                    </div>
                    
                    <p>Exercises: {exe}</p>
                </div>
            </div>
        </Link>
    </div>

  )
}

export default ChapterListItem