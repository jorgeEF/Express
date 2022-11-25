const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('index'), {
        title: 'Inicio | CRUD MVC'
    };
}); 

router.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../public/nosotros.html'));
});

module.exports = router