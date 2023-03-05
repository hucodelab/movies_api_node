const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'movies1',
    host: '127.0.0.1',
    port: '3306'
});

let hugodb = {};

hugodb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM movies1`, (err, results) => {
            if(err) {
                return reject (err);
            }
            return resolve(results);
        })
    })
};

module.exports = hugodb;