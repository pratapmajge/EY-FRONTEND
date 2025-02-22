import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './folder/pages/MainPage.jsx'
import Menu from './folder/components/Menu.jsx'
import { API_URL } from './folder/api.js'

const App = () => {
  // console.log(API_URL);
  
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