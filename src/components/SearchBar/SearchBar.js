import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
  return (
    <div className="flex-center searchContainer">
      <input placeholder={props.searchPlaceholder} onChange={props.handleInputChange} />
      <div className="searchBtn" onClick={props.onSearch}>Search</div>
    </div>
  )
}

export default SearchBar;