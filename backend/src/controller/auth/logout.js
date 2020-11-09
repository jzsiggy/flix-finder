const { request } = require("express");

const logout = (request, response) => {
    request.session.user = null
    response.status(200).json({'message': 'user logged out'})
}

module.exports = {
    logout
}