// Ejercicio 1
//Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
//Utiliza document.write para producir la salida
let numero = prompt ("Introduce un número");
document.write("Tabla Ejercicio 1<br>");
for (let i =1; i <= numero; i ++){
    document.write(i + "_" + (i*i) + " _ " + (i*i*i), "<br>");
}


// Ejercicio 2
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
//  Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta
let tiempo = Date.now();
let num1 = Math.round(Math.random()*10); 
let num2 = Math.round(Math.random()*10);
let num3 = num1 + num2;
let answer = prompt ("Suma de ambos números: "+ num1 + "+" + num2 + ";"); 
let tiempo2 = Date.now();
let tiempoT = (tiempo2 - tiempo) / 1000; 

if (answer==num3){
    document.write ("<br>","Ejercicio 2");
    document.write ("<br>","Pregunta Correcta", "<br>" );
}
else{
    document.write ("<br>","Ejercicio 2");
    document.write("<br>","Pregunta Incorrecta","<br>");
}
document.write("Tiempo que se tardo: " + tiempoT + "segundos" ,"<br>");

// Ejercicio 3
//Función: contador. Parámetros: Un arreglo de números. 
//Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
const array = [-3,-2,-1,0,1,2,3];
counter(array);
function counter (array){
    let positive = 0; 
    let negative = 0; 
    let zero = 0; 

    array.forEach(element => {
        if (element>0) positive++; 
        if (element<0) negative++; 
        if (element==0) zero++; 
    });

    document.write("<br>","Ejercicio 3", "<br>");
    document.write("Cantidad de números positivo en el arreglo: " + positive , "<br>"); 
    document.write("Cantidad de números negativos en el arreglo: " + negative, "<br>"); 
    document.write("Cantidad de zeros en el arreglo: " + zero, "<br>");
}
// Ejercicio 4
// Función: promedios. Parámetros: Un arreglo de arreglos de números. 
//Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
const matriz=[[2,4,6,8],[3,5,7,9],[1,3,2,5],[1,2,3,4]];
average(matriz);


function average(matriz){
    document.write("<br>","Ejercicio 4", "<br>");
    matriz.forEach(row => {
        let suma = 0; 
        let cont = 0; 
        row.forEach(element =>{
            suma = suma + element;
            cont++;
        })
        let average=suma/cont; 
        document.write("El promedio del arreglo es: " +  average , "<br>");
    })
}


//Ejercicio 5
// Función: inverso. 
//Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.
let num = 12345; 
function inverso(num){
    return Number(num.toString().split('').reverse().join(''));
    
}
document.write("<br>","Ejercicio 5", "<br>");
document.write("El numero es: " + num ,"<br>" )
document.write("El numero inverso es: " + inverso(num));

