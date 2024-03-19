import React from 'react'

function SearchBar(props) {
  return (
    <form>
        <input
        type='text'
        name = 'submit'
        value={props.value}
        onChange={props.input}
        placeholder='search countries...(capitalize first letter)'
        
        />
        <button
        type='submit'
        onClick={props.submit}>
         submit
        </button>


   </form>
  )
}

export default SearchBar