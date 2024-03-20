import React, { useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Maps from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useState } from 'react';
import Search from './Search'
import Location from '.././utils/Locations'
import { useGeographic } from 'ol/proj';


function Map() {

const [location,setLocation ] = useState({
  search: '',
  lat: 0,
  lon: 0,
})


function searchLocation(query){

Location.getGeo(query)
.then(response =>{
 
  setLocation(prevLocation =>({
    ...prevLocation,
    lat : response.data.data.lat,
    lon : response.data.data.lng,
  }))

  console.log(location.lat)
  console.log(location.lon)

  
})


}

function handleInput(e){
  let value = e.target.value

  setLocation({
    ...location,
    search: value
  })
}


function handleChange(e){
  e.preventDefault()


  searchLocation(location.search)
}


useEffect(() => {
  const map = new Maps({
    target: 'map',
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: [location.lon, location.lat], // Default center
      zoom: 10 // Default zoom level
    })
  });

  // Update the map view when location changes
  map.getView().setCenter([location.lon, location.lat]);
  map.getView().setZoom(10);
  useGeographic();
  return () => {
    map.setTarget(null); // Cleanup on unmount
  };
}, [location]);
return (
<>
<h1 style={{ fontSize: '40px', color: '#333', textAlign: 'center', marginBottom: '20px' }}> Discover the World</h1>
<Search

value={location.search}
handleInput = {handleInput}
handleChange = {handleChange}


/>




    <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </>
);
}

export default Map