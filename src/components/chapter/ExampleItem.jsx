import React, { useEffect } from 'react'




const ExampleItem = () => {
    const innerHtml = "<p class='text-blue-500 text-md'> Some for of sample text this is a sample data </p>"
    
    useEffect(()=>{
        const target = document.querySelector('.target').innerHTML=innerHtml;
    },[])
   

  return (
    <div>
        <div className='bg-[#E7E9EB] p-3 pt-4'>
            {/* tag */}
            <div>
                <p className='font-semibold'>HTML Example</p>
            </div>
            <div>
                {/* content inner html to support formating */}
                <div className='target bg-white p-3 mt-2 border-primary border-l-4'>
                   
                </div>
                
            </div>
        </div>
        {/* comments on example */}
        <div className='p-3 text-sm'>
            <p>This section of code shows that it take a multiple of steps to achieve the common functionalities we will like to see in this project</p>
        </div>
    </div>
  )
}

export default ExampleItem