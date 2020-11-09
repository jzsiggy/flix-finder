const { signup } = require('./signup')
const { login } = require('./login')
const { logout } = require('./logout')
const { getCurrentUser } = require('./getCurrentUser')

module.exports = {
    login,
    logout,
    signup,
    getCurrentUser
};