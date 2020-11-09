const {
    login,
    logout,
    signup,
    getCurrentUser
} = require('../controller')
const express = require('express');
const authRouter = express.Router();

authRouter.post('/signup', signup)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.get('/current-user', getCurrentUser)


module.exports = {
    authRouter
}