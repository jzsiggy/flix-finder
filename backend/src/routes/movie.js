const {
    getRandomMovie,
    getPlaylist,
} = require('../controller')
const express = require('express');
const movieRouter = express.Router();

movieRouter.get('/random-movie', getRandomMovie)
movieRouter.post('/suggestion', getPlaylist)

module.exports = {
    movieRouter
}