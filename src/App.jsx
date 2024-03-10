import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ChapterListItem from './components/chapter/ChapterListItem'
import Chapter from './components/chapter/Chapter'

function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/chapters' element={<Chapter/>} />
        <Route path='/list' element={<Chapter/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
