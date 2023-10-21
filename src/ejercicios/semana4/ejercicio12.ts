import listaNumeros from "../../files/listaNumbers.json";

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
  for (let i = 0; i < arr.length; i++) {
    if (esCapicua(arr[i])) {
      arrCapi.push(arr[i]);
    } else {
      arrNoCapi.push(arr[i]);
    }
  }
};

poblarArrays(listaNumeros, arrayCapicua, arrayNoCapicua);
console.log(arrayCapicua);
console.log(arrayNoCapicua);
