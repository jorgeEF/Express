// importamos modelo usuario
const Usuario = require('../models/userModel');

// exportamos los metodos del controlador
module.exports = {    
  index: async (req = null, res, next) => {
    let id = req.query.id;
    
    if (id == null || id == ''){            
      let usuarios = await Usuario.getAllUsers();
      res.render('users', { title: 'Usuarios', users: usuarios});          
    }
    else {
      let user = await Usuario.getFilteredUser(id);
      res.render('users', { title: 'Usuarios', users: user});
    }      
  },
  showCreate: (req, res, next) => { 
    res.render('create', {title: 'Crear nuevo usuario'});
  },
  save: async (req, res, next) => {          
    Usuario.saveUser(req);
    res.redirect('/users');
  },
  showEdit: async (req, res, next) => {              
    let user = await Usuario.showEdit(req);
    res.render('edit', { title: 'Editar Usuario', user: user});
  },
  update: async (req, res, next) => {          
    Usuario.update(req);        
    res.redirect('/users');        
  },
  remove: (req, res, next) => {          
    Usuario.remove(req);
    res.redirect('/users');
  }
}