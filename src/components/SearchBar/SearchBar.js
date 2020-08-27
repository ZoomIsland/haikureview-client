import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
  return (
    <div className="flex-center searchContainer">
      <input placeholder={props.searchPlaceholder} onChange={props.handleInputChange} />
      <button onClick={props.onSearch}>Search</button>
    </div>
  )
}

export default SearchBar;