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



  function searchLocation(query){
    TravelAdvisorApi.getLocations(query)
    .then(response => {
      console.log(response.data);
      console.log(response.data.data[0].result_object.name)
      const filteredResults = response.data.data.filter(item => item.result_type === 'lodging')
      const firstFiveResults = filteredResults.slice(0, 5);
      console.log(firstFiveResults)
    setSearchData({
      search: query,
      results: response.data.data[0],
      hotel: firstFiveResults,
      attraction : []
    })
  
      Attraction.getAttraction(response.data.data[0].result_object.location_id)
      .then(attractionResponse => {
        console.log(attractionResponse.data);
        const attractionResults = attractionResponse.data.data
        const firstFive = attractionResults.slice(0,5)
        console.log(firstFive[0].description)
        setSearchData( prevState => ({
          ...prevState,
          attraction : firstFive
        }))
     
      
      })
      
      
   
    })
    .catch(error => {
      console.error(error);
      throw error; 
    });
  
   
  }
  
  





  return (
    <>

    <h3>Search location</h3>
    <SearchForm 
   value ={searchData.search}
   handleFormSubmit={handleFormSubmit}
   handleInputChange={handleInputChange}
    />
    
       {/* <Info 
        name = {searchData.results.result_object.name}
      image = {searchData.results.result_object.photo.images.large.url}
      description = {searchData.results.result_object.geo_description}
      
    />       */}
    

    { searchData.hotel.map((hotelObj,i) => (

<Hotels 

key = {i}
title ={hotelObj.result_object.name}
img = {hotelObj.result_object.photo.images.original.url}
address = {hotelObj.result_object.address}
rating = {hotelObj.result_object.rating}

/>


))



} 


    
    </>
  )
}

export default PlaceInfo