const express = require('express'); //se importa express
const app = express();
const path = require('path');

const mysql = require('mysql'); //libreria
const myConnection = require('express-myconnection');

//importando rutas
const studentRoutes = require('./routes/students');
const { urlencoded } = require('express');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//midlewares
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '123',
    port: '3306',
    database: 'crudstudents',
    insecureAuth : true
}, 'single'));

app.use(express.urlencoded({extended: false}));
//routes
app.use('/', studentRoutes);

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');

});