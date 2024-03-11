import React from 'react'
import ChapterListItem from './ChapterListItem';

const Chapter = () => {
    const chapters=[{
        
            "name":"CHAPTER ONE",
            "topic":"Introduction to computer programming",
            "duration":"30mins",
            "exe":"3",
            "id":"one"
        },
        {
            "name":"CHAPTER TWO",
            "topic":"Basic data types, variables and Constants.",
            "duration":"40mins",
            "exe":"8",
            "id":"two"
        },
        {
            "name":"CHAPTER THREE",
            "topic":"Operators",
            "duration":"50mins",
            "exe":"7",
            "id":"three"
        },
        
        {
            "name":"CHAPTER FOUR",
            "topic":"Conditional Statements",
            "duration":"50mins",
            "exe":"8",
            "id":"four"
        },
        {
            "name":"CHAPTER FIVE",
            "topic":"Loops",
            "duration":"40mins",
            "exe":"7",
            "id":"five"
        },
        {
            "name":"CHAPTER SIX",
            "topic":"Functions",
            "duration":"50mins",
            "exe":"8",
            "id":"six"
        }
    ];
  return(
    <div className='transition-all duration-1000  ease-in'>
        {chapters.map((item, index)=><ChapterListItem {...item} key={index} />) }
    </div>
  )
}

export default Chapter