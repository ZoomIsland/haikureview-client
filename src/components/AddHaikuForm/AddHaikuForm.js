import React from 'react';

import MovieSearch from '../../containers/MovieSearch/MovieSearch';

import WordsModel from '../../models/words'
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
          value={props.title}
          // onBlur={() => {
          //   WordsModel.getSyllables(props.title)
          //     .then(res=>console.log(res))}}
        ></input>
      <p className="haikuInputText">Haiku</p>
      <input id="lineOne"
          className="lineOneInput" 
          name="lineOne"
          onChange={props.handleInputChange}
          placeholder="Never have I seen"
          value={props.lineOne}
          onBlur={props.onLineFinish}></input>
      <label htmlFor="lineOne" className={props.lOneSyl === 5 ? "" : "red"}>{props.lOneSyl} / 5 Syllables</label>
      <input id="lineTwo" 
          className="lineTwoInput" 
          name="lineTwo"
          onChange={props.handleInputChange}
          placeholder="A thing like Jesus, a cloth,"
          value={props.lineTwo}
          onBlur={props.onLineFinish}></input>
      <label htmlFor="lineTwo" className={props.lTwoSyl === 7 ? "" : "red"}>{props.lTwoSyl} / 7 Syllables</label>
      <input id="lineThree" 
          className="lineThreeInput" 
          name="lineThree"
          onChange={props.handleInputChange}
          placeholder="And his bowling ball."
          value={props.lineThree}
          onBlur={props.onLineFinish}></input>
      <label htmlFor="lineThree" className={props.lThreeSyl === 5 ? "" : "red"}>{props.lThreeSyl} / 5 Syllables</label>
      <button class="submitHaikuBtn">Submit</button>
    </form>
  )
}

export default AddHaikuForm;