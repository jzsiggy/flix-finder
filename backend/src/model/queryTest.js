const { connection } = require('./db');

const query = `
SELECT *
FROM user 
WHERE username = 'pig' AND password = 'hey'`

connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.end()