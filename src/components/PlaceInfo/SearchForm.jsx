import React from 'react'

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






    
    <button
    onClick={props.handleFormSubmit}
    type='submit'

    
    
    
    >submit
    
    </button>



    </form>
    
    
    
    
    
    </>
  )
}

export default SearchForm