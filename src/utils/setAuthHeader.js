import axios from 'axios';

// will I need to say JWT before token for Django?
const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthHeader;