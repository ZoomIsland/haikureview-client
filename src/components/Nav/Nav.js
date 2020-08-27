import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import LoginBox from './LoginBox/LoginBox';
import SignupBox from './SignupBox/SignupBox';
import Routes from'../../config/Routes';
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
        <h1 className="siteName">
          <NavLink 
            className="mainLink" 
            to="/" 
            onClick={(e) => {
              this.formAppear(e);
              this.props.onMainClick()}} 
            value="">Haiku Review</NavLink>
        </h1>
        <div className="navLinks">
          <NavLink 
            to="/movies/"><div className="navSearch" value="" onClick={(e) => {
              this.formAppear(e);
              this.props.navOpen()}
            }>Search Movies</div></NavLink>
          {/* <a href="#">Random Haiku</a> */}
          {!this.props.currentUser && (
            <React.Fragment>
              <button className="navLogBtns" onClick={(e) => {
                this.formAppear(e)}} value="login">Login</button>
              <button className="navLogBtns" onClick={(e) => {
                this.formAppear(e)}} value="signup">Sign Up</button>
            </React.Fragment>
          )}
          {this.props.currentUser && (
            <React.Fragment>
              <NavLink to="/newhaiku/" onClick={this.props.navClose}><div className="navAdd">Add Haiku</div></NavLink>
              <NavLink 
                to={`/profiles/${this.props.currentUser}`} 
                onClick={(e) => {
                  this.formAppear(e);
                  this.props.navOpen();
                  this.props.onProfileClick()}}><div className="navProfile">Profile</div></NavLink>
              <button className="navLogBtns" onClick={this.props.logout}>Logout</button>
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
        <div className={this.props.drawerHide + " haikuOrderDrawers"}>
          <Routes 
            currentUser={this.props.currentUser} 
            onMovieClick={this.props.onMovieClick}
            onProfileMovieClick={this.props.onProfileMovieClick} />
        </div>
      </nav>
    )
  }
}

export default Nav;