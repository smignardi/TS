import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities";

const arrayLen = generarEnteroAleatorio(100, 200);
const arrayNumeros = generarArrayAleatorio(arrayLen, 10, 100);

const arrayMa50 = [];
const arrayMe50 = [];

const poblarArrays = (
  arr: number[],
  arrMayor: number[],
  arrMenor: number[]
): void => {
  for (let i = 0; i < arrayLen; i++) {
    if (arr[i] >= 50) {
      arrMayor.push(arr[i]);
    } else {
      arrMenor.push(arr[i]);
    }
  }
};

const mostrarMensaje = (arrMayor: number[], arrayMenor: number[]): void => {
  console.log(arrMayor);
  console.log(arrayMenor);
  console.log(
    `El array original tiene ${arrMayor.length} números mayores o iguales a 50`
  );
  console.log(
    `El array original tiene ${arrayMenor.length} numeros menores a 50`
  );
};

poblarArrays(arrayNumeros, arrayMa50, arrayMe50);

mostrarMensaje(arrayMa50, arrayMe50);
