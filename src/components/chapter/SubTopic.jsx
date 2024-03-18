import React, { useEffect, useState } from 'react'
import SubTopicList from './SubTopicList'
import Nav from '../common/Nav'
import resourceData from '../../data/courseData.json'
import TopicMainContent from '../common/TopicMainContent'
import { useNavigate } from 'react-router-dom'

const SubTopic = () => {
        
    const navigate = useNavigate()
    const [navPage,setNavPage]=useState(1)
    const [notFirstPage,setNotFirstPage]=useState(false);
    const [chapterId, setChapterId]=useState("")


    const [itemInitial, setItemInitial]=useState("");
    const handleViewUpdate=(option)=>{
        setNotFirstPage(true)
        const {modulePosition,moduleSize}=extras
        console.log("Handler was clicked")
        console.log(option)
        switch(option){
            case "f":
                if(modulePosition<moduleSize-1){
                    setExtras(
                        {...extras, "modulePosition":modulePosition+1}
                    ),
                    ()=>{
                        console.log(modulePosition)
                        console.log("module size"+ extras.moduleSize)
                        decideCurrentResource()
                    }
                }
                //modulePosition<moduleSize-1?modulePosition++:changeCourseItem(option)
                break;
            case "b":
                //modulePosition>0? modulePosition--:changeCourseItem(option)
                break
        }

    }
    const searchParams = new URLSearchParams(location.search)
    const chapter=searchParams.get('chapterId')
    const itemInitials=searchParams.get("itemInitial")
    useEffect(()=>{
        setItemInitial(itemInitials)
        setChapterId(chapter)
    },[])

    

    console.log(searchParams.get("itemInitial"))
    console.log(searchParams.get('chapterId'))

    const getResource=(subTopicIndex)=>{
        let resourceName=itemInitials+"-"+subTopicIndex
        return resourceName
    }
    const handleSubTopicClick=(subTopicIndex)=>{
        //console.log(subTopicIndex)
        let targetDestination="/course/"+itemInitial+"-"+subTopicIndex;
        navigate(targetDestination)
        console.log(targetDestination)
       
        //update dataFile
    }
    const handleSummary=()=>{

    }
    
    const handleExamples=()=>{

    }

    const subTopics={
        "one":[
            {
                "topic":"Java Programming",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"Setting up the development environment",
                "exe":"0",
                "duration": "5 mins"
            },
            {
                "topic":"Basic struture of Java Program",
                "exe":"2",
                "duration": "7 mins"
            }
        ],
        "two":[
            {
                "topic":"Data Types",
                "exe":"4",
                "duration": "7 mins"
            },
            {
                "topic":"Introduction to variables",
                "exe":"3",
                "duration": "6 mins"
            },
            {
                "topic":"Arrays",
                "exe":"5",
                "duration": "8 mins"
            }
        ],
        "three":[
            {
                "topic":"Assignment Operators",
                "exe":"3",
                "duration": "4 mins"
            },
            {
                "topic":"Arithmetic Operators",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"Logical Operators",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"Relational Operators",
                "exe":"4",
                "duration": "6 mins"
            }
        ],
        "four":[
            {
                "topic":"If Statements",
                "exe":"4",
                "duration": "7 mins"
            },
            {
                "topic":"Switch statements",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"Short Circuit Operators",
                "exe":"2",
                "duration": "6 mins"
            },
        ],
        "five":[
            {
                "topic":"For loops",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"While loops",
                "exe":"2",
                "duration": "6 mins"
            },
            {
                "topic":"Do while loops",
                "exe":"2",
                "duration": "6 mins"
            }
        ],
        "six":[
            {
                "topic":"Creating a function",
                "exe":"6",
                "duration": "8 mins"
            },
            {
                "topic":"Calling a function",
                "exe":"2",
                "duration": "6 mins"
            }
        ]

    }

  return (
    <>   
    <div className='transition-all duration-1000  ease-in h-screen w-screen flex justify-center items-center'>
        <div className='w-[400px] h-[600px] shadow rounded-2xl overflow-scroll'>
        {navPage==1&&
        <div className='transition-all duration-1000  ease-in overflow-auto'>
            <Nav target="/chapters" text={chapterId} />
            {
                subTopics[chapter].map((item,index)=><SubTopicList key={index} {...item}  clickHandle={handleSubTopicClick} subIndex={index+1} />)
            }
        </div>
        }
        {navPage==2&&
            <TopicMainContent backtoContent={setNavPage} {...dataFile} currentItem={currentItem} hasPrevious={notFirstPage} nextItem={handleViewUpdate} updatePage={setNotFirstPage} />
                
        }

        </div>
    </div>
    </>
  )
}

export default SubTopic