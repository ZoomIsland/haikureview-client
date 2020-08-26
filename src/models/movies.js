import axios from 'axios';
import OmdbApi from 'omdb-api-pt';

const haiku_url = process.env.REACT_APP_API;
const omdb_key = process.env.REACT_APP_OMDB_API_KEY;

class MovieModel {
  static searchOMDB(term) {
    const omdb = new OmdbApi({
      apiKey: `${omdb_key}`
    })
    return omdb.bySearch({search: term})
  }
  static searchHaikuDB(term) {
    return axios.get(`${haiku_url}/movies/?search=${term.replace(" ", "+")}`)
  }
}

export default MovieModel;