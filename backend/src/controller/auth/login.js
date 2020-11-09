const { connection } = require('../../model/db');

const login = (request, response) => {
    const {
        username,
        password
    } = request.body;

    const query = `
    SELECT *
    FROM user 
    WHERE username = ? AND password = ?`

    connection.query(query, [username, password], (error, results, fields) => {
        if (error) {
            return response.status(500).json(error);
        }
        if (!results.length) {
            return response.status(500).json({'message': 'Incorrect fields'});
        }
        request.session.user = results;
        return response.status(200).json(results);
    });
};

module.exports = {
    login
}