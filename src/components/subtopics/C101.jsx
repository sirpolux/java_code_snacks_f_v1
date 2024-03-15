import React, { useState } from 'react'
import Overview from '../chapter/Overview'
import NavButton from '../chapter/NavButton'
import ExampleItem from '../chapter/ExampleItem'
import VideoFile from '../chapter/VideoFile'


const C101 = ({}) => {

    const [pageNav,setPageNav]=useState(1)
    const [content,setContent]=useState("overView")
    const [videoState,setVideoState]=useState(false);

    const resource={
        "flow":["overView", "examples", "video", "summary", "assessment", "otherResource"],
        "topic":"Data Types",
        "overView":["In Java programming, data types are fundamental building blocks used to define the type of data that a variable can hold or manipulate. They play a crucial role in defining the behavior and characteristics of variables, objects, and expressions in Java programs. Understanding data types is essential for writing efficient, reliable, and maintainable Java code",
        "In Java, variables must be declared with a specific data type before they can be used. This helps enforce type safety and ensures that variables are used appropriately within the program.",
        "Java provides two main categories of data types: primitive data types and reference data types. Primitive data types represent simple values like numbers and characters, while reference data types refer to objects and arrays created from classes or interfaces.",
        "Primitive data types are predefined by the language and have fixed sizes, while reference data types are created using classes or interfaces defined by the programmer or provided by the Java platform."

        ],
        "readTime":"15",
        "importanceHeading":"",
        "importance":null,
        "videoSrc":"/C1-1.mp4",
        "exampleLen":"short",
        "examples":[
            {
                "category":"Primitive Data Types",
                "data":[
                    {
                        "item": "byte",
                        "note": "Represents a signed 8-bit integer",
                        "example": "byte myByte = 10;"
                    },
                    {
                        "item": "short",
                        "note": "Represents a signed 16-bit integer",
                        "example": "short myShort = 1000;"
                    
                    },
                    {
                        "item": "int",
                        "note": "Represents a signed 32-bit integer",
                        "example": "int myInt = 100000;"
                    },
                    {
                        "item": "long",
                        "note": "Represents a signed 64-bit integer",
                        "example": "long myLong = 10000000000L;"
                    },
                    {
                        "item": "float",
                        "note": "Represents a single-precision 32-bit floating point",
                        "example": "float myFloat = 3.14f;"
                    },
                    {
                        "item": "double",
                        "note": "Represents a double-precision 64-bit floating point",
                        "example": "double myDouble = 3.14159;"
                    },
                    {
                        "item": "char",
                        "note": "Represents a single 16-bit Unicode character",
                        "example": "char myChar = 'A';"
                    },
                    {
                        "item": "boolean",
                        "note": "Represents a boolean value, either true or false",
                        "example": "boolean myBoolean = true;"
                    }
                ]
            },
            {
                "category":"Reference Data Types",
                "data":[
                    {
                        "item": "String",
                        "note": "Represents a sequence of characters",
                        "example": ["String myString = \"Hello, World!\";"]
                    },
                    {
                        "item": "Array",
                        "note": "Represents a collection of elements of the same type",
                        "example": ["int[] myArray = {1, 2, 3, 4, 5};"]
                    },
                    {
                        "item": "Class",
                        "note": "Represents user-defined data types",
                        "example": ["MyClass myObject = new MyClass();"]
                    },
                    {
                        "item": "Interface",
                        "note": "Represents a contract for classes to implement",
                        "example": ["Comparable myInterface = new MyClass();"]
                    }
                ]
            }
            
        ],
        "otherResource":[
            {
                "title": "Oracle's Java Tutorials - Primitive Data Types",
                "link": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
            },
            {
                "title": "GeeksforGeeks - Java Data Types",
                "link": "https://www.geeksforgeeks.org/data-types-in-java/"
            },
            {
                "title": "W3Schools - Java Data Types",
                "link": "https://www.w3schools.com/java/java_data_types.asp"
            },
            {
                "title": "Tutorialspoint - Java Data Types",
                "link": "https://www.tutorialspoint.com/java/java_basic_datatypes.htm"
            }
        ]
        ,
        "summary":["Understanding the characteristics, limitations, and usage of different data types is crucial for effective programming in Java. By choosing the appropriate data types and using them correctly, programmers can write robust and efficient Java code that meets the requirements of their applications"],
        "assessment":[
            {
                "questionType": "TYPE-A",
                "question": "What is the maximum value that can be stored in a `short` data type in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "32,767",
                "options": [
                    "127",
                    "255",
                    "32,767",
                    "65,535"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "Which of the following data types is used to store a single-precision floating-point number in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "float",
                "options": [
                    "float",
                    "double",
                    "int",
                    "long"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "In Java, which data type is used to represent a single Unicode character?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "char",
                "options": [
                    "char",
                    "string",
                    "byte",
                    "int"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "What is the default value for a boolean variable in Java if not explicitly initialized?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "false",
                "options": [
                    "true",
                    "false",
                    "null",
                    "0"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "Which data type is used to represent a sequence of characters in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "string",
                "options": [
                    "char",
                    "string",
                    "byte",
                    "int"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "What is the size of the `int` data type in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "32 bits",
                "options": [
                    "8 bits",
                    "16 bits",
                    "32 bits",
                    "64 bits"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "Which of the following data types can store decimal numbers in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "double",
                "options": [
                    "int",
                    "short",
                    "long",
                    "double",
                    "float"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "What is the keyword used to declare a variable of a reference data type in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "new",
                "options": [
                    "var",
                    "int",
                    "new",
                    "class"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "Which of the following is NOT a primitive data type in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "String",
                "options": [
                    "byte",
                    "char",
                    "String",
                    "long"
                ]
            },
            {
                "questionType": "TYPE-A",
                "question": "Which data type is used to represent an array of elements in Java?",
                "multipleAns": false,
                "resource": "",
                "correctAnswers": "array",
                "options": [
                    "list",
                    "array",
                    "set",
                    "map"
                ]
            }
        ]        
    }
    
    console.log(resource.examples[0].data)
    const exa=resource.examples[0].data;
    let examples=[]
    exa.forEach(data=>{
        let arr=[];
        arr.push(data.item)
        arr.push(data.example)
        arr.push(data.note)
        examples.push(arr)
    })
    let examples2=[];
    resource.examples[1].data.forEach(data=>{
        let arr=[];
        arr.push(data.item)
        arr.push(data.example)
        arr.push(data.note)
        examples2.push(arr)
    })

    console.log(examples)

    const handleNextItem=(target)=>{
        console.log("got here")
        setPageNav(target)
        switch(target){
            case 1:
                case 2:
                    setContent("overView")
            break;
            case 3:
                case 4:
                    setContent("example")
                    setVideoState(false)
            break;
            case 5:
                setContent("video")
                break;
            case 6:
                setContent("exercise")
                break;
                

        }
        if(target==3){

        }
    }

    const backtoContent=()=>{


    }

    const handleClose =()=>{
        setVideoState(false)
    }




  return (
    <div className='flex w-full h-screen flex-col bg-gradient-to-b from-primary to-white'>
        <div className='h-28 w-full p-5'>
            <div className='flex' >
                <div className='rounded-full bg-white  h-8 px-3 flex items-center' onClick={()=>backtoContent(1)}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className='font-inter text-[0.8rem] font-light'>Go back</span>
                </div>
            </div>
            <div className='h-full w-full flex items-center text-white text-lg font-semibold pb-1'>
                <p>Data Types</p>
            </div>
        </div>
        <div className='bg-white h-10 rounded-t-3xl'>
            <div className='flex gap-4 px-4 py-1 justify-end'>
                {
                 pageNav>1 &&
                    <NavButton text="Previous"  action="b" data={pageNav} myHandler={handleNextItem} />
                }
                
                <NavButton text="Continue" action="f" data={pageNav} myHandler={handleNextItem}/> 
            </div>
        </div>
        <div className='overflow-scroll  bg-white h-full pb-40'>
            {/* OVER VIEW SECTION */}
            {content=="overView" && 
                <>
                    {
                    pageNav==1&&
                    <>
                        <Overview data={resource.overView[0]}/>
                        <Overview data={resource.overView[1]}/>
                    </>
                    }  
                    {pageNav==2&&
                    <>
                        <Overview data={resource.overView[2]}/>
                        <Overview data={resource.overView[3]}/>
                    </>    
                    }  
                             
                </>
            }

            {/* EXAMPLE SECTION */}
            {
                content=="example" &&
                <div className='bg-white p-5'>
                    {pageNav==3&&
                    <> 
                        <p className='font-inter font-semibold text-gray-500'>Primitive Data Types</p>
                        {
                            examples.map((items,index)=><ExampleItem item={items[0]} note={items[2]} example={items[1]}  key={index} id={index}/>)
                        }
                    </>
                    }
                    {pageNav==4&&
                    <> 
                        <p className='font-inter font-semibold text-gray-500'>Reference Data Types</p>
                        {
                            examples2.map((items,index)=><ExampleItem item={items[0]} note={items[2]} example={items[1]}  key={index} id={index}/>)
                        }
                    </>
                        
                    }
                   
                </div>
            }

            {/* VIDEO */}

            {
                content=="video" &&
                <>
                    <div className='flex items-center justify-center h-[200px] w-full flex-col gap-2'>
                        <p>
                        10 minutes video on data structure
                        </p> 
                        <button onClick={()=>setVideoState(true)} className='shadow-lg border py-3 px-5 rounded-full'>Access Video</button>
                    </div>
                   
                   
                    {
                        videoState&& <VideoFile video={resource.videoSrc} closeHandler={handleClose}/>
                    }
                   
                </>
            }
            




            
            
        </div>
    </div>
  )
}

export default C101