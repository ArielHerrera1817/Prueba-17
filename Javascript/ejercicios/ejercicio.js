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

//imprimir en consola
console.log(compras.frutas[1]['nombre'])
console.log(compras.frutas[2]['precio'])
console.log(compras.frutas[3]['tamaños'][0])
console.log(compras.charcuteria[1]['nombre'])

/*esto es lo que yo trate de hacer inicialmente de la parte opcional (pero no me valio jeje 😅)
console.log(compras.frutas[0] ['precio']*[1]['precio'])
*/

//Esto lo hice con chatgpt, pero si entendi como hacerlo
var precioTotalFrutas = 0;

for (var i = 0; i < compras.frutas.length; i++) {
    precioTotalFrutas += compras.frutas[i].precio;
}

console.log('El precio total de las frutas es: ' + precioTotalFrutas);

var precioTotalCharcuteria = 0;

for (var i = 0; i < compras.charcuteria.length; i++) {
    precioTotalCharcuteria += compras.charcuteria[i].precio;
}

console.log('El precio total de la charcuteria es: ' + precioTotalCharcuteria);

console.log('El Precio Total es:', precioTotalFrutas + precioTotalCharcuteria)

/* imprimir en consola:
  1. El nombre de la segunda fruta
  2. El precio de la uva
  3. El valor "Grande" de la sandia
  4. El nombre del segundo elemento de charcuteria

  opcional:
  1. El precio total de las frutas
  2. El precio total de la charcuteria
  3. El precio total de la compra
*/

// Opcionales
console.log((compras.frutas[0].precio * compras.frutas[0].cantidad) + (compras.frutas[1].precio * compras.frutas[1].cantidad) + (compras.frutas[2].precio * compras.frutas[2].cantidad) + (compras.frutas[3].precio * compras.frutas[3].cantidad)); // 258
console.log((compras.charcuteria[0].precio * compras.charcuteria[0].cantidad) + (compras.charcuteria[1].precio * compras.charcuteria[1].cantidad)); // 200
console.log((compras.frutas[0].precio * compras.frutas[0].cantidad) + (compras.frutas[1].precio * compras.frutas[1].cantidad) + (compras.frutas[2].precio * compras.frutas[2].cantidad) + (compras.frutas[3].precio * compras.frutas[3].cantidad) + (compras.charcuteria[0].precio * compras.charcuteria[0].cantidad) + (compras.charcuteria[1].precio * compras.charcuteria[1].cantidad)); // 258

// Operadores comparativos
/*
  Los operadores comparativos son utilizados para comparar dos valores y
  devolver un valor booleano.
*/

var condicional = 5 === '5'; // false
console.log(condicional);
//Lista de operadores comparativos
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que
// == Igual que
// === Estrictamente igual que
// != Diferente que
// !== Estrictamente diferente que

// Operadores lógicos
/*
  Los operadores lógicos son utilizados para combinar dos o más valores
  booleanos y devolver un valor booleano.
*/
/*
  lista de operadores lógicos
  && AND (Y)
  || OR (O)
  ! NOT (NO)
*/

condicional = 5 > 3 && 3 < 2; // false
condicional = 5 > 3 || 3 < 2; // true
condicional = !(!(5 > 3)); // false

/* ----- ACTIVIDAD PARA REALIZAR EN CLASE ----- */
    
    // (Facil)
    var uno = !true || false; // false
    var dos = false && !false; //false
    var tres = true && !false; //true

    //(Medio)
    var cuatro = (5 === 5) || (!true); //true
    var cinco = (!0) || (5 < 0); //true
    var seis = (3 > 4) && (!0); //false

    //Avanzado
    var siete = ( ((false || true) && (!false && true) )) || (true && false) //true
    var ocho = (6 === 3+3) && (9/3 >= 3); //true
    var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); //true

    //Hardcore
    var diez = !(!true) === !( !( 5 >= 5 ) ); //true
    var once = !( true && (!true === !( !(8 === 4*2) )) ); //true

    //Ultra-Hardcore
    var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false); //true

    //Leyenda
    var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));

    // Operadores aritméticos
    /*
      Los operadores aritméticos son utilizados para realizar operaciones
      matemáticas.
    */
    var suma = 5 + 3; // 8
    /*
      Lista de operadores aritméticos
      + Suma
      - Resta
      * Multiplicación
      ** Exponenciación
      / División
      % Módulo
      ++ Incremento
      -- Decremento
      = Asignación
      =+ Suma y asignación
      =- Resta y asignación
      =* Multiplicación y asignación
      =/ División y asignación
      =% Módulo y asignación
    */
    var Exponenciacion = 5 ** 3; // 125 5x5x5
    var residuo = 40 % 8; // 0
    /*
      4/2 = 2
      4%2 = 0
      5/2 = 2.5
      5%2 = 1
    */
    var incremento = 5;
    incremento++; // 6
    incremento--; // 5
    var asignacion = 5;
    asignacion += 3; // 8 asignacion = asignacion + 3
    asignacion -= 3; // 5 asignacion = asignacion - 3
    asignacion *= 3; // 15 asignacion = asignacion * 3
    asignacion /= 3; // 5 asignacion = asignacion / 3
    asignacion %= 3; // 2 asignacion = asignacion % 3

  // Condicionales
  /*
    Los condicionales son utilizados para tomar decisiones en base a una
    condición.
  */
  var condicion = 5 > 3;
  if (condicion) {
    console.log('5 es mayor que 3');
  } else {
    console.log('5 no es mayor que 3');
  }

  var tiempo = true;
  var dinero = true;
  
  if (tiempo && dinero) {
    console.log('Vamos al cine');
  } else if (tiempo || dinero) {
    console.log('Vamos al cine');
  } else {
    console.log('No vamos al cine');
  }

  /*
    Ejercicios de la seccion
    1) Realizar un programa que permita determinar si un numero es par o impar
    2) Realiza un piedra papel o tijera en donde dos jugadores ingresen su opcion y se determine quien gana
    3) Realiza un programa que funcione como un semaforo, en donde se pueda ingresar un color y se muestre un mensaje dependiendo del color, si es verde imprima "Continua", amarillo imprima "despacio" o rojo "detente", sino es ninguno imprima "error"
    4) Realiza una calculadora que permita realizar las operaciones basicas (suma, resta, multiplicacion y division) con dos numeros, debe preguntarte el numero1, el numero2 y la operacion que deseas realizar

    fecha de entrega: 06/06/24
    */