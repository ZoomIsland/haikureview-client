import React from 'react';
import { Link } from 'react-router-dom';
import './AddHaikuCard.css';

function AddHaikuCard() {
  return (
    <Link to='/newhaiku/'>
      <div className='flex-center addHaikuMini'>
        <div className="flex-center innerAdd">
          <i className="fas fa-plus-square"></i>
          <p>Add Haiku</p>
        </div>
      </div>
    </Link>
  )
}

export default AddHaikuCard;