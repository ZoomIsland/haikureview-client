import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import './NewHaiku.css'

class NewHaiku extends Component {
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
    return (
      <div className="newHaikuPage">
        {/* <SearchBar /> */}
        <div className="cardContainer newHaikuCard flex-center">
          <div className="innerCardContainer innerNewCard">
            {/* Search Results will go here */}
            <AddHaikuForm movies={this.state.movies} />
          </div>
        </div>
      </div>
    )
  }
}

export default NewHaiku;