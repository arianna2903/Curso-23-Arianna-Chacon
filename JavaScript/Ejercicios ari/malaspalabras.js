let malaspalabras = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"] 
let resultado = ""

function malasPalabras(texto) {
  if (typeof texto !== "string") {
    console.log("El parrafo debe ser una cadena de texto. Intente de nuevo")  
    return false
  } else if (texto == true) {   
    texto (malaspalabras.forEach())
    }
  }

console.log(malasPalabras("Hola tonto, que chispas con recorcholis lo que me paso ayer"))



/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna de las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.
*/