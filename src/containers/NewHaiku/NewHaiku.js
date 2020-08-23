import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import './NewHaiku.css'

function NewHaiku() {
  return (
    <div className="newHaikuPage">
      <SearchBar />
      <div className="cardContainer newHaikuCard flex-center">
        <div className="innerCardContainer innerNewCard">
          {/* Search Results will go here */}
          <AddHaikuForm />
        </div>
      </div>
    </div>
  )
}

export default NewHaiku;