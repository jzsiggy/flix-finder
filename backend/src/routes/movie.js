const {
    getRandomMovie
} = require('../controller')
const express = require('express');
const movieRouter = express.Router();

movieRouter.get('/random-movie', getRandomMovie)

module.exports = {
    movieRouter
}