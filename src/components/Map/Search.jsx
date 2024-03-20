import React from 'react'
import './Search.css'

function Search(props) {
  return (


    <form  className='search-form'> 
        <input 
        type='text'
        name='search'
        value={props.value}
        onChange={props.handleInput}
        placeholder='Search...'
        className="search-input"
        />

        <button
          type='submit'
          name='button'
          onClick={props.handleChange}
          className="search-button"
          >
            submit
        </button>

    </form>
  )
}

export default Search