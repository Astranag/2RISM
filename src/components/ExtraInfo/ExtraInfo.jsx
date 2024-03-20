import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import country from '.././utils/RestCountries';
import Details from './Details';

function ExtraInfo() {
    const [searchData, setSearchData] = useState({
        search: '',
        results: [],
    });

    useEffect(() => {
        if (searchData.results.length > 0) {
            console.log(searchData.results[0].name.common);
            // Access other properties as needed
        }
    }, [searchData.results]);

    function searchInfo(query) {
        country.getcountry(query)
            .then(response => {
                setSearchData(prevState => ({
                    ...prevState,
                    results: response.data
                }));
            });
    }

    function input(e) {
        let value = e.target.value;
        setSearchData({
            ...searchData,
            search: value
        });
    }

    function submit(e) {
        e.preventDefault();
        searchInfo(searchData.search);
    }

    return (
        <div className="container mx-auto mt-8">
            <SearchBar
                value={searchData.search}
                submit={submit}
                input={input}
            />
            <Details
                name={searchData.results.length > 0 ? searchData.results[0].name.common : ''}
                flag={searchData.results.length > 0 ? searchData.results[0].flags.png : ''}
                region={searchData.results.length > 0 ? searchData.results[0].region : ''}
                capital={searchData.results.length > 0 ? searchData.results[0].capital[0] : ''}
                popular={searchData.results.length > 0 ? searchData.results[0].population : ''}
                side={searchData.results.length > 0 ? searchData.results[0].car.side : ''}
            />
        </div>
    );
}

export default ExtraInfo;
