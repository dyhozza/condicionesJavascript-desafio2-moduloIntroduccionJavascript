// REQUERIMIENTO 1
let imagenRequerimiento1 = document.querySelector('#imagen1');
// estoy declarando variable y le estoy diciendo donde buscar lo que necesito
    // como las propiedades de la imagen va a variar, la variable la declaro LET
    // para buscar la imagen que necesito lo hago con document.querySelector
// a la variable le agrego un estilo CSS porque sera lo que necesito comparar
imagenRequerimiento1.style.border = '2px solid red';
    // la pregunta sera ¿mi imagen tiene borde? ---  "SI" tiene borde = se lo quito --- "NO" tiene borde = se lo pongo.


// REQUERIMIENTO 2
//declaracion de variables y le asigno el valor que ingreso con el input
let cant1 = Number(document.getElementById('cant1').value);
let cant2 = Number(document.getElementById('cant2').value);
let cant3 = Number(document.getElementById('cant3').value);
// la cantidad a comparar sera la suma de las 3 variables
let totalStickers = cant1 + cant2 + cant3;
// la pregunta sera ¿la suma de la cantidad es menor ,a 10? ---  "SI" es menor = muestro numero de total --- "NO" es menor = escirbo 'demasiado'.
// el parrafo lleva el id que voy a dodificar de acuerdo a la condicion
let resultado = document.getElementById('total');

// REQUERIMIENTO 3
        // este ejercicio se parece al segundo, la diferencia es que no va a sumar.
//declaracion de variables y le asigno el valor que ingreso con el input
let digit1 = document.getElementById('digit1').value;
let digit2 = document.getElementById('digit2').value;
let digit3 = document.getElementById('digit3').value;
let contraseña = digit1 + digit2 + digit3;
