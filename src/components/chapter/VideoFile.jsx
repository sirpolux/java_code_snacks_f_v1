import React from 'react'

const VideoFile = ({video,closeHandler}) => {
  return (
    <div className='fixed w-full h-full top-0 left-0 bg-gray-800'>
         <div className='absolute  top-1 right-1 rounded-full bg-slate-400 w-10 h-10 flex items-center justify-center z-50' onClick={closeHandler}>
             X
        </div>
        <div className='w-full h-full flex items-center justify-center'>
            <video controls  src={video}></video>
        </div>
    </div>
  )
}

export default VideoFile