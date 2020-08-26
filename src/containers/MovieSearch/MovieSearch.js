import React, { Component } from 'react';
import axios from 'axios';
import OmdbApi from 'omdb-api-pt';

import MovieModel from '../../models/movies';
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
    let omdbResults, haikuApiResults;
    e.preventDefault();
    if (this.state.movieSearch) {
      MovieModel.searchOMDB(this.state.movieSearch)
        .then(res => {
          let movies = res.Search
          omdbResults = movies.filter(movie => movie.Poster !== "N/A")
          MovieModel.searchHaikuDB(this.state.movieSearch)
            .then(res => {
              haikuApiResults = res.data
              const moviesArray = haikuApiResults;
              omdbResults.forEach(omdbResult => {
                omdbResult.id = 0;
                omdbResult.title = omdbResult.Title
                moviesArray.push(omdbResult)
              }) 
              const sortedMovies = moviesArray.sort(function (a, b) {
                if (a.title < b.title) {
                  return -1;
                }
                if (a.title > b.title) {
                  return 1;
                }
                return 0;
              })
              for (let i = 0; i < (sortedMovies.length - 1); i++) {
                if (sortedMovies[i].title === sortedMovies[i + 1].title) {
                  if (sortedMovies[i].Title) {
                    sortedMovies.splice(i, 1)
                  } else {
                    sortedMovies.splice((i + 1), 1)
                  }
                }
              }
              this.setState({movies: sortedMovies})
            })
            .catch(err => console.log(err))
          // this.setState({movies: movies})
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    return(
      <div className="movieSearch">
        <SearchBar handleInputChange={this.handleInputChange} onSearch={this.onSearch} />
        <MovieList movies={this.state.movies} onMovieClick={this.props.onMovieClick} />
      </div>
    )
  }
}

export default MovieSearch;