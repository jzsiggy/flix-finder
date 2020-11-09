const { connection } = require('../../model/db');

const signup = (request, response) => {
    console.log('query received')
    let isValidQuery = true;
    
    const {
        email,
        username,
        password 
    } = request.body;
    
    [email, username, password].forEach(field => {
        if (!field.length) {
            isValidQuery = false
        }
    });
    if (!isValidQuery) {
       return response.status(500).json({ 'error' : 'Blank Input Fields' });
    }

    connection.query('INSERT INTO user (username, email, password) VALUES (?)', [[username, email, password]], (error, results, fields) => {
        if (error) {
            return response.status(500).json(error)
        }
        return response.status(200).json(results)
    })
};

module.exports = {
    signup
}