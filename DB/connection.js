const mariadb = require('mariadb');
require('dotenv').config();

// usamos dotenv para no mostrar datos del servidor
const connection = mariadb.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO connection value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

module.exports = connection;
