import React from 'react'

function Details(props) {
    return (
      <>
        <h1>Country: {props.name}</h1>
        <img src={props.flag} alt="flag" />
        <h3>The Capital: {props.capital}</h3>
        <h3>The continent: {props.region}</h3>
        <h3>Population: {props.popular} people</h3>
        <h3>Languages: {props.language}</h3>
        <h3>Currency: {props.currency}</h3>
        <h3>Side of the road they drive on: {props.side}</h3>
      </>
    );
  }
export default Details