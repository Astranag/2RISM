import React from 'react'

function Hotels(props) {
  return (
<>
<div className='container'>
      <div className='row'>
        <div className='mb-4'>
          <div className="card" style={{backgroundColor: '#fcda51'}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"> {props.address}</p>
              <p className="card-text"> {props.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>








</>
  )
}

export default Hotels