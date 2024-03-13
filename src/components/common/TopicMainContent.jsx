import React from 'react'
import Overview from '../chapter/Overview'

const TopicMainContent = ({topic, content,backtoContent, currentItem, overView, title}) => {
  return (
    <div className='flex w-full h-screen flex-col bg-gradient-to-b from-primary to-white'>
        <div className='h-28 w-full p-5'>
            <div className='flex' >
                <div className='rounded-full bg-white  h-8 px-3 flex items-center' onClick={()=>backtoContent(1)}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className='font-inter text-[0.8rem] font-light'>Go back</span>
                </div>
            </div>
            <div className='h-full w-full flex items-center text-white text-lg font-semibold pb-1'>
                <p>{title}</p>
            </div>
        </div>
        <div className='bg-white h-10 rounded-t-3xl'>

        </div>
        <div className='overflow-scroll  bg-white h-full pb-40'>
            {currentItem=="overView" &&  <Overview data={overView} />}
        </div>
    </div>
  )
}

export default TopicMainContent