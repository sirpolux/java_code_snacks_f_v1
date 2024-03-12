import React from 'react'



const ExampleItem = () => {
    const innerHtml ="<p className='text-red-500'> <p>"
  return (
    <div>
        <div className='bg-[#E7E9EB] p-3 pt-4'>
            {/* tag */}
            <div>
                <p className='font-semibold'>HTML Example</p>
            </div>
            <div>
                {/* content inner html to support formating */}
                <div dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
                
            </div>
        </div>
        {/* comments on example */}
        <div>

        </div>
    </div>
  )
}

export default ExampleItem