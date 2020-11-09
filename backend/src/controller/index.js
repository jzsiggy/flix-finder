const {
    getRandomMovie,
    getPlaylist,
} = require('./movie')

const {
    login,
    logout,
    signup,
    getCurrentUser
} = require('./auth')

module.exports = {
    login,
    logout,
    signup,
    getCurrentUser,
    
    getRandomMovie,
    getPlaylist
}