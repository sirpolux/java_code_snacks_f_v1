import React from 'react'
import ChapterListItem from './ChapterListItem';

const Chapter = () => {
    const chapters=[{
        
            "name":"CHAPTER ONE",
            "topic":"Introduction to computer programming",
            "duration":"30mins",
            "exe":"3"
        },
        {
            "name":"CHAPTER TWO",
            "topic":"Basic data types, variables and Constants.",
            "duration":"40mins",
            "exe":"8"
        },
        {
            "name":"CHAPTER THREE",
            "topic":"Operators",
            "duration":"50mins",
            "exe":"7"
        },
        
        {
            "name":"CHAPTER FOUR",
            "topic":"Conditional Statements",
            "duration":"50mins",
            "exe":"8"
        },
        {
            "name":"CHAPTER FIVE",
            "topic":"Loops",
            "duration":"40mins",
            "exe":"7"
        },
        {
            "name":"CHAPTER SIX",
            "topic":"Functions",
            "duration":"50mins",
            "exe":"8"
        }
    ];
  return(
    <div>
        {chapters.map((item, index)=><ChapterListItem {...item} />) }
    </div>
  )
}

export default Chapter