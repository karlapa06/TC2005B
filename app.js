const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');

const app = express(); 

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));

const csrfProtection = csrf();
app.use(csrfProtection); 


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Para agregar otra ruta
app.use('/home',(request, response, next) => {
    response.send('Bienvenido!');
});

const rutasUsers = require('./routes/users.routes');
app.use('/users', rutasUsers);

const crepasRutas = require('./routes/crepas.routes');
app.use('/crepas',isAuth, crepasRutas);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);

    //Manda una respuesta
    response.send('Lo sentimos, no tenemos más crepas'); 
});

app.listen(3000);


