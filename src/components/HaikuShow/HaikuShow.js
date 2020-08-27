import React, { Component } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';


import setAuthHeader from '../../utils/setAuthHeader'
import StarDisplay from '../StarDisplay/StarDisplay'
import CommentCard from '../../components/CommentCard/CommentCard'
import './HaikuShow.css'

class HaikuShow extends Component {
  state = {
    commentShow: false,
    comments: null,
    userRating: 0,
    userComment: ''
  }

  toggleComments = () => {
    if (this.state.commentShow === false) {
      this.setState({commentShow: true});
    } else {
      this.setState({commentShow: false})
    }
  }

  changeCommentText = () => {
    if (this.props.currentUser) {
      return "Add Comment/Rating"
    } else {
      return "See Comments/Ratings"
    }
  }

  handleInputChange = (e) => {
    if (e.target.name) {
      this.setState({[e.target.name]: e.target.value})
    } else {
      this.setState({[e.currentTarget.dataset.name]: e.currentTarget.dataset.value})
    }
  }

  onCommentSubmit = (e) => {
    e.preventDefault();
    const data = {
      user: this.props.currentUser,
      haiku: this.props.haiku.id,
      rating: this.state.userRating,
      comment: this.state.userComment
    }
    let token = localStorage.getItem('token');
    setAuthHeader(token)
    axios.post(`${process.env.REACT_APP_API}/newcomment/`, data)
      .then(res => {
        console.log(res)
        axios.get(`${process.env.REACT_APP_API}/comments/${this.props.haiku.id}/`)
          .then(res => {
            console.log(res.data)
            this.setState({comments: res.data.comments})
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  ratingCount = () => {
    const comments = this.state.comments || this.props.haiku.comments;
    if (this.props.haiku.comments) {
      let totalRating = 0;
      let ratingCount = comments.length
      comments.forEach(comment => {
        totalRating += comment.rating
        if (comment.rating === 0) {
          ratingCount--;
        }
      })
      return (totalRating / ratingCount);
    }
  }

  onDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API}/haikus/${id}/`)
    .then((res) => {
      this.props.history.go(0)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="haikuContainer flex-center-column">
        <div className='haikuCard flex-center'>
          <div className='innerHaikuCard innerCardContainer'>
            <StarDisplay rating={this.ratingCount()} />
            <h2 className='haikuTitle'>{this.props.haiku.title}</h2>
            <p className='haikuText'>{this.props.haiku.line_one}</p>
            <p className='haikuText'>{this.props.haiku.line_two}</p>
            <p className='haikuText'>{this.props.haiku.line_three}</p>
            {this.props.haiku.movie &&
              <p className='haikuCardMovie'>{this.props.haiku.movie.title}</p>
            }
            {this.props.haiku.id !== 0 &&
              <p className="commentLink" onClick={this.toggleComments}>{this.changeCommentText()}</p>
            }
            {this.props.haiku.user.profile &&
              <p className='haikuCardUser'>{this.props.haiku.user.profile.display_name}</p>
            }
          </div>
          {this.props.currentUser === this.props.haiku.user.id && 
            <div className="haikuBtns">
              <Link to={`/updatehaiku/${this.props.haiku.id}`}><div className="haikuEditBtn flex-center">Edit</div></Link>
              <div className="haikuDeleteBtn flex-center" onClick={() => {this.onDelete(this.props.haiku.id)}}>Delete</div>
            </div>
          }
        </div>
        {this.state.commentShow &&
          <CommentCard 
            currentUser={this.props.currentUser} 
            comments={this.state.comments || this.props.haiku.comments} 
            userRating={this.state.userRating}
            userComment={this.state.userComment}
            handleInputChange={this.handleInputChange}
            onCommentSubmit={this.onCommentSubmit}
            toggleComments={this.toggleComments} />
        }
      </div>
    )
  }
}

export default withRouter(HaikuShow);