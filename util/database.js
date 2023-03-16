const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'crepas',
    password: '',
});

module.exports = pool.promise();