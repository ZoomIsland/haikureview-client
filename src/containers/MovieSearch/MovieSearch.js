import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './MovieSearch.css'

class MovieSearch extends Component {
  state = {
    movies: [],
    movieSearch: ""
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/movies/`)
      .then((res) => {
        this.setState({movies: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleInputChange = (e) => {
    this.setState({movieSearch: e.target.value})
  }
  onSearch = (e) => {
    e.preventDefault();
    axios.get("http://omdbapi.com/?s=kill+bill&apikey=68f2a1c0")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div className="movieSearch">
        <SearchBar handleInputChange={this.handleInputChange} onSearch={this.onSearch} />
        <div className="searchMovieList">
          <MovieList movies={this.state.movies} onMovieClick={this.props.onMovieClick} />
        </div>
      </div>
    )
  }
}

export default MovieSearch;