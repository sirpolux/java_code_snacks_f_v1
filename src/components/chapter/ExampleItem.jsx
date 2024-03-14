import React, { useEffect } from 'react'




const ExampleItem = ({item, note, example}) => {
    console.log("example call")
    console.log(item, note, example)
    //const innerHtml = "<p class='text-blue-500 text-md'> Some for of sample text this is a sample data </p>"
    useEffect(()=>{
        const target = document.querySelector('.target').innerHTML=example;
    },[])
   

  return (
    <div>
        <div className='bg-[#E7E9EB] pt-4'>
            {/* tag */}
            <div>
                <p className='font-semibold'>{item}</p>
            </div>
            <div className='font-inter'>
                {/* content inner html to support formating */}
                <div className='target bg-white p-3 mt-2 border-primary border-l-4'>
                   
                </div>
                
            </div>
        </div>
        {/* comments on example */}
        <div className='text-sm'>
            <p>{note}</p>
        </div>
    </div>
  )
}

export default ExampleItem