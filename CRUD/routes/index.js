var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto CRUD' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Galería' });
});

module.exports = router;
