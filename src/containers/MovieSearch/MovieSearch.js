import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './MovieSearch.css'

class MovieSearch extends Component {
  state = {
    movies: [1, 2, 3]
  }
  render() {
    return(
      <div className="movieSearch">
        <SearchBar />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default MovieSearch;