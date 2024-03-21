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
            const result = searchData.results[0];
            let languageName = '';
            let currencyName = '';

            // Find the language name without knowing the key in advance
            Object.keys(result.languages).forEach(key => {
                languageName = result.languages[key];
                // You can break the loop here if needed
            });

            // Find the currency name without knowing the key in advance
            Object.keys(result.currencies).forEach(key => {
                currencyName = result.currencies[key].name;
                // You can break the loop here if needed
            });

            // Pass the language and currency names to the Details component
            // Update the state to trigger a re-render with the new props
            setSearchData(prevState => ({
                ...prevState,
                language: languageName,
                currency: currencyName
            }));
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
        <>
         <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}> Explore detailed information about a country</h1>
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
                language={searchData.language}
                currency={searchData.currency}
            />
        </>
    );
}

export default ExtraInfo;
