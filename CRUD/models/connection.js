const mysql = require('mysql2');
require('dotenv').config();

const config = {
    host: 'localhost', //process.env.DB_HOST,
    user: 'root', //process.env.DB_USER,
    password: '',//process.env.DB_PASSWORD,
    database: 'crud_express' //process.env.DB_DATABASE,
}

const conn = mysql.createConnection(config);

conn.connect((err => {

    if (err) {
        console.log(err);
    } else {
        console.log('Conexión exitosa');
    }
}));

module.exports = conn;