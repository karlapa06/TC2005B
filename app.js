const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const session = require ('express-session');

const app = express(); 

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Para agregar otra ruta
app.use('/home',(request, response, next) => {
    response.send('Bienvenido!');
});



//app.use('/pedir',(request, response, next) => {
   // let hmtl = `

        // codigo de pedir 
    //`; //para meter el código de html

//});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);

    //Manda una respuesta
    response.send('Lo sentimos, no tenemos más crepas'); 
});

app.listen(3000);

