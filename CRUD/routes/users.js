var express = require('express');
var router = express.Router();
const { 
  index, 
  showCreate, 
  save,
  showEdit, 
  update,
  remove
} = require('../controllers/usersController');
  
// muestra los usuarios con o sin filtro
router.get('/', index);

// muestra pagina de creación de usuario
router.get('/create', showCreate);

// guarda usuario creado
router.post('/create', save);

// muestra usuario a editar
router.get('/edit/:id', showEdit);

// guarda usuario editado
router.post('/edit/:id', update);

// elimina usuario
router.post('/delete/:id', remove);

module.exports = router;
