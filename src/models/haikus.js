import axios from 'axios';
// do I need a token?
// const token = localStorage.getItem('token')

const url = process.env.REACT_APP_API;

class HaikuModel {
  static getAllHaikus = () => {
    return axios.get(`${process.env.REACT_APP_API}/haikus/`)
  }
}

export default HaikuModel;