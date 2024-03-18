import React from 'react'
import SearchForm from './SearchForm'
import { useState } from 'react'
// import TravelAdvisorApi from '../../utils/TravelAdvisorApi'
// import Info from './Info'
// import Hotels from './Hotels'
// import Attraction from '../../utils/Attraction'
// import Attractions from './Attractions'

function PlaceInfo() {

const [searchData, setSearchData] = useState({
    search: '',
    results: [],
    hotel: [],
    attraction: [],

})


function handleInputChange(e){

    let value = e.target.value 
  
    setSearchData({
      ...searchData,
      search: value
    })
  
  }
  
  function handleFormSubmit(event){
    event.preventDefault()
  
    searchLocation(searchData.search)
  
   
  
  }








  return (
    <>

    <h3>Search location</h3>
    <SearchForm 
   value ={searchData.search}
   handleFormSubmit={handleFormSubmit}
   handleInputChange={handleInputChange}
    />
    
    
    
    </>
  )
}

export default PlaceInfo