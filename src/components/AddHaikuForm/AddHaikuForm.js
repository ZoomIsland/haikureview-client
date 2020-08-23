import React from 'react';

import MovieSelect from '../MovieSelect/MovieSelect'
import './AddHaikuForm.css'

function AddHaikuForm(props) {
  console.log("this has loaded")
  return (
    <form className="flex-center-column addHaikuForm">
      <MovieSelect movies={props.movies} />
      <label htmlFor="haikuTitle" className="titleInputText">Title:</label>
      <input id="haikuTitle" className="haikuTitleInput" placeholder="e.g. Polishing Bowling Balls"></input>
      <p className="haikuInputText">Haiku</p>
      <label htmlFor="lineOne" />
      <input id="lineOne" className="lineOneInput" placeholder="Never have I seen"></input>
      <label htmlFor="lineTwo"></label>
      <input id="lineTwo" className="lineTwoInput" placeholder="A thing like Jesus, a cloth,"></input>
      <label htmlFor="lineThree"></label>
      <input id="lineThree" className="lineThreeInput" placeholder="And his bowling ball."></input>
      <button>Submit</button>
    </form>
  )
}

export default AddHaikuForm;