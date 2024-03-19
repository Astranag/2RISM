import axios from "axios";

const country = {
    getcountry: function(name) {
        let url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
        return axios.get(url); // Return the axios request
    }
};

export default country;