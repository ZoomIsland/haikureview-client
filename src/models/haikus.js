import axios from 'axios';
// do I need a token?
// const token = localStorage.getItem('token')

const url = process.env.REACT_APP_API;

class HaikuModel {
  static getAllHaikus = () => {
    return axios.get(`${url}/haikus/`)
  }
  static getMovieHaikus = (movie_id) => {
    return axios.get(`${url}/movies/${movie_id}/`)
  }
  static getProfileHaikus = (user_id) => {
    return axios.get(`${url}/profiles/${user_id}/`)
  }
  static createHaiku = (data) => {
    return axios.post(`${process.env.REACT_APP_API}/newhaiku/`, data)
  }
}

export default HaikuModel;
