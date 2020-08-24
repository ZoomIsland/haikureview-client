import React, { Component } from 'react';
import axios from 'axios';

import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import MovieList from '../../components/MovieList/MovieList'
import AddHaikuCard from '../../components/AddHaikuCard/AddHaikuCard';
import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel';
import './ProfilePage.css';

class ProfilePage extends Component {
  state = {
      userData: {}
    }

  componentDidMount() {
    const profile_id = this.props.match.params.id;
    axios.get(`${process.env.REACT_APP_API}/profiles/${profile_id}/`)
      .then((res) => {
        const startData = res.data;
        const movies = new Set();
        startData.haikus.forEach(haiku => {
          movies.add(JSON.stringify(haiku.movie));
        })
        const movieArray = [];
        movies.forEach(movie => {
          movieArray.push(JSON.parse(movie))
        })
        startData.movies = movieArray;
        this.setState({userData: startData})
      }) 
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <section className="profileContainer">
        <div className="profileData">
          {this.state.userData.profile && 
            <ProfileDetail data={this.state.userData} />
          }
          <div className="profileMovies">
            <h2>By Movie</h2>
            {this.state.userData.movies && 
              <MovieList movies={this.state.userData.movies} />
            }
          </div>
        </div>
        {/* <div className="movieHaikus">
          {this.props.currentUser === this.state.userData.id && (
            <AddHaikuCard />
          )}
          {this.state.userData.haikus &&
            <HaikuCarousel haikus={this.state.userData.haikus} currentUser={this.props.currentUser} />
          }
        </div> */}
      </section>
    )
  }
}

export default ProfilePage