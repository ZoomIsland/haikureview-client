import React, { Component } from 'react';
import axios from 'axios';

import Routes from '../../config/Routes'
import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel'

class MainHub extends Component {
  state = {
    haikus: []
  };
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
      <div className="mainContainer">
        <HaikuCarousel haikus={this.state.haikus} currentUser={this.props.currentUser}  />
      </div>
    );
  };
};

export default MainHub;