import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
  return (
    <form className="flex-center searchContainer">
      <input placeholder="What movie would you like to review?" onChange={props.handleInputChange} />
      <button onClick={props.onSearch}>Search</button>
    </form>
  )
}

export default SearchBar;