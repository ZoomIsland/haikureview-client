import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Nav from './components/Nav/Nav';
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
    console.log(decodedToken)
    this.setState({currentUser: decodedToken.user_id})
  }

  logout = () => {
    localStorage.removeItem('token');
    setAuthHeader();
    this.setState({currentUser: ''});
  }


  render() {
    return (
      <div className="App">
        <Nav setCurrentUser={this.setCurrentUser} 
             currentUser={this.state.currentUser}
             logout={this.logout} />
        App is redefined
      </div>
    );
  }
}

export default App;
