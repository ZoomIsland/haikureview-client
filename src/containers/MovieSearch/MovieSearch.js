import React, { Component } from 'react';
import axios from 'axios';

import MovieModel from '../../models/movies';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieRoutes from '../../config/MovieRoutes';
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
    if (this.state.movieSearch) {
      MovieModel.searchAPIs(this.state.movieSearch)
        .then(res=> {
          console.log(res)
          this.setState({movies: res})
        })
        .catch(err=> console.log(err))
    }
  }

  render() {
    return(
      <div className="movieSearch flex-center-column">
        <SearchBar 
          handleInputChange={this.handleInputChange} 
          onSearch={this.onSearch} 
          searchPlaceholder={this.props.searchPlaceholder} />
        {/* <MovieList movies={this.state.movies} onMovieClick={this.props.onMovieClick} /> */}
        <MovieRoutes 
          movies={this.state.movies} 
          onMovieClick={this.props.onMovieClick}
          handleInputChange={this.props.handleInputChange}
          movie={this.props.movie} />
      </div>
    )
  }
}

export default MovieSearch;