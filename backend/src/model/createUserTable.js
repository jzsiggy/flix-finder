const { connection } = require('./db');

const query = `CREATE TABLE user (
    ID INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(20) NOT NULL, 
    email VARCHAR(30) NOT NULL, 
    password VARCHAR(100) NOT NULL, 
    PRIMARY KEY (ID) 
)`

connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.end()