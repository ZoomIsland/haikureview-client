import React, { Component } from 'react';
import axios from 'axios';

import setAuthHeader from '../../utils/setAuthHeader'

import SearchBar from '../../components/SearchBar/SearchBar';
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import '../NewHaiku/NewHaiku.css'

class UpdateHaiku extends Component {
  state = {
    movie: '0',
    title: '',
    lineOne: '',
    lineTwo: '',
    lineThree: '',
    movieTitle: ''
  }
  componentDidMount() {
    const haiku_id = this.props.match.params.id;
    axios.get(`${process.env.REACT_APP_API}/haikus/${haiku_id}/`)
      .then((res) => {
        this.setState({title: res.data.title})
        this.setState({lineOne: res.data.line_one})
        this.setState({lineTwo: res.data.line_two})
        this.setState({lineThree: res.data.line_three})
        this.setState({movieTitle: res.data.movie.title})
        this.setState({movie: res.data.movie.id})
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
    const haiku_id = this.props.match.params.id;
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
    axios.put(`${process.env.REACT_APP_API}/newhaiku/${haiku_id}/`, data)
      .then(res => {
        this.props.history.goBack()
      })
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
                handleSubmit={this.handleSubmit}
                movie={this.state.movie}
                movieTitle={this.state.movieTitle}
                title={this.state.title}
                lineOne={this.state.lineOne}
                lineTwo={this.state.lineTwo}
                lineThree={this.state.lineThree}
                pageType="update" />
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateHaiku;