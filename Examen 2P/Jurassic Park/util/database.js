const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'jurassic park',
    password: ''
    
});

module.exports = pool.promise();