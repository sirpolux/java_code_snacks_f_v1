import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ChapterListItem from './components/chapter/ChapterListItem'
import Chapter from './components/chapter/Chapter'
import SubTopicList from './components/chapter/SubTopicList'
import SubTopic from './components/chapter/SubTopic'

function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/chapters' element={<Chapter/>} />
        <Route path='/list' element={<Chapter/>} />
        <Route path='/sub' element={<SubTopicList/>} />
        <Route path='/subtopic'  element = {<SubTopic/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
