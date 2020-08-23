import React, { Component } from 'react';
import axios from 'axios';

import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import AddHaikuCard from '../../components/AddHaikuCard/AddHaikuCard';
import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel';
import './ProfilePage.css';

class ProfilePage extends Component {
  state = {
      userData: {}
    }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      axios.get(`${process.env.REACT_APP_API}/profiles/${this.props.currentUser}/`)
      .then((res) => {
        this.setState({userData: res.data})
      }) 
      .catch((err) => {
        console.log(err)
      })
    }
  }

  render() {
    return (
      <div className="profileContainer">
        {this.state.userData.profile && 
          <ProfileDetail data={this.state.userData} />
        }
        <div className="movieHaikus">
          {this.props.currentUser && (
            <AddHaikuCard />
          )}
          {this.state.userData.haikus &&
            <HaikuCarousel haikus={this.state.userData.haikus} />
          }
        </div>
      </div>
    )
  }
}

export default ProfilePage