import React from 'react'

function Search(props) {
  return (


    <form>
        <input
        type='text'
        name='search'
        value={props.value}
        onChange={props.handleInput}
        />

        <button
          type='submit'
          name='button'
          onClick={props.handleChange}
          
          >
            submit
        </button>

    </form>
  )
}

export default Search