import React from 'react'

const TopicMainContent = ({topic, content}) => {
  return (
    <div className='flex w-full h-screen flex-col'>
        <div className='basis-2/6 w-full bg-primary p-5'>
            <div className='flex' >
                <div className='rounded-full bg-white  h-8 px-3 flex items-center'>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className='font-inter text-[0.8rem] font-light'>Go back</span>
                </div>
            </div>
        </div>

        <div className='basis-4/6'>
            {/* Meaning */}
            <div>
                <p></p>
            </div>
            {/* Why */}
            <div>

            </div>

        </div>
    </div>
  )
}

export default TopicMainContent