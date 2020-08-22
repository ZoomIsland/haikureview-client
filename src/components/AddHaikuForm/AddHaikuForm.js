import React from 'react';

function AddHaikuForm() {
  console.log("this has loaded")
  return (
    <form>
      <label htmlFor="movieTitle">Movie:</label>
      <input id="movieTitle" placeholder="e.g. The Big Lebowski" />
      <label htmlFor="haikuTitle">Title:</label>
      <input id="haikuTitle" placeholder="e.g. Polishing Bowling Balls"></input>
      <h2>Haiku</h2>
      <label htmlFor="lineOne" />
      <input id="lineOne" placeholder="Never have I seen"></input>
      <label htmlFor="lineTwo"></label>
      <input id="lineTwo" placeholder="A thing like Jesus, a cloth,"></input>
      <label htmlFor="lineThree"></label>
      <input id="lineThree" placeholder="And his bowling ball."></input>
      <button>Submit</button>
    </form>
  )
}

export default AddHaikuForm;