import axios from "axios";


const option = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
    params: {
      location_id: '298571',
      currency: 'USD',
      lang: 'en_US',
      lunit: 'km',
      sort: 'recommended'
    },
    headers: {
      'X-RapidAPI-Key': '0d2479b0d8mshd2a6bf887a9d146p10059fjsnb66549023be2',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };


  const attractionApi ={
    getAttraction: function(query){
    option.params.location_id = query

    return axios.request(option)

    }

  }


  export default attractionApi