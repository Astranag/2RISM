import React from 'react';

function SearchBar(props) {
  return (
    <form className="flex items-center justify-center mt-8">
      <input
        type='text'
        name='submit'
        value={props.value}
        onChange={props.input}
        placeholder='Search countries... (Please capitalize first letter)'
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        type='submit'
        onClick={props.submit}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
