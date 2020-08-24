import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Nav from './components/Nav/Nav';
import MainHub from './containers/MainHub/MainHub'
import Routes from './config/Routes'
import setAuthHeader from './utils/setAuthHeader';
import './App.css';

class App extends Component {
  state = {
    currentUser: ''
  };

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      this.setCurrentUser(token)
    }
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


  render() {
    return (
      <div className="app">
        <Nav setCurrentUser={this.setCurrentUser} 
             currentUser={this.state.currentUser}
             logout={this.logout} />
        <MainHub currentUser={this.state.currentUser} />
        {/* <div className="mainContainer">
          <Routes currentUser={this.state.currentUser} />
        </div> */}
      </div>
    );
  }
}

export default App;
