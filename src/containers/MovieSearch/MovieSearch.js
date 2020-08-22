import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './MovieSearch.css'

class MovieSearch extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}movies/`)
      .then((res) => {
        this.setState({movies: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
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