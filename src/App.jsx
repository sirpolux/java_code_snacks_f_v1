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
import Nav from './components/common/Nav'
import { TopicTopContent } from './components/common/TopicTopContent'
import TopicMainContent from './components/common/TopicMainContent'
import ExampleItem from './components/chapter/ExampleItem'
import ImportanceItem from './components/chapter/ImportanceItem'
import Test from './components/chapter/Test'

function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/chapters' element={<Chapter/>} />
        <Route path='/list' element={<Chapter/>} />
        <Route path='/nav' element={<Nav/>} />
        <Route path='/subtopic'  element = {<SubTopic/>} />


        <Route path='/main'  element = {<TopicMainContent/>} />
        <Route path='/top'  element = {<TopicTopContent/>} />
        <Route path='/exaList'  element = {<ExampleItem/>} />
        <Route path='/exaList'  element = {<ExampleItem/>} />
        <Route path='/imp'  element = {<ImportanceItem/>} />
        <Route path='/test'  element = {<Test/>} />
        



        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
