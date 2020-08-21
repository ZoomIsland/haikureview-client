import React, { Component } from 'react';
import axios from 'axios';

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
        axios.post(`${process.env.REACT_APP_API}login/`, data)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        break;
      case "signup":
        data.email = this.state.email;
        axios.post(`${process.env.REACT_APP_API}register/`, data)
          .then((res) => {
            console.log(res)
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
          <a href="/">Haiku Review</a>
        </div>
        <div className="movieSearch">
          <label htmlFor="movieTitle" />
          <input id="movieTitle" placeholder="Search Movies" />
          <button>Go</button>
        </div>
        <div className="navLinks">
          {/* <a href="#">Random Haiku</a> */}
          <button onClick={this.formAppear} value="login">Login</button>
          <button onClick={this.formAppear} value="signup">Sign Up</button>
          {/* <a href="#">Add Haiku</a>
          <a href="#">Logout</a> */}
        </div>
        {this.state.formType === 'login' && (
          <div className="loginBox">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username" />
              <input onChange={this.handleChange} id="username" name="username" placeholder="Username" value={this.state.username} />
              <label htmlFor="password" />
              <input onChange={this.handleChange} id="password" name="password" placeholder="Password" value={this.state.password} />
              <button type="submit">Log in</button>
            </form>
          </div>
        )}
        {this.state.formType === 'signup' && (
          <div className="signupBox">
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="signuser" />
              <input onChange={this.handleChange} id="signuser" name="username" placeholder="Username" value={this.state.username} />
              <label htmlFor="signemail" />
              <input onChange={this.handleChange} id="signemail" name="email" placeholder="Email" value={this.state.email} />
              <label htmlFor="signpass" />
              <input onChange={this.handleChange} id="signpass" name="password" placeholder="Password" value={this.state.password} />
              <button>Register</button>
            </form>
          </div>
        )}
      </nav>
    )
  }
}

export default Nav;