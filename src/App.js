import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Nav from './components/Nav/Nav';
import setAuthHeader from './utils/setAuthHeader';
// import SpacerRoutes from './config/SpacerRoutes';
import HaikuRoutes from './config/HaikuRoutes';
import HaikuModel from './models/haikus';
import './App.css';

class App extends Component {
  state = {
    currentUser: '',
    haikus: [],
    haikusToSort: [],
    movies: [],
    drawerHide: "hidden"
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
  
  onMainClick = () => {
    HaikuModel.getAllHaikus()
      .then((res) => {
        this.setState({drawerHide: "hidden"})
        const sortedResults = this.getAvgAndSort(res.data);
        this.setState({haikus: sortedResults})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  navClose = () => {
    if (this.state.drawerHide === "") {
      this.setState({drawerHide: "navCloseAn"});
      setTimeout(() => {
        this.setState({drawerHide: "hidden"})
        console.log("2 secs?")
      }, 500)
    }
  }
  navOpen = () => {
    this.setState({drawerHide: ""})
  }

  onContainerClick = () => {
    console.log(this.props.location.pathname)
    const path = this.props.location.pathname;
    if (path.indexOf("profile") !== -1 || path.indexOf("movies") !== -1) {
      this.navClose()
    }
  }

  getAvgAndSort = (haikuArray) => {
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

  onMovieClick = (movie_id) => {
    if (movie_id === 0) {
      this.setState({haikus: []})
    } else {
      HaikuModel.getMovieHaikus(movie_id)
        .then((res) => {
          const sortedResults = this.getAvgAndSort(res.data.haikus);
          this.setState({haikus: sortedResults})
        })
        .catch((err) => {
          console.log(err)
        })
    }
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

  afterHaikuAdd = () => {
    this.setState({drawerHide: ""});
    this.onProfileClick();
    this.props.history.push(`/profiles/${this.state.currentUser}`)
  }

  onProfileMovieClick = (movie_id) => {
    let tempHaikus = this.state.haikusToSort.filter(haiku => haiku.movie.id === movie_id);
    this.setState({haikus: tempHaikus})
  }


  render() {
    return (
      <>
        {/* <SpacerRoutes drawerHide={this.state.drawerHide} /> */}
        <div className={this.state.drawerHide + " topSpacer"}></div>
        <div className="app">
          <Nav setCurrentUser={this.setCurrentUser} 
              currentUser={this.state.currentUser}
              logout={this.logout}
              onMainClick={this.onMainClick}
              onMovieClick={this.onMovieClick}
              onProfileClick={this.onProfileClick}
              onProfileMovieClick={this.onProfileMovieClick}
              drawerHide={this.state.drawerHide}
              navOpen={this.navOpen}
              navClose={this.navClose} />
          <HaikuRoutes 
            currentUser={this.state.currentUser}
            haikus={this.state.haikus}
            onContainerClick={this.onContainerClick}
            afterHaikuAdd={this.afterHaikuAdd} />
        </div>
      </>
    );
  }
}

export default withRouter(App);
