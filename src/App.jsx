import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import PlaceInfo from './components/PlaceInfo/PlaceInfo'
import Map from './components/Map/Map'
import ExtraInfo from './components/'

function App() {
  
  return (
    <>
     <Header />
     <PlaceInfo />
    </>
  )
}

export default App
