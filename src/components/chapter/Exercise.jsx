import React from 'react'

const Exercise = ({data, nextExe, lastExer}) => {
const baseOptionStyle = "border p-2 px-4 rounded-2xl cursor-pointer"  
const defaultOptionStyle=baseOptionStyle+ " bg-gray-100 hover:bg-gray-200";


const handleOptionClick=(index,ans)=>{
  document.querySelector(".ans0").classList.toggle("bg-gray-100")
  let target = ".ans"+index;
  document.querySelector(target).classList.toggle("bg-green-500")  
}
  
  return (
    <div className='p-4  text-gray-600'>
      <div className='font-inter border-l-2 border-green-700 pl-2'>
          <p>{data.question}</p>
      </div>

      <div className='mt-4 py-3 flex flex-col gap-3'>
        <div  className="ans ans0 border p-2 px-4 rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={()=>handleOptionClick(0,data.options[0])}>
          <p>{data.options[0]}</p>
        </div>
        <div className="ans ans1 border p-2 px-4 rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={()=>handleOptionClick(1,data.options[1])} >
          <p>{data.options[1]}</p>
        </div>
        <div className="ans ans2 border p-2 px-4 rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={()=>handleOptionClick(2,data.options[2])}>
        <p>{data.options[2]}</p>
        </div>
        <div className="ans ans3 border p-2 px-4 rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={()=>handleOptionClick(3,data.options[3])}>
        <p>{data.options[3]}</p>
        </div>
      </div>

      <div className='p-4 flex gap-3 '>
        <button className='p-2 border px-5 rounded-full bg-red-400 text-white'>Check</button>
        {
          lastExer && <button className='p-2 border px-5 rounded-full bg-primary text-white' onClick={nextExe}>Continue</button>
        }
        {
          !lastExer && <button className='p-2 border px-5 rounded-full bg-primary text-white' onClick={nextExe}>Performance</button>
        }

      </div>
  </div>
  )
}

export default Exercise