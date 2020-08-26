import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Nav from './components/Nav/Nav';
import setAuthHeader from './utils/setAuthHeader';
import SpacerRoutes from './config/SpacerRoutes';
import HaikuRoutes from './config/HaikuRoutes';
import HaikuModel from './models/haikus';
import './App.css';

class App extends Component {
  state = {
    currentUser: '',
    haikus: [],
    haikusToSort: [],
    movies: [],
  };

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      this.setCurrentUser(token)
    }
    HaikuModel.getAllHaikus()
      .then((res) => {
        const sortedResults = this.getAvgAndSort(res.data);
        this.setState({haikus: sortedResults})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getAvgAndSort = (haikuArray) => {
    console.log(haikuArray)
    const arrayWithRatings = []
    haikuArray.forEach(haiku => {
      const midHaiku = haiku;
      let totalRating = 0;
      let ratingCount = haiku.comments.length;
      haiku.comments.forEach(comment => {
        totalRating += comment.rating
        if (comment.rating === 0) {
          ratingCount--;
        }
      })
      console.log(totalRating, ratingCount)
      if (ratingCount === 0) {
        midHaiku.avgRating = 0
      } else {
        midHaiku.avgRating = totalRating / ratingCount;
      }
      arrayWithRatings.push(midHaiku);
    })
    const sortedArray = arrayWithRatings.sort(function(a,b) {
      if (a.avgRating < b.avgRating) {
        return 1;
      }
      if (a.avgRating > b.avgRating) {
        return -1;
      }
      return 0;
    })
    return sortedArray;
  }

  onMainClick = () => {
    HaikuModel.getAllHaikus()
      .then((res) => {
        const sortedResults = this.getAvgAndSort(res.data);
        this.setState({haikus: sortedResults})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setCurrentUser = (token) => {
    localStorage.setItem('token', token);
    setAuthHeader(token);
    const decodedToken = jwt_decode(token);
    this.setState({currentUser: decodedToken.user_id})
  }

  logout = () => {
    localStorage.removeItem('token');
    setAuthHeader();
    this.setState({currentUser: ''});
  }

  onMovieClick = (movie_id) => {
    if (movie_id === 0) {
      this.setState({haikus: []})
    }
    HaikuModel.getMovieHaikus(movie_id)
      .then((res) => {
        const sortedResults = this.getAvgAndSort(res.data.haikus);
        this.setState({haikus: sortedResults})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onProfileClick = () => {
    HaikuModel.getProfileHaikus(this.state.currentUser)
      .then((res) => {
        const sortedResults = this.getAvgAndSort(res.data.haikus);
        this.setState({haikus: sortedResults})
        this.setState({haikusToSort: sortedResults})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onProfileMovieClick = (movie_id) => {
    let tempHaikus = this.state.haikusToSort.filter(haiku => haiku.movie.id === movie_id);
    this.setState({haikus: tempHaikus})
  }


  render() {
    return (
      <>
        <SpacerRoutes />
        <div className="app">
          <Nav setCurrentUser={this.setCurrentUser} 
              currentUser={this.state.currentUser}
              logout={this.logout}
              onMainClick={this.onMainClick}
              onMovieClick={this.onMovieClick}
              onProfileClick={this.onProfileClick}
              onProfileMovieClick={this.onProfileMovieClick} />
          <HaikuRoutes 
            currentUser={this.state.currentUser}
            haikus={this.state.haikus} />
        </div>
      </>
    );
  }
}

export default App;
