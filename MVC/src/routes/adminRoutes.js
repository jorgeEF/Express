const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('Hola mundo');
});

module.exports = router