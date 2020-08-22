import React, { Component } from 'react';
import axios from 'axios';

import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel'

class MainHub extends Component {
  state = {
    haikus: []
  };
  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}haikus/`)
      .then((res) => {
        this.setState({haikus: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <HaikuCarousel haikus={this.state.haikus} />
      </div>
    );
  };
};

export default MainHub;