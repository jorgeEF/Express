const express = require('express');
const app = express();

const PORT = 3000;


/* Archivos Estáticos */
app.use(express.static('public'));

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

/* ROUTES */

app.get('/', (req, res) => {
    res.render('home', {
        title: 'HOME'
    });
});

app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'BLOG'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'CONTACTO'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'LOGIN'
    });
});


app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`));