import axios from 'axios';
// do I need a token?
// const token = localStorage.getItem('token')

class HaikuModel {
  static getAllHaikus = () => {
    return axios.get(`${process.env.REACT_APP_API}haikus/`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        })
  }
}

export default HaikuModel;