import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'

function NewHaiku() {
  return (
    <div className="newHaikuCard">
      <div className="innerNewCard">
        <SearchBar />
        {/* Search Results will go here */}
        <AddHaikuForm />
      </div>
    </div>
  )
}

export default NewHaiku;