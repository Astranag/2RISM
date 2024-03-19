import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/search',
  params: {
    limit: '30',
    offset: '0',
    units: 'km',
    location_id: '1',
    currency: 'USD',
    sort: 'relevance',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '0d2479b0d8mshd2a6bf887a9d146p10059fjsnb66549023be2',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const TravelAdvisorApi = {
  getLocations: function (query) {
    options.params.query = query; // Set the query parameter in the options

    return axios.request(options)
      
  }
};

export default TravelAdvisorApi;