import React from 'react'

export const ExerciseOption = () => {
    const regularState ="p-3 border my-2 shadow hover:bg-green-500 hover:text-white cursor-pointer"
    const selectedState = regularState+" bg-gray-400"
    const wrongState= regularState+" bg-red-500"

    
  return (
    <>
   
    <div className={wrongState}>
        <p>This is the Current option</p>
    </div> 
    
    </>
  )
}
