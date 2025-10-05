//Esto es un comentario de una linea

/* 
  Esto es un comentario de varias
  lineas
*/

/*Variables
  Las variables son espacios de memoria que almacenan un valor
*/ 
//Declaracion de una variable 

let nombre = "Juan"; //Variable
console.log(nombre); //Imprime "Juan"
//Reasignacion de una variable
nombre = "Pedro"; //Reasignacion
console.log(nombre); //Imprime Pedro 

//Tipos de datos
let number = 42; //Numero
let float = 3.14; //Numero de punto flotante
let string = "Hola, mundo"; //Cadena de texto
let boolean = true; //Booleano (true/false)
let array = ["pera", "manzana", "uva"]; //Array (Lista)
console.log(array); //Imprime ["pera", "manzana", "uva"]
console.log(array[0]);
let nulo = null; //Nulo (sin valor)
let indefinido //= undefined; Indefinido (sin asignar)
let objeto = {nombre: "Juan", edad: 30}; //Objeto
console.log(objeto); //Imprime {nombre: "Juan", edad: 30}
console.log(objeto.nombre); //Acceso a una propiedad del objeto, imprime "Juan"

let suma_numeros = 5 + 3; //Suma
let suma_string = "a10" + "2"; //Resta

//Practica
let prueba = "Pedro";
prueba = 23;
prueba = [1, 2, 3];
console.log(prueba);

console.log(prueba[1]); //Imprime 2  
consolelog (2 + 2);

let estudiante = {
  nombre: "Jose",
  apellido: "Changir",
  edad: 17
}

console.log (estudiante.edad);

//Operadores aritmeticos
/*
  Los operadores aritmeticos son utilizados para realizar operaciones matematicas. 
  - Suma: +
  - Resta: -
  - Multiplicacion: *
  - Division: /
  - Modulo (residuo de la division): %
  - Exponente: **
*/

let suma = 5 + 3; //Suma 8
let resta = 5 - 3; //Resta 2 
let multiplicacion = 5 * 3; //Multiplica 15
let division = 5 / 3; //Division 1.666666666667 
let modulo = 5 % 2; //Modulo (resto de la division) 1
let exponente = 5 ** 3; //Exponente (5 elevado a la 3) 125 

//Operadores comparativos
/*
  - Igualdad: == (No toma en cuenta los tipos de datos)
  - Desigualdad: !=
  - Igualdad estricta: === (Toma en cuenta los tipos de datos)
  - Desigualdad estricta: !==
  - Mayor que: > 
  - Menor que: <
  - Mayor o igual que: >=
  - Menor o igual que: <=
*/

let igualdad = 5 == "5"; // Igualdad (true, porque el valor es el mismo)
let desigualdad = 5 != "5"; // Desigualdad (false, porque el valor es el mismo)
let igualdadEstricta = 5 === "5"; // Igualdad estricta (false, porque el tipo de datos es diferente)
let desigualdadEstricta = 5 !== "5"; // Desigualdad estricta (true, porque el tipo de datos es diferente)
let mayorQue = 5 > 3; // Mayor que (true)
let menorQue = 5 < 3; // Menor que (false)
let mayorOigualQue = 5 >= 5; // Mayor o igual que (true)
let menorOigualQue = 5 <= 3; // Menor o igual que (false)

//Operadores logicos
/*
  Los operadores logicos son utilizados para combinar expresiones booleanas.
  - AND: &&
  - OR: || 
  - NOT: !
*/

//Ejercicios para practicar la logica

// (Facil)
var uno = !true || false; //False 
var dos = false && !false; //False
var tres = true && !false; //True

//(Medio)
var cuatro = 5 === 5 || !true;
var cinco = !0 || 5 < 0;
var seis = 3 > 4 && !0; 

//(Avanzado)
var siete = ((false || true) && !false && true) || (true && false);
var ocho = 6 === 3 + 3 && 9 / 3 >= 3; 
var nueve = !!false || ("1" == 1 && !false === true); //True

//Hardcore
var diez = !!true === !!(5 >= 5); //True
var once = !(true && !true === !!(8 === 4 * 2)); //True

//Ultra-hardcore
var doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false;

//Leyenda 
var trece = !(
  (! (! (10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 && 
  ! (1 + 1 !== 10 / 5) !== true
);

//Inmortal
var catorce = !! (
  (
    (10 % 3 != 1) ||
    (typeof("10" - 5) !== "number") ||
    !! ([] && {})
  ) &&
  (
    (12 * 4 === "48") ||
    (7 <= "7" && "7" <= 7) ||
    (Boolean(0) === Boolean("0"))
  )
);

/*Operadores de Asignacion
  Los operadores de asignacion son utilizados para asignar valores a variables.
  -Asignacion simple: = 
  -Suma y asignacion: +=
  -Resta y asignacion: -=
  -Multiplicacion y asignacion: *=
  -Division y asignacion: /=
  -Modulo y asignacion: %=1
  */

let asignacion = 5; // Asignacion simple
/*
  Para las siguientes operaciones, se toma el valor actual de la variable 'asignacion' 
  y se realiza la operacion con el valor indicado, luego se asigna el resultado de nuevo a 'asignacion'
*/
asignacion += 3; // Suma y asignacion (asignacion = asignacion + 3)
asignacion -= 2; // Resta y asignacion (asignacion = asignacion -2)
asignacion *= 2; // Multiplicacion y asignacion (asignacion = asignacion * 2)
asignacion /= 4; // Division y asignacion (asignacion = asignacion / 4)
asignacion %= 3; // Modulo y asignacion (asignacion = asignacion % 3)
console.log(asignacion); //Imprime el valor final de 'asignacion'

// switch
/*
  La estructura switch se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión.
  Es útil cuando se tienen múltiples condiciones que dependen del mismo valor.
*/

let dia = 1; // Supongamos que 1 es Lunes, 2 es Martes, etc.
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}

// if else
/*
  La estructura if-else se utiliza para ejecutar un bloque de código si una condición es verdadera,
  y otro bloque si la condición es falsa.
*/

let edad = 18; // Supongamos que la edad es 18
if (edad < 0 || edad > 120) {
  console.log("Edad no válida");
} else if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

let input = prompt("Ingrese un número entre 1 y 10:");

/*
  Ejercicios para practicar
  1. Pidele tres datos al usuario. Numero 1, Numero 2 y operacion (suma, resta, multiplicación o división). Crea
  un condicional que imprima el resultado de la operación entre los dos números.

  2. Pidele un numero al usuario y crea un condicional que imprima si el número es par o impar.

  3. Crea un código que le pida un numero entre 1 y 12 e imprima el nombre del mes correspondiente.
  (1 = enero, 2 = febrero, etc.). Si el número no está entre 1 y 12, imprime "Número no válido".
*/