import React from 'react';

import MovieSelect from '../MovieSelect/MovieSelect'
import './AddHaikuForm.css'

function AddHaikuForm(props) {
  return (
    <form className="flex-center-column addHaikuForm" onSubmit={props.handleSubmit}>
      <MovieSelect 
          movies={props.movies}
          handleInputChange={props.handleInputChange} />
      <label htmlFor="haikuTitle" className="titleInputText">Title:</label>
      <input id="haikuTitle" 
          className="haikuTitleInput" 
          name="title"
          onChange={props.handleInputChange}
          placeholder="e.g. Polishing Bowling Balls"></input>
      <p className="haikuInputText">Haiku</p>
      <label htmlFor="lineOne" />
      <input id="lineOne"
          className="lineOneInput" 
          name="lineOne"
          onChange={props.handleInputChange}
          placeholder="Never have I seen"></input>
      <label htmlFor="lineTwo"></label>
      <input id="lineTwo" 
          className="lineTwoInput" 
          name="lineTwo"
          onChange={props.handleInputChange}
          placeholder="A thing like Jesus, a cloth,"></input>
      <label htmlFor="lineThree"></label>
      <input id="lineThree" 
          className="lineThreeInput" 
          name="lineThree"
          onChange={props.handleInputChange}
          placeholder="And his bowling ball."></input>
      <button>Submit</button>
    </form>
  )
}

export default AddHaikuForm;