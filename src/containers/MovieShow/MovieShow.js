import React, { Component } from 'react';
import axios from 'axios';

import MovieDetail from '../../components/MovieDetail/MovieDetail';
import AddHaikuCard from '../../components/AddHaikuCard/AddHaikuCard';
import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel';
import './MovieShow.css'

class MovieShow extends Component {
  state = {
    movie: {},
    haikus: []
  }

  componentDidMount() {
    // check axios for a way of doing this easier!
    const movie_id = this.props.match.params.id
    axios.get(`${process.env.REACT_APP_API}movies/${movie_id}/`)
      .then((res) => {
        this.setState({movie: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
      axios.get(`${process.env.REACT_APP_API}haikus/`)
      .then((res) => {
        this.setState({haikus: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="movieShow">
        <MovieDetail movie={this.state.movie} />
        <div className="movieHaikus">
          {this.props.currentUser && (
            <AddHaikuCard />
          )}
          <HaikuCarousel haikus={this.state.haikus} />
        </div>
      </div>
    )
  }
}

export default MovieShow;