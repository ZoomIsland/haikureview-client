import React, { Component } from 'react';
import HaikuModel from '../../models/haikus';

class MainHub extends Component {
  state = {
    haikus: []
  };
  componentDidMount() {
    HaikuModel.getAllHaikus()
      // .then((response) => {
      //   console.log(response)
      // })
  }

  render() {
    return (
      <div>MainHub</div>
    );
  };
};

export default MainHub;