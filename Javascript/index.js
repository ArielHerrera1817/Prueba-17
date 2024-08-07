console.log('Hola desde index.js');

// Comentario de una sola linea

/*
  Comentario de 
  multiples lineas
*/

// Variables
/*
  Una variable es un espacio en memoria que se reserva para almacenar un valor
  y que puede ser modificado en cualquier momento.
*/

// Declaración de variables
var nombre = 'Juan';
console.log(nombre);

// Tipos de datos
/*
  Los tipos de datos son las diferentes formas en las que se pueden representar
  los valores en JavaScript.
*/
nombre = 'Carlos'; //String
console.log(nombre);

var edad = 25; //Number
var sueldo = 2500.50; //Number
console.log(edad + sueldo); // 2525.5
var tieneTrabajo = true; //Boolean
var tieneDinero = false; //Boolean
console.log(tieneTrabajo, tieneDinero);
var puestoDeTrabajo; //Undefined
console.log(puestoDeTrabajo);
var nulo = null; // Null
console.log(nulo);

//Objeto
var persona = {
  nombre: 'Juan',
  edad: 25,
  tieneTrabajo: true
};

console.log(persona, persona.nombre, persona.edad, persona.tieneTrabajo);

persona = {
  nombre: 'Juan',
  juan: {
    porte: 1.80,
    color: 'blanco',
    ojos: 'verdes'
  },
  edad: 26,
  tieneTrabajo: true,
  mascota: {
    nombre: 'Firulais',
    edad: 3,
    tipo: 'Perro'
  }
};
// Acceder detalles de Juan
console.log(persona.juan.porte, persona.juan.color, persona.juan.ojos)
// Acceder al nombre de la mascota
console.log(persona.mascota.nombre);

// Un personaje de un videojuego
var personaje = {
  nombre: 'Mario',
  vida: 100,
  ataque: 10,
  defensa: 5,
  velocidad: 20
};
console.log(personaje.nombre, personaje.vida)

// Arreglos (Arrays)
var frutas = ['Manzana', 'Pera', 'Uva', 'Sandia'];
console.log(frutas);
console.log(frutas[0]); // Manzana

var compras = [
  ['Manzana', 2],
  ['Pera', 3],
  ['Uva', 1],
  ['Sandia', 1],
  [{nombre: 'Papaya', precio: 50}, 2]
];

console.log(compras[1][0]); // Pera
//console.log(compras[4][0].nombre); // Papaya
console.log(compras[4][0]['nombre']); // Papaya

/*
  Ejercicios de tipos de datos
  Segun el siguien objeto

  var compras = {
    frutas: [
      {
        nombre: 'Manzana',
        tipos: ['Roja', 'Verde'],
        cantidad: 2,
        precio: 5
      },
      {
        nombre: 'Pera',
        cantidad: 3,
        precio: 6
      },
      {
        nombre: 'Uva',
        tipos: ['Verde', 'Morada'],
        cantidad: 1,
        precio: 10
      },
      {
        nombre: 'Sandia',
        cantidad: 1,
        precio: 20,
        tamaños: ['Grande', 'Mediana', 'Pequeña']
      }
    ],
    charcuteria: [
      {
        nombre: 'Jamón',
        cantidad: 1,
        precio: 100
      },
      {
        nombre: 'Salchichón',
        cantidad: 2,
        precio: 50
      }
    ]
  }

  imprimir en consola:
  1. El nombre de la segunda fruta
  2. El precio de la uva
  3. El valor "Grande" de la sandia
  4. El nombre del segundo elemento de charcuteria

  opcional:
  1. El precio total de las frutas
  2. El precio total de la charcuteria
  3. El precio total de la compra
*/