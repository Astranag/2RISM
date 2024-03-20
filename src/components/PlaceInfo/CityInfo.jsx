import React from 'react'

function CityInfo(props) {
  return (
    <>
    
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
      <p style={{ fontSize: '1.2em' }}>{props.description}</p>
    </div>
   
    </>
  )
}

export default CityInfo