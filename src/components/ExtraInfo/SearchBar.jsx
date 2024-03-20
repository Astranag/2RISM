import React from 'react'
import './SearchBar.css'
function SearchBar(props) {
  return (
    <form className="search-form">
    <input
      type='text'
      name='submit'
      value={props.value}
      onChange={props.input}
      placeholder='Search countries...(please captilize first letter)'
      className="search-input"
    />
    <button
      type='submit'
      onClick={props.submit}
      className="search-button"
    >
      Search
    </button>
  </form>
  )
}

export default SearchBar