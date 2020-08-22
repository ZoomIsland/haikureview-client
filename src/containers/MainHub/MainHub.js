import React, { Component } from 'react';
import axios from 'axios';

import GameCarousel from '../../components/GameCarousel/GameCarousel'

class MainHub extends Component {
  state = {
    haikus: []
  };
  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}haikus/`)
      .then((res) => {
        this.setState({haikus: res.data})
        console.log(this.state.haikus)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <GameCarousel haikus={this.state.haikus} />
      </div>
    );
  };
};

export default MainHub;