import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import setAuthHeader from '../../utils/setAuthHeader';
import MovieModel from '../../models/movies';
import HaikuModel from '../../models/haikus';
import WordsModel from '../../models/words';

import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import './NewHaiku.css'

class NewHaiku extends Component {
  state = {
    movie: "0",
    title: '',
    lineOne: '',
    lineTwo: '',
    lineThree: '',
    lOneSyl: 0,
    lTwoSyl: 0,
    lThreeSyl: 0,
    error: ''
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onLineFinish = (e) => {
    let updateTarget, terms;
    switch (e.target.name) {
      case "lineOne":
        updateTarget = "lOneSyl";
        terms = this.state.lineOne;
        break;
      case "lineTwo":
        updateTarget = "lTwoSyl";
        terms = this.state.lineTwo;
        break;
      case "lineThree":
        updateTarget = "lThreeSyl";
        terms = this.state.lineThree;
        break;
    }
    if (terms.length === 0) {
      this.setState({[updateTarget]: 0})
    } else {
      WordsModel.getSyllables(terms)
        .then(res => {
          this.setState({[updateTarget]: res})
        })
    }
  }

  // Post request with user header
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.lineOne || !this.state.lineTwo || !this.state.lineThree) {
      this.setState({error: "*Fill out the full Haiku!"})
    } else if (this.state.movie === "0") {
      this.setState({error: "*Select a movie to review!"})
    } else if (this.state.lOneSyl !== 5 || this.state.lTwoSyl !== 7 || this.state.lThreeSyl !== 5){ 
      this.setState({error: "*Remember, haikus have 5 / 7 / 5 syllables!"})
    } else {
      const chosenMovie = JSON.parse(this.state.movie);
      console.log(chosenMovie)
      let token = localStorage.getItem('token');
      setAuthHeader(token)
      const haikuData = {
        title: this.state.title,
        line_one: this.state.lineOne,
        line_two: this.state.lineTwo,
        line_three: this.state.lineThree,
        user: this.props.currentUser
      }
      if (chosenMovie.id === 0) {
        const movieData = {
          title: chosenMovie.title,
          poster: chosenMovie.Poster,
        }
        MovieModel.createMovie(movieData)
          .then(res => {
            haikuData.movie = res.data.id
            return HaikuModel.createHaiku(haikuData)
              .then(res => {
                this.props.afterHaikuAdd()
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      } else {
        haikuData.movie = chosenMovie.id;
        HaikuModel.createHaiku(haikuData)
          .then(res => {
            this.props.afterHaikuAdd()
          })
          .catch(err => console.log(err))
      }
    }
  }

  render() {
    return (
      <div className="newHaikuPage">
        {/* <SearchBar /> */}
        <div className="cardContainer newHaikuCard flex-center">
          <div className="innerCardContainer innerNewCard">
            {/* Search Results will go here */}
            <AddHaikuForm 
                movies={this.state.movies} 
                handleInputChange={this.handleInputChange} 
                handleSubmit={this.handleSubmit}
                movie={this.state.movie}
                title={this.state.title}
                lineOne={this.state.lineOne}
                lineTwo={this.state.lineTwo}
                lineThree={this.state.lineThree}
                onLineFinish={this.onLineFinish}
                lOneSyl={this.state.lOneSyl}
                lTwoSyl={this.state.lTwoSyl}
                lThreeSyl={this.state.lThreeSyl}
                pageType="new" />
            { this.state.error &&
              <p className="addHaikuError">{this.state.error}</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NewHaiku);