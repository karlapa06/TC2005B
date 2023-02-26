console.log("hola desde node");
const filesystem = require ('fs'); //para acceder y más a los archivos
filesystem.writeFileSync('hola.txt','Hola');

// Una función que reciba un arreglo de números y devuelva su promedio.
function average(){
        let suma = 0; 
        let cont = 0; 
        array.forEach(element =>{
            suma = suma + element;
            cont++;
        })
        let average=suma/cont; 
        console.log(average);
}
array=[2,4,3,1,5,6,8,9]
average(array)

//Una función que reciba un string y escriba el string en un archivo de texto. 
//Apóyate del módulo fs

function escribir(){
    filesystem.writeFileSync("Hola.txt", text);
}
let text = "Ejemplo de escribir en un archivo de txt"
escribir(text)

// Para crear un servidor
// const http = require('http'); 
// const server = http.createServer();
// server.listen (3000) ** para crear un servidor con un puerto 
// Escoge algún problema que hayas implementado en otro 
// lenguaje de programación, y dale una solución en js que se ejecute sobre node.

const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lab1</title>
        <link rel="stylesheet" type="text/css" href="styles3.css">
        <!--PARA AGREGAR ARCHIVO DE JAVASCRIPT <script src="js.js"></script> -->
    </head>
    <body>
        <h1>Mi página personal Lab1</h1>
        <h4><center>Karla Alejandra Padilla González A01705331</center></h4>
        <h5><center>Correo electrónico: A01705331@tec.mx</center></h5>
   
        <h3>¿Quién soy?</h3>
        <p1>Actualmente estoy estudiando la carrera de ITC (Ingeniería en 
    Tecnologías Computacionales) en el Tecnológico de Monterrey Campus 
    Querétaro, voy en 4to Semestre, tengo 19 años y vivo con mis papás y dos 
    hermnanos. A continuación les hablaré sobre de mí </p1>

        <p>Mis intereses/cosas que me gustan hacer:</p>
    <ol>
        <li>Bailar</li>
        <li>Hacer postres</li>
        <li>Escuchar música</li>
        <li>Convivir con mis amigos</li>
        <li>Dormir</li>

    </ol>

    <p>Respuestas a preguntas</p>
    <ul>
        <li>¿Cuál es la diferencia entre Internet y la World Wide Web?
        La World Wide Web o conicidad como WWW es todo el contenido, los sitios a los que podemos acceder desde nuestros dispositivos engloba todos los servicios, plataformas, redes sociales, páginas, etc. La WWW es posterior al internet y se identifican al poner la dirección URL. 
        Por otro lado el internet es la red física dentro de la red de redes.  </li>
        
        <li>¿Cuáles son las partes de un URL?
        URL se significa (Uniform Resource Locator/Localizador uniforme de recursos) y es uno de los conceptos más conocidos por la Web, es una dirección web que se usa para identificar recursos en la Web. Las partes de un URL son las siguientes; 
        Protocolo: mayormente es HTTP. 
        Dominio: nombre que es usado para identificar uno o más dirección IP  (Dirección del Protocolo de Internet). 
        Folder/Path: especifica la ubicación del recurso en un servidor. 
        Parámetros: son datos adicionales para identificar el recurso en el servidor. </li>
        
        <li>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
        GET: para solicitar datos de un recurso específico donde los datos no se modifican de ninguna manera.
        HEAD: este método se utiliza de la misma manera que se usa GET con la diferencia que HEAD no debe contener cuerpo en la respuesta, se usa para asegurar si el recurso esta presente antes de realizar una solicitud. 
        POST: se utiliza este método para enviar datos a un servidor y crear un recurso. 
        PUT: se utiliza este método para actualizar el recurso existente en un servidor usando el contenido en el cuerpo que se pide, es decir “editar” algo. 
        PATCH: se utiliza este método para aplicar modificaciones parciales a un recurso.
        DELETE: se utiliza este método para eliminar un recurso especifico. </li>
        
       <li> Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
No ha ocurrido algún error, cuando un servidor web devuelve una respuesta HTTP con código 200 significa que hay una solicitud POST (crear un nuevo recurso) exitosa. </li>

        <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?
No es responsabilidad del desarrollador corregir, el usuario puede encontrar la forma de resolverlo. </li>

        <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué? 
Si es responsabilidad del desarrollados corregir este error. </li>

        <li>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)
El navegador que utilizo es Google Chrome 110 en una macOS Catalina 10.15 y obtuve una puntuación de 476 de 555. </li>

        <li> el ciclo de vida y desarrollo de los sistemas de información:
¿Cuál es el ciclo de vida de los sistemas de información? Es un enfoque por fases de análisis y de diseño que sostiene que los sistemas son desarrollados de mejor manera mediante el uso de un ciclo especifico de actividades del analista y del usuario, consta de 5 fases. 
¿Cuál es el ciclo de desarrollo de sistemas de información? El. ciclo de vida del desarollo del sistema SDLC (Systems Development Life Cycle) se refiere al proceso de planificación, creación, pruebas y despliegue en un sistema de información. Consta de 7 fases, que son las etapas del proceso de desarollo de software. </li>

    </u> 
    </body>   

    <footer>
        <p>Usando <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
    </footer>
    

</html>`);
    response.write("Hola ");
    response.end();
});

server.listen(1000);