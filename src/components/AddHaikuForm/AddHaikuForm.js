import React from 'react';

import MovieSearch from '../../containers/MovieSearch/MovieSearch';
import MovieSelect from '../MovieSelect/MovieSelect';
import './AddHaikuForm.css';

function AddHaikuForm(props) {
  return (
    <form className="flex-center-column addHaikuForm" onSubmit={props.handleSubmit}>
      {props.pageType === "new" &&
        <MovieSearch 
          searchPlaceholder="What movie would you like to review?"
          handleInputChange={props.handleInputChange}
          movie={props.movie} />
      }
      {props.pageType === 'update' && <p>Movie selected:  {props.movieTitle}</p>}
      <label htmlFor="haikuTitle" className="titleInputText">Title:</label>
      <input id="haikuTitle" 
          className="haikuTitleInput" 
          name="title"
          onChange={props.handleInputChange}
          placeholder="e.g. Polishing Bowling Balls"
          value={props.title}></input>
      <p className="haikuInputText">Haiku</p>
      <label htmlFor="lineOne" />
      <input id="lineOne"
          className="lineOneInput" 
          name="lineOne"
          onChange={props.handleInputChange}
          placeholder="Never have I seen"
          value={props.lineOne}></input>
      <label htmlFor="lineTwo"></label>
      <input id="lineTwo" 
          className="lineTwoInput" 
          name="lineTwo"
          onChange={props.handleInputChange}
          placeholder="A thing like Jesus, a cloth,"
          value={props.lineTwo}></input>
      <label htmlFor="lineThree"></label>
      <input id="lineThree" 
          className="lineThreeInput" 
          name="lineThree"
          onChange={props.handleInputChange}
          placeholder="And his bowling ball."
          value={props.lineThree}></input>
      <button>Submit</button>
    </form>
  )
}

export default AddHaikuForm;