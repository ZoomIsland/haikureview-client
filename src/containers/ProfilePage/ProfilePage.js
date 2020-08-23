import React, { Component } from 'react';
import axios from 'axios';

import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import AddHaikuCard from '../../components/AddHaikuCard/AddHaikuCard';
import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel';
import './ProfilePage.css';

class ProfilePage extends Component {
  state = {
    haikus: []
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/haikus/`)
    .then((res) => {
      this.setState({haikus: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="profileContainer">
        <ProfileDetail />
        <div className="movieHaikus">
          {this.props.currentUser && (
            <AddHaikuCard />
          )}
          <HaikuCarousel haikus={this.state.haikus} />
        </div>
      </div>
    )
  }
}

export default ProfilePage