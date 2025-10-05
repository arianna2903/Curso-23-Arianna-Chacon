let number1 = Number(prompt("Ingrese el primer numero: "));
let number2 = Number(prompt("Ingrese el segundo numero: "));
let operacion = prompt("Ingrese la operacion a realizar (suma, resta, multiplicación, división): ");
//.toLowerCase(); es para transformar cualquier palabra en minuscula.

if (operacion === "suma") {
  console.log("El resultado de la suma es: " + (number1 + number2));
} else if (operacion === "resta") {
  console.log("El resultado de la resta es: " + (number1 - number2));
} else if (operacion === "multiplicación" || operacion === "multiplicacion") {
  console.log("El resultado de la multiplicación es: " + (number1 * number2));
} else if (operacion === "división" || operacion === "division") {
  if (number2 !== 0) {
    console.log("El resultado de la división es: " + (number1 / number2));
  } else {
    console.log("Error: No se puede dividir entre cero.");
  }
} else {
  console.log("Operación no válida. Por favor, ingrese una operación válida.") //(alert) Imprime el mensaje en una ventana en la pantalla y no en la consola.
} 