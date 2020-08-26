import React, { Component } from 'react';
import axios from 'axios';

import setAuthHeader from '../../utils/setAuthHeader'

import WordsModel from '../../models/words'
import AddHaikuForm from '../../components/AddHaikuForm/AddHaikuForm'
import '../NewHaiku/NewHaiku.css'

class UpdateHaiku extends Component {
  state = {
    movie: '0',
    title: '',
    lineOne: '',
    lineTwo: '',
    lineThree: '',
    movieTitle: '',
    lOneSyl: 0,
    lTwoSyl: 0,
    lThreeSyl: 0,
    error: ''
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
        WordsModel.getSyllables(this.state.lineOne)
          .then(res => {
            this.setState({lOneSyl: res})
          })
        WordsModel.getSyllables(this.state.lineTwo)
          .then(res => {
            this.setState({lTwoSyl: res})
          })
        WordsModel.getSyllables(this.state.lineThree)
          .then(res => {
            this.setState({lThreeSyl: res})
          })
      })
      .catch(err =>  console.log(err))
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onLineFinish = (e) => {
    let updateTarget, terms;
    switch (e.target.name) {
      case "lineOne":
        updateTarget = "lOneSyl";
        terms = this.state.lineOne;
        break;
      case "lineTwo":
        updateTarget = "lTwoSyl";
        terms = this.state.lineTwo;
        break;
      case "lineThree":
        updateTarget = "lThreeSyl";
        terms = this.state.lineThree;
        break;
    }
    if (terms.length === 0) {
      this.setState({[updateTarget]: 0})
    } else {
      WordsModel.getSyllables(terms)
        .then(res => {
          this.setState({[updateTarget]: res})
        })
    }
  }

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
                onLineFinish={this.onLineFinish}
                lOneSyl={this.state.lOneSyl}
                lTwoSyl={this.state.lTwoSyl}
                lThreeSyl={this.state.lThreeSyl}
                pageType="update" />
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateHaiku;