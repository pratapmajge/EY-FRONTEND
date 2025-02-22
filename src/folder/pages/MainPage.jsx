import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/Display'
import Chains from '../components/Foods'
import FirmCollections from '../components/Collections'
import Menu from '../components/Menu'

const MainPage = () => {
  return (
    <div>
        <TopBar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default MainPage