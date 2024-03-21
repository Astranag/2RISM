import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import PlaceInfo from './components/PlaceInfo/PlaceInfo'
import Map from './components/Map/Map'
import ExtraInfo from './components/ExtraInfo/ExtraInfo'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
    <Router>
    <Header />
    <Routes>
    <Route path='/home' element = {<a /> } />
    <Route path='/' element = {<PlaceInfo /> } />
    
    <Route path='/map' element={<Map />} />
    <Route path='/extra' element={<ExtraInfo />} />
     </Routes>
     </Router>
     <Footer />
    </>
  )
}

export default App
