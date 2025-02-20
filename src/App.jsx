import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu.jsx'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products' element = {<ProductMenu />} />
      </Routes>
    
    </div>
  )
}

export default App