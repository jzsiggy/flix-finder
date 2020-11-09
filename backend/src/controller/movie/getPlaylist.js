const axios = require('axios');

const getPlaylist = (request, response) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&with_genres=80&page=1`)
    .then(results => {
        const resJSON = results.data.results.map(item => {
            return {
                'img' : `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                'id' : item.id,
                'title' : item.title
            }
        })
        response.json(resJSON).status(200)
    })
    .catch(err => {
        response.json(err).status(500)
    })
}

module.exports = {
    getPlaylist
}