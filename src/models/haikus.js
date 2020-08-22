import axios from 'axios';

const url = 'http://localhost:8000/api/haikus/'
// do I need a token?
// const token = localStorage.getItem('token')

class HaikuModel {
  static getAllHaikus = () => {
    // return fetch(url)
    //   .then((response) => response.json)
    axios.get(`${process.env.REACT_APP_API}haikus/`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        })
  }
}

export default HaikuModel;