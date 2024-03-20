import React from 'react';

function Details(props) {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Country: {props.name}</h1>
      <div className="mb-4">
        <img src={props.flag} alt="flag" className="max-w-full h-auto" />
      </div>
      <h3 className="text-xl font-semibold mb-2">The Capital: {props.capital}</h3>
      <h3 className="text-xl font-semibold mb-2">The Continent: {props.region}</h3>
      <h3 className="text-xl font-semibold mb-2">Population: {props.popular} people</h3>
      <h3 className="text-xl font-semibold mb-2">Side of the Road They Drive On: {props.side}</h3>
    </div>
  );
}

export default Details;
