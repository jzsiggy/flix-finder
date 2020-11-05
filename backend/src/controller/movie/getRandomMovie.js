const axios = require('axios');

const getRandomMovie = (request, response) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&with_genres=80&page=1`)
    .then(results => {
        const resJSON = results.data.results.map(item => {
            return {
                'poster_path' : item.poster_path,
                'id' : item.id,
                'title' : item.title
            }
        })
        console.log(resJSON)
        response.json(resJSON).status(200)
    })
    .catch(err => {
        response.json(err).status(500)
    })
}

module.exports = {
    getRandomMovie
}