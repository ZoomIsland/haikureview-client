import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import LoginBox from './LoginBox/LoginBox'
import SignupBox from './SignupBox/SignupBox'
import './Nav.css'

class Nav extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    formType: ""
  }

  formAppear = (e) => {
    this.setState({formType: e.target.value})
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // implementing for login right now
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    switch (this.state.formType) {
      case "login":
        axios.post(`${process.env.REACT_APP_API}/login/`, data)
          .then((res) => {
            this.setState({formType: ""})
            console.log(res);
            this.props.setCurrentUser(res.data.token);
          })
          .catch((err) => {
            console.log(err)
          })
        break;
      case "signup":
        data.email = this.state.email;
        axios.post(`${process.env.REACT_APP_API}/register/`, data)
          .then((res) => {
            this.setState({formType: ""})
            console.log(res)
            this.props.setCurrentUser(res.data.token);
          })
          .catch((err) => {
            console.log(err)
          })
        break;
      default:
        console.log("Must submit a login or signup!")
    }
  }

  render() {
    return (
      <nav>
        <div className="siteName">
          <NavLink className="mainLink" to="/" onClick={this.formAppear} value="">Haiku Review</NavLink>
        </div>
        <div className="navLinks">
          <NavLink to="/movies/" onClick={this.formAppear} value=""><div className="navSearch">Search Movies</div></NavLink>
          {/* <a href="#">Random Haiku</a> */}
          {!this.props.currentUser && (
            <React.Fragment>
              <button onClick={this.formAppear} value="login">Login</button>
              <button onClick={this.formAppear} value="signup">Sign Up</button>
            </React.Fragment>
          )}
          {this.props.currentUser && (
            <React.Fragment>
              <NavLink to="/newhaiku/"><div className="navAdd">Add Haiku</div></NavLink>
              <NavLink to="/profile/"><div className="navProfile">Profile</div></NavLink>
              <button onClick={this.props.logout}>Logout</button>
            </React.Fragment>
          )}
        </div>
        {this.state.formType === 'login' && (
          <LoginBox 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password} />
        )}
        {this.state.formType === 'signup' && (
          <SignupBox
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password} />
        )}
      </nav>
    )
  }
}

export default Nav;