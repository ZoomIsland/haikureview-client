import React, { Component } from 'react';
import axios from 'axios';

// import MovieModel from '../../models/movies';
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
    // Long term goal: get this into the MovieModel
    const self = this;
    const omdb_key = process.env.REACT_APP_OMDB_API_KEY;
    const haiku_url = process.env.REACT_APP_API;
    const term = this.state.movieSearch.replace(" ", "+")
    if (term) {
      let omdbResults, haikuApiResults;
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const parsedOmdb = JSON.parse(this.response)
          omdbResults = parsedOmdb.Search
          // call next function
          axios.get(`${haiku_url}/movies/?search=${term}`)
            .then(res => {
              haikuApiResults = res.data
              console.log(omdbResults)
              const moviesArray = haikuApiResults;
              omdbResults.forEach(omdbResult => {
                omdbResult.id = 0;
                omdbResult.title = `${omdbResult.Title} (${omdbResult.Year})`;
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
              // not needed for null OMDB //
              for (let i = 0; i < (sortedMovies.length - 1); i++) {
                if (sortedMovies[i].title === sortedMovies[i + 1].title) {
                  if (sortedMovies[i].Title) {
                    sortedMovies.splice(i, 1)
                  } else {
                    sortedMovies.splice((i + 1), 1)
                  }
                }
              }
              self.setState({movies: sortedMovies});
            })
            .catch(err => console.log(err))
        }
      };
      xhttp.open("GET", `https://www.omdbapi.com/?s=${term}&page=1&apikey=${omdb_key}`, true);
      return xhttp.send();
    }
  }

  typeTest = () => {
    if (this.props.type === "add") {
      return  "none"
    } else {
      return 'searchOpen 1s 1'
    }
  }

  render() {
    return(
      <div className="movieSearch flex-center-column" style={{animation: this.typeTest()}}>
        <SearchBar 
          handleInputChange={this.handleInputChange} 
          onSearch={this.onSearch} 
          searchPlaceholder={this.props.searchPlaceholder} />
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