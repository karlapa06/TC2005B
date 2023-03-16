//const { request, response } = require('express');
const Crepa = require('../models/crepas.model'); 

exports.get_lista = (request,response,next) =>{
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');
    
    const id = request.params.id || 0;

    Crepa.fetchAll(id)
    then(([rows, fieldData]) => {
        console.log(rows);
        //console.log(fieldData);
    
        response.render('lista', { 
            crepas: rows,
            ultima_crepa: request.session.ultima_crepa || '',
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
   })
    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_nuevo = (request, response, next) => {
 
    const crepa = new Crepa({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        handle: request.body.handle,
        ingredientes: request.body.ingredientes,
        precio: request.body.precio,
    });

    crepa.save()
    .then(([rows, fieldData]) => {
        request.session.ultima_crepa = crepa.nombre;

        response.status(300).redirect('/crepas/lista');
    })
    .catch(error => console.log(error));

};



exports.get_pedir = (request, response, next) => {

let html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Crepas</h1>
        <form action="/crepas/pedir" method="POST">
            <fieldset>
                <legend>Escoge tus crepas:</legend>
                <div>
                    <input type="checkbox" id="malteada" name="malteada">
                    <label for="malteada">Malteada</label>
                </div>
                <div>
                    <input type="checkbox" id="cafe" name="cafe">
                    <label for="cafe">Café</label>
                </div>
                <div>
                    <input type="number" id="crepas" name="crepas" value="0" min="0">
                    <label for="crepass"> Crepas</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="pedir">
        </form>
    </body>
</html>
`;

response.send(html);
};

exports.post_pedir = (request, response, next) => {
console.log(request.body);

response.send("Pediste " + request.body.crepas + " crepas");
}

exports.get_pedido = (request, response, next) => {
response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

