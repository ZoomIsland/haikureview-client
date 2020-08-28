import axios from 'axios';
import OmdbApi from 'omdb-api-pt';

const haiku_url = process.env.REACT_APP_API;
const omdb_key = process.env.REACT_APP_OMDB_API_KEY;

class MovieModel {
  static createMovie(data) {
    return axios.post(`${haiku_url}/movies/`, data)
      .catch(err => console.log(err))
  }

  static searchAPIs(term) {
    let omdbResults, haikuApiResults;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.response))
        // return this.response;
      }
    };
    xhttp.open("GET", `http://www.omdbapi.com/?s=${term}&page=1&apikey=${omdb_key}`, true);
    return xhttp.send();
    // const omdb = new OmdbApi({
    //   apiKey: `${omdb_key}`
    // })
    // return omdb.bySearch({search: term})
    // .then(res => {
    //   if (res.Error) {
    //     console.log("Ah ah ah")
    //     omdbResults = [];
    //   } else {
    //     let movies = res.Search
    //     omdbResults = movies.filter(movie => movie.Poster !== "N/A")
    //   }
    //   return axios.get(`${haiku_url}/movies/?search=${term.replace(" ", "+")}`)
    //   .then(res => {
    //           haikuApiResults = res.data
    //           const moviesArray = haikuApiResults;
    //           omdbResults.forEach(omdbResult => {
    //             omdbResult.id = 0;
    //             omdbResult.title = `${omdbResult.Title} (${omdbResult.Year})`;
    //             moviesArray.push(omdbResult)
    //           }) 
    //           const sortedMovies = moviesArray.sort(function (a, b) {
    //             if (a.title < b.title) {
    //               return -1;
    //             }
    //             if (a.title > b.title) {
    //               return 1;
    //             }
    //             return 0;
    //           })
    //           // not needed for null OMDB //
    //           for (let i = 0; i < (sortedMovies.length - 1); i++) {
    //             if (sortedMovies[i].title === sortedMovies[i + 1].title) {
    //               if (sortedMovies[i].Title) {
    //                 sortedMovies.splice(i, 1)
    //               } else {
    //                 sortedMovies.splice((i + 1), 1)
    //               }
    //             }
    //           }
    //           return sortedMovies;
    //         })
    //         .catch(err => console.log(err))
    //     })
    //     .catch(err => console.error(err))
  }
}

export default MovieModel;