import React from 'react';
import { Link } from 'react-router-dom';
import './AddHaikuCard.css';

function AddHaikuCard() {
  return (
    <Link to='/newhaiku/'>
      <div className='addHaikuMini'>
        <div className="innerAdd">
          <i className="fas fa-plus-square"></i>
          <p>Add Haiku</p>
        </div>
      </div>
    </Link>
  )
}

export default AddHaikuCard;