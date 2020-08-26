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

  // THERE HAS GOT TO BE A WAY TO MAKE THIS WORK!
  // static searchAPIs(term) {
  //   let omdbResults, haikuApiResults;
  //   const omdb = new OmdbApi({
  //     apiKey: `${omdb_key}`
  //   })
  //   omdb.bySearch({search: term})
  //   .then(res => {
  //     console.log(res.Error)
  //     if (res.Error) {
  //       console.log("Ah ah ah")
  //       omdbResults = [];
  //     } else {
  //       let movies = res.Search
  //       console.log(res)
  //       omdbResults = movies.filter(movie => movie.Poster !== "N/A")
  //     }
  //     axios.get(`${haiku_url}/movies/?search=${term.replace(" ", "+")}`)
  //     .then(res => {
  //             haikuApiResults = res.data
  //             const moviesArray = haikuApiResults;
  //             omdbResults.forEach(omdbResult => {
  //               omdbResult.id = 0;
  //               omdbResult.title = omdbResult.Title
  //               moviesArray.push(omdbResult)
  //             }) 
  //             const sortedMovies = moviesArray.sort(function (a, b) {
  //               if (a.title < b.title) {
  //                 return -1;
  //               }
  //               if (a.title > b.title) {
  //                 return 1;
  //               }
  //               return 0;
  //             })
  //             // not needed for null OMDB //
  //             for (let i = 0; i < (sortedMovies.length - 1); i++) {
  //               if (sortedMovies[i].title === sortedMovies[i + 1].title) {
  //                 if (sortedMovies[i].Title) {
  //                   sortedMovies.splice(i, 1)
  //                 } else {
  //                   sortedMovies.splice((i + 1), 1)
  //                 }
  //               }
  //             }
  //             console.log(sortedMovies)
  //             return sortedMovies;
  //             // this.setState({movies: sortedMovies})
  //           })
  //           .catch(err => console.log(err))
  //         // this.setState({movies: movies})
  //       })
  //       .catch(err => console.error(err))
  // }

}

export default MovieModel;