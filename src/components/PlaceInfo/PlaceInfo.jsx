import React from 'react'
import SearchForm from './SearchForm'
import { useState } from 'react'
import TravelAdvisorApi from '../../utils/TravelAdvisorApi'
import Info from './Info'
import Hotels from './Hotels'
import Attraction from '../../utils/Attraction'
import Attractions from './Attractions'

function PlaceInfo() {

const [searchData, setSearchData] = useState({
    search: '',
    results: [],
    hotel: [],
    attraction: [],
})









  return (
    <div>PlaceInfo</div>
  )
}

export default PlaceInfo