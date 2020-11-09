const getCurrentUser = (request, response) => {
    if (request.session.user) {
        response.status(200).json(request.session.user)
    }
    else {
        response.status(400).json({'message': 'No user loged in'})
    }
}

module.exports = {
    getCurrentUser
}