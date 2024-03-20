import React from 'react'
import Button from 'react-bootstrap/Button'
import './SearchForm.css'
function SearchForm(props) {
  return (
    <>
    
    
    <form className='search-form'>

    <input type="text"
    onChange={props.handleInputChange} 
    value={props.value}
    name='search'
    placeholder='Search location...'
    className='search-input'
    
    
    
    
    
    />






    
    <Button
    onClick={props.handleFormSubmit}
    type='submit'

    style={{background: 'rgb(62, 137, 250)', color: 'white'}}
    


    className="search-button"

    
    
    >submit
    
    </Button>



    </form>
    
    
    
    </>
  )
}

export default SearchForm