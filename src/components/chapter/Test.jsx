import React, { useState } from 'react'

const Test = () => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("");
    const [data,setData]=useState({"class":"jss2", "gender":"male"})

    const handleUpdate=()=>{
        setName("Paul")
        setAge("29")
        setData({...data, "state":"Lagos"})
        console.log(name)
        console.log(age)
        console.log(data)

    }


  return (
    <div className='text-4xl'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p> Class: {data.class} Gender: {data.gender}   State: {data.state}</p>
        <button onClick={handleUpdate}>Click me</button>
    </div>
  )
}

export default Test