import React from 'react'
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






    
    <button
    onClick={props.handleFormSubmit}
    type='submit'

    className="search-button"
    
    
    >submit
    
    </button>



    </form>
    
    
    
    </>
  )
}

export default SearchForm