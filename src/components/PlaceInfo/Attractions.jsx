import React from 'react'

function Attractions(props) {
    console.log(props)
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 mb-4'>
  <div className="card " >
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.address}</p>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.number}</p>
    <p className="card-text">{props.ranking}</p>
    <a href={props.booking} target='_blank' className="btn btn-primary">Book</a>
  </div>
</div>

</div>
</div>
</div>
    
    
    
    </>

  )
}

export default Attractions