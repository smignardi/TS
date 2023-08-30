const palabra1 = "hola";
const palabra2 = "aloha";
const palabra3 = "computadora";

const concatenarCadenas = (
  word1: String,
  word2: String,
  word3: String
): String => word1 + " " + word2 + " " + word3 + " fin";

const cadenaConcatenada = concatenarCadenas(palabra1, palabra2, palabra3);

const imprimirMensaje = (
  palabra1: String,
  palabra2: String,
  palabra3: String
): void => console.log(concatenarCadenas(palabra1, palabra2, palabra3));

imprimirMensaje(palabra1, palabra2, palabra3);
