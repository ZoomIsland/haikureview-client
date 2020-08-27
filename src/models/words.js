class WordModel {
  static  getSyllables(terms) {
    if (terms.length === 0) {
      return 0;
    } else {
      terms = terms.replace("?", "")
      const termsArray = terms.split(" ")
      // Promises across an array found at
      // https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach
      const callWords = function callServer(term) { // sample async action
        return new Promise(resolve => {
          resolve(fetch(`https://api.datamuse.com/words?sp=${term}&md=s&max=1`)
          .then(res => res.json())
          .then(res => {
            return (res[0].numSyllables)
          }))
        });
      };
      const actions = termsArray.map(callWords); // run the function over all items
      const results = Promise.all(actions); // pass array of promises
      return results.then(data => {// or just .then(console.log)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return (data.reduce(reducer))
      });
    }
  }
}

export default WordModel;