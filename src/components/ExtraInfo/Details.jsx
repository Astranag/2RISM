import React from 'react'
import './Details.css'

function Details(props) {
    return (
      <>
         <div className="details-container">
      <h1>Country: {props.name}</h1>
      <img src={props.flag} alt="flag" className="flag-img" />
      <div className="detail-item">
        <h3>The Capital:</h3>
        <p>{props.capital}</p>
      </div>
      <div className="detail-item">
        <h3>The continent:</h3>
        <p>{props.region}</p>
      </div>
      <div className="detail-item">
        <h3>Population:</h3>
        <p>{props.popular} people</p>
      </div>
      <div className="detail-item">
        <h3>Languages:</h3>
        <p>{props.language}</p>
      </div>
      <div className="detail-item">
        <h3>Currency:</h3>
        <p>{props.currency}</p>
      </div>
      <div className="detail-item">
        <h3>Side of the road they drive on:</h3>
        <p>{props.side}</p>
      </div>
    </div>
      </>
    );
  }
export default Details