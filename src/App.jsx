import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './folder/pages/MainPage.jsx'
import Menu from './folder/components/Menu.jsx'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <MainPage />} />
          <Route path='/products' element = {<Menu />} />
      </Routes>
    
    </div>
  )
}

export default App