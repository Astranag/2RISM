import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://maps-data.p.rapidapi.com/geocoding.php',
  params: {
    
    lang: 'en',
    country: 'fr'
  },
  headers: {
    'X-RapidAPI-Key': '0d2479b0d8mshd2a6bf887a9d146p10059fjsnb66549023be2',
    'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
  }
};


const LocationApi = {
    getGeo: function (query) {
      options.params.query = query; // Set the query parameter in the options
  
      return axios.request(options)
        
    }
  };
  
  export default LocationApi;