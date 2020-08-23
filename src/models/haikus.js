import axios from 'axios';
// do I need a token?
// const token = localStorage.getItem('token')

const url = process.env.REACT_APP_API;

class HaikuModel {
  static getAllHaikus = () => {
    return axios.get(`${url}/haikus/`)
  }
}

export default HaikuModel;