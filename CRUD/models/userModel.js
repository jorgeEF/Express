// importa el modulo mysql
const conn = require('./connection');

module.exports = {
    getAllUsers: () => {   
        return new Promise((resolve, reject) => {
             conn.query('SELECT * FROM users;', (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
    },
    getFilteredUser: (id) => {   
        return new Promise((resolve, reject) => {
             conn.query('SELECT * FROM users WHERE id = ' + id, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
     },
     saveUser: (req) => {   
        return new Promise((resolve, reject) => {
             conn.query(`INSERT INTO users (nombre,apellido) VALUES('${req.body.nombre}','${req.body.apellido}')`, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
     },
     showEdit: (req) => {   
        return new Promise((resolve, reject) => {
             conn.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
     },
     update: (req) => {   
        return new Promise((resolve, reject) => {
             conn.query(`UPDATE users SET nombre = '${req.body.nombre}', apellido = '${req.body.apellido}' WHERE id = ` + req.params.id, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
     },
     remove: (req) => {   
        return new Promise((resolve, reject) => {
             conn.query('DELETE FROM users WHERE id = ' + req.params.id, (err, result) => {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(result);
                 }
             });
         });
     },
}