import React, { useEffect, useState } from 'react'


const ExampleItem = ({item, note, example,id}) => {
    const myId='#'+id;
    const exeData=useState(example)
    console.log("example call")
    console.log(item, note, example)
    //const innerHtml = "<p class='text-blue-500 text-md'> Some for of sample text this is a sample data </p>"
    // useEffect(()=>{
    //     const target = document.findElementById(myId).innerHTML=example;
    // },[])
   

  return (
    <div className='mb-3 font-inter'>
        <div className='bg-[#E7E9EB] py-4 px-2'>
            {/* tag */}
            <div>
                <p className='font-semibold'>{item}</p>
            </div>
            <div className='font-inter'>
                {/* content inner html to support formating */}
                <div id={myId} className='target bg-white p-3 mt-2 border-primary border-l-4'>
                   <p>{example}</p>
                </div>
                
            </div>
             {/* comments on example */}
        <div className='text-sm my-4'>
            <p>{note}</p>
        </div>
        </div>
       
    </div>
  )
}

export default ExampleItem