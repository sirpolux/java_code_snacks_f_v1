import React, { useState } from 'react'
import java_icon from "/java_icon.svg"
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 2000);
    const [page, setPage] = useState(1)
    const handleGotoCourse=()=>{
        navigate("/chapters")
    }
  return (
    <div className='h-full'>
        <div id="splash-screen" className='splash-screen p-6 '>
            <div className='flex flex-col items-center align-middle gap-4'>
                <h1 className='text-4xl font-oswald'>JavaCodeSnack</h1> 
                <img className='w-12 block' src={java_icon} alt=""   />
                <p className='font-inter font-light text-sm'>Your pocket-sized Java tutor! Master Java on the go with our bite-sized lessons and interactive exercises. Start coding smarter today! </p>
            </div>
        </div>

        <div className='h-screen w-full rounded-sm'>
            <div className='flex flex-col h-full w-full'>
                <div className='basis-3/5 bg-primary flex items-center justify-center flex-col pb-10'>
                    <img src={java_icon} alt="" className='w-40' />
                    <p className='mt-4 text-white font-madini text-2xl'>Java Code Snack</p>
                </div>
               
                <div className='basis-2/5  flex items-center text-lightText '> 
                {
                    page==1?
                    <div className='p-6'>
                        <h1 className='font-madini text-xl'>Welcome !</h1>
                        <p className='text-sm'>Your pocket-sized Java tutor! Master Java on the go with our bite-sized lessons and interactive exercises</p> 
                        <button className='rounded-lg bg-primary w-full py-3 font-inter text-white text-sm mt-6' onClick={()=>setPage(2)} >Let's Continue</button>
                    </div>
                    :
                    page==2?
                    <div className='p-6 w-full h-full flex  justify-center flex-col gap-[2vw] '>
                        <p className='text-sm font-inter font-semibold'>Let's start be getting your details</p> 
                        <p className='font-normal text-sm mt-3` '>What is your full name?</p>
                        <input type="text" placeholder='Tony' name="" id="" className='bg-inputBackground w-full rounded-lg p-3 mt-2' />
                        <div> 
                            <button className='rounded-lg bg-primary w-full py-3 font-inter text-white text-sm mt-6' onClick={handleGotoCourse}>Open Course</button>
                        </div>
                    </div>
                    :null
                }
                    

                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home