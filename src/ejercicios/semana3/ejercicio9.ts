import { generarEnteroAleatorio } from "../../utilities/randomUtilities";
import { generarArrayAleatorio } from "../../utilities/arrayUtilities";

const arrayLen = generarEnteroAleatorio(100, 200);
const arrayNumeros = generarArrayAleatorio(arrayLen, 10, 1000);

const arrayCapicua = [];
const arrayNoCapicua = [];

const esCapicua = (num: number): boolean => {
  let aux = num;
  let inverso = 0;
  while (aux != 0) {
    const residuo = num % 10;
    inverso = inverso * 10 + residuo;
    aux = Math.floor(aux / 10);
  }

  return num === inverso;
};

const poblarArrays = (
  arr: number[],
  arrCapi: number[],
  arrNoCapi: number[]
): void => {
  for (let i = 0; i < arrayLen; i++) {
    if (esCapicua(arr[i])) {
      arrayCapicua.push(arr[i]);
    } else {
      arrayNoCapicua.push(arr[i]);
    }
  }
};

const mostrarMensaje = (arrCapi: number[], arrayNoCapi: number[]): void => {
  console.log(arrCapi);
  console.log(arrayNoCapi);
  console.log(`El array original tiene ${arrCapi.length} números capicua`);
  console.log(
    `El array original tiene ${arrayNoCapi.length} números no capicua`
  );
};

poblarArrays(arrayNumeros, arrayCapicua, arrayNoCapicua);

mostrarMensaje(arrayCapicua, arrayNoCapicua);
