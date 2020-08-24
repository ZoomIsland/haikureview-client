import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './HaikuShow.css'

class HaikuShow extends Component {
  onDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API}/haikus/${id}/`)
    .then((res) => {
      console.log(res.data)
      // useHistory.go(0)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div className='haikuCard flex-center'>
        <div className='innerHaikuCard'>
          <Link to={`/haikus/${this.props.haiku.id}`}>
            <h2 className='haikuTitle'>{this.props.haiku.title}</h2>
          </Link>
          <p className='haikuText'>{this.props.haiku.line_one}</p>
          <p className='haikuText'>{this.props.haiku.line_two}</p>
          <p className='haikuText'>{this.props.haiku.line_three}</p>
          {/* Add below back in once related works */}
          <Link to ={`/movies/${this.props.haiku.movie.id}`}><p className='haikuCardMovie'>{this.props.haiku.movie.title}</p></Link>
          {/* <p className='haikuCardUser'>{this.props.haiku.user.display_name}</p> */}
        </div>
        {this.props.currentUser === this.props.haiku.user && 
          <div className="haikuBtns">
            <Link to={`/updatehaiku/${this.props.haiku.id}`}><div className="haikuEditBtn flex-center">Edit</div></Link>
            <div className="haikuDeleteBtn flex-center" onClick={() => {this.onDelete(this.props.haiku.id)}}>Delete</div>
          </div>
        }
      </div>
    )
  }
}

export default HaikuShow;