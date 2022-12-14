const express = require('express');
require('dotenv').config();
//crear servidor de express
const app = express();

//Directorio publico
app.use( express.static('public'));
//Lectura y parseo del body
app.use( express.json() );
//Rutas
//auth,crear,login,renew
app.use('/api/auth', require('./routes/auth'));


//CRUD: eventos
//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});