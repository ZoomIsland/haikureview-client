import React, { Component } from 'react';

import HaikuCarousel from '../../components/HaikuCarousel/HaikuCarousel'

class MainHub extends Component {
  render() {
    return (
      <div className="mainContainer">
        <HaikuCarousel 
          haikus={this.props.haikus} 
          currentUser={this.props.currentUser} />
      </div>
    );
  };
};

export default MainHub;