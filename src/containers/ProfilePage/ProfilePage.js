import React, { Component } from 'react';
import axios from 'axios';

import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import ProfileForm from '../../components/ProfileDetail/ProfileUpdateForm';
import MovieList from '../../components/MovieList/MovieList'
import './ProfilePage.css';

class ProfilePage extends Component {
  state = {
      userData: {},
      bio: '',
      display_name: '',
      update: false,
      uploadedFile: null,
      picture_url: ''
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
        this.setState({bio: res.data.profile.bio})
        this.setState({display_name: res.data.profile.display_name})
      }) 
      .catch((err) => {
        console.log(err)
      })
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onUpdateSubmit = () => {
    const data = {
      id: this.state.userData.profile.id,
      display_name: this.state.display_name,
      bio: this.state.bio
    }
    const profile_id = this.props.match.params.id;
  
    axios.put(`${process.env.REACT_APP_API}/updateprofile/${data.id}/`, data)
      .then(res => {
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
            this.setState({bio: res.data.profile.bio})
            this.setState({display_name: res.data.profile.display_name})
          }) 
          .catch((err) => {
            console.log(err)
          })
      })
      .catch(err => console.log(err))
  }

  toggleUpdate = () => {
    if (this.state.update) {
      this.onUpdateSubmit();
      this.setState({update: false})
    } else {
      this.setState({update: true})
    }
  }

  render() {
    return (
      <section className="profileContainer">
        <div className="profileData">
          {(this.state.userData.profile && this.state.update === false) && 
            <ProfileDetail data={this.state.userData} toggleUpdate={this.toggleUpdate} />
          }
          {(this.state.userData.profile && this.state.update === true) && 
            <ProfileForm 
              data={this.state.userData} 
              bio={this.state.bio} 
              display_name={this.state.display_name}
              onInputChange={this.onInputChange}
              onImageDrop={this.onImageDrop}
              toggleUpdate={this.toggleUpdate} />
          }
        </div>
        <div className="profileMovies">
          <h2>By Movie</h2>
          {this.state.userData.movies && 
            <MovieList movies={this.state.userData.movies} onMovieClick={this.props.onProfileMovieClick} />
          }
        </div>
      </section>
    )
  }
}

export default ProfilePage