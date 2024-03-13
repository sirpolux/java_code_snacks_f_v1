import React, { useEffect, useState } from 'react'
import SubTopicList from './SubTopicList'
import Nav from '../common/Nav'
import resourceData from '../../data/courseData.json'
import TopicMainContent from '../common/TopicMainContent'

const SubTopic = () => {
     const defaultData={
        "title":"",
        "overView":"",
        "assessment":{},
        "summary":{},
        "importance":{},
        "examples":{},
    }
    const [dataFile,updateDatafile]= useState({...defaultData})
    const [currentItem,updateCurrentItem]=useState("")
    const [navPage,setNavPage]=useState(1)
    let item =""
    //const [courseItem,setCourseItem]=useState("")
   

    //const [currentData,updateCurrenData]=useState({...defaultData})
    let moduleSize=0
    let modulePosition=0;
    let courseItemIndex=0
    let courseSize=0;

    const handleViewUpdate=(option)=>{
        switch(option){
            case "f":
                modulePosition<moduleSize-1?modulePosition++:changeCourseItem(option)
                break;
            case "b":
                modulePosition>0? modulePosition--:changeCourseItem(option)
                break
        }

    }

    const decideCurrentResource=()=>{
        console.log("i got here")
        console.log("Current Item"+currentItem)
        switch(item){
            case "overView":
                console.log("I should work")
                handleOverview()
                break;
            case "examples":
                handleExamples()
                break;
            default:
        }
    }

    const changeCourseItem=(direction)=>{
        if(courseItemIndex<courseSize-1){
            courseItemIndex++
        }
    }

    const handleItemUpdate=(item)=>{
        console.log("I5555");
        console.log(item)
        updateCurrentItem(item)
        console.log("I5jfkfjffk s555");
       
    }


    let courseResource={};
    const searchParams = new URLSearchParams(location.search)
    const chapter=searchParams.get('chapterId')
    const itemInitials=searchParams.get("itemInitial")
   // console.log(searchParams.get("itemInitial"))
    //console.log(searchParams.get('chapterId'))

    const getResource=(subTopicIndex)=>{
        let resourceName=itemInitials+"-"+subTopicIndex
        return resourceName
    }
    const handleSubTopicClick=(subTopicIndex)=>{
        let resource = getResource(subTopicIndex)
        let targetResource=resourceData[resource]
        courseResource = targetResource;
        let flow=courseResource.flow;
        moduleSize=courseResource[flow[courseItemIndex]].length
        courseSize=flow.length
        item="overView"
        updateCurrentItem("overView")
        handleItemUpdate("overView")
        decideCurrentResource()
        
        //console.log(resource)
        setNavPage(prevNavPage=>prevNavPage+1)
    }
    const handleSummary=()=>{

    }
    const handleOverview=()=>{
        updateDatafile({...dataFile, "overView":courseResource.overView[modulePosition], "title":courseResource.topic})
        console.log(courseResource.overView[modulePosition]);
        //console.log(dataFile)
    }

    useEffect(()=>{
     console.log(dataFile)   
     console.log("Item Updated: " +currentItem)
     
    },[currentItem,dataFile])

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
        {navPage==1&&
        <div className='transition-all duration-1000  ease-in'>
            <Nav target="/chapters"/>
            {
                subTopics[chapter].map((item,index)=><SubTopicList key={index} {...item}  clickHandle={handleSubTopicClick} subIndex={index+1} />)
            }
        </div>
        }
        {navPage==2&&
            <TopicMainContent backtoContent={setNavPage} {...dataFile} currentItem={currentItem} />
                
        }

    </>
  )
}

export default SubTopic