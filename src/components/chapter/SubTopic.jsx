import React from 'react'
import SubTopicList from './SubTopicList'
import Nav from '../common/Nav'
import resourceData from '../../data/courseData.json'

const SubTopic = () => {

    const searchParams = new URLSearchParams(location.search)
    const chapter=searchParams.get('chapterId')
    const itemInitials=searchParams.get("itemInitial")
    console.log(searchParams.get("itemInitial"))
    console.log(searchParams.get('chapterId'))

    const getResource=(subTopicIndex)=>{
        let resourceName=itemInitials+"-"+subTopicIndex
        return resourceName
    }
    const handleSubTopicClick=(subTopicIndex)=>{
        let resource = getResource(subTopicIndex)
        let targetResource=resourceData[resource]
        console.log(targetResource)
        console.log(resource)
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
    <div className='transition-all duration-1000  ease-in'>
        <Nav target="/chapters"/>
        {
            subTopics[chapter].map((item,index)=><SubTopicList key={index} {...item}  clickHandle={handleSubTopicClick} subIndex={index+1} />)
        }
    </div>
  )
}

export default SubTopic