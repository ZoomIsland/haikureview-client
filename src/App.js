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
        this.setState({haikus: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onMainClick = () => {
    HaikuModel.getAllHaikus()
      .then((res) => {
        this.setState({haikus: res.data})
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
        this.setState({haikus: res.data.haikus})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onProfileClick = () => {
    HaikuModel.getProfileHaikus(this.state.currentUser)
      .then((res) => {
        this.setState({haikusToSort: res.data.haikus})
        this.setState({haikus: res.data.haikus})
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
