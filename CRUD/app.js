const express = require('express');
const app = express();
const PORT = 3000;

// carpeta de estáticos
app.use(express.static('public'));



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));