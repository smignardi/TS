import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities";

const arrayLen = generarEnteroAleatorio(15, 20);
const arrayNumeros = generarArrayAleatorio(arrayLen, 100, 999);

console.log(arrayNumeros);

const calcularMediaArmonica = (arr: number[]): number => {
  let acumulado = 0;
  for (let i = 0; i < arrayLen; i++) {
    acumulado += Math.pow(arr[i], -1);
  }
  return arrayLen / acumulado;
};

const imprimirMensaje = (mediaArm: number): void => {
  console.log(`${mediaArm.toFixed(5)} es el resultado de la media armonica`);
};

imprimirMensaje(calcularMediaArmonica(arrayNumeros));
