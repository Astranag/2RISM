import React from 'react'

function Info(props) {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 mb-4'>
    <h1>{props.name}</h1>
    <img src= {props.image} />
    <p>{props.description}</p>

    </div>
    </div>
    </div>
    </>
  )
}

export default Info