import React, { Component } from 'react';
import axios from 'axios';

import setAuthHeader from '../../utils/setAuthHeader'

import SearchBar from '../../components/SearchBar/SearchBar';
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import './NewHaiku.css'

class NewHaiku extends Component {
  state = {
    movies: [],
    movie: '',
    title: '',
    lineOne: '',
    lineTwo: '',
    lineThree: ''
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
    this.setState({[e.target.name]: e.target.value})
  }

  // Post request with user header
  handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    setAuthHeader(token)
    const data = {
      movie: parseInt(this.state.movie),
      title: this.state.title,
      line_one: this.state.lineOne,
      line_two: this.state.lineTwo,
      line_three: this.state.lineThree,
      user: this.props.currentUser
    }
    axios.post(`${process.env.REACT_APP_API}/newhaiku/`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
                handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default NewHaiku;