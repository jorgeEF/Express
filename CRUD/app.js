const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');

// archivos estáticos
app.use(express.static('public'));

// set template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// middleware a rutas
app.use('/', mainRoutes);
app.use('/api', adminRoutes);
app.use((req,res) => {
    res.status(404).send('error! pagina no encontrada');
});

app.listen(PORT, () => console.log(`Ejecutando servidor Express en puerto ${PORT}`));