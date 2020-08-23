import React, { Component } from 'react';
import axios from 'axios';

import HaikuShow from '../../components/HaikuShow/HaikuShow'

class HaikuShowContainer extends Component {
  state = {
    haiku: {}
  }

  componentDidMount() {
    // check axios for a way of doing this easier!
    const haiku_id = this.props.match.params.id
    axios.get(`${process.env.REACT_APP_API}/haikus/${haiku_id}/`)
      .then((res) => {
        console.log(res)
        this.setState({haiku: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.haiku)
    return (
      <div className="haikuShowContainer">
        {this.state.haiku.title && 
          <HaikuShow haiku={this.state.haiku} />
        }
      </div>
    )
  }
}

export default HaikuShowContainer;