import React from 'react'
import Button from 'react-bootstrap/Button'

function SearchForm(props) {
  return (
    <>
    
    <form>

    <input type="text"
    onChange={props.handleInputChange} 
    value={props.value}
    name='search'
    placeholder='Search location...'
    
    
    
    
    
    />






    
    <Button
    onClick={props.handleFormSubmit}
    type='submit'
    style={{background: 'rgb(62, 137, 250)', color: 'white'}}
    
    
    
    >submit
    
    </Button>



    </form>
    
    
    
    
    
    </>
  )
}

export default SearchForm