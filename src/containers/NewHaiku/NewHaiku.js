import React, { Component } from 'react';

import setAuthHeader from '../../utils/setAuthHeader';
import MovieModel from '../../models/movies';
import HaikuModel from '../../models/haikus';

import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import './NewHaiku.css'

class NewHaiku extends Component {
  state = {
    movie: "0",
    title: '',
    lineOne: '',
    lineTwo: '',
    lineThree: '',
    error: ''
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // Post request with user header
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.lineOne || !this.state.lineTwo || !this.state.lineThree) {
      this.setState({error: "*Fill out the full Haiku!"})
    }
    const movieIndex = (parseInt(this.state.movie) - 1)
    if (movieIndex === -1) {
      this.setState({error: "*Select a movie to review!"})
    } else {
      const chosenMovie = JSON.parse(this.state.movie);
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
          title: chosenMovie.Title,
          poster: chosenMovie.Poster,
        }
        MovieModel.createMovie(movieData)
          .then(res => {
            haikuData.movie = res.data.id
            return HaikuModel.createHaiku(haikuData)
              .then(res => {
                this.props.history.goBack()
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      } else {
        haikuData.movie = chosenMovie.id;
        HaikuModel.createHaiku(haikuData)
          .then(res => {
            this.props.history.goBack()
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

export default NewHaiku;