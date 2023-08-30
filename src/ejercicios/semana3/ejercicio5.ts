import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities";

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 100, 999);

console.log(arrayNumeros);

const calcularMediaGeometrica = (arr: number[]): number => {
  let acumulado = 1;
  for (let i = 0; i < arrayLen; i++) {
    acumulado *= arr[i];
  }
  return Math.pow(acumulado, 1 / arrayLen);
};

const imprimirMensaje = (mediaGeo: number): void => {
  console.log(`${mediaGeo.toFixed(2)} es el resultado de la media geometrica`);
};

imprimirMensaje(calcularMediaGeometrica(arrayNumeros));
