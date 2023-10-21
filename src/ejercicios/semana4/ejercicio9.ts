import notasValores from "../../files/numbersString.json";

const arrayNumeros = [];
const arrayPesos = [];

const rellenarArrays = (
  arrStrings: String[],
  arr1: number[],
  arr2: number[]
): void => {
  for (let i = 0; i < arrStrings.length; i++) {
    const arrAux = arrStrings[i].split(";");
    arr1.push(parseInt(arrAux[0]));
    arr2.push(parseInt(arrAux[1]));
  }

  console.log(arr1);
  console.log(arr2);
};

const calcularPromedioPonderado = (
  arrNum: number[],
  arrPes: number[]
): number => {
  let acumulado = 0;
  for (let i = 0; i < arrNum.length; i++) {
    acumulado = acumulado + arrNum[i] * arrPes[i];
  }
  return acumulado / arrNum.length;
};

const imprimirMensaje = (num: number): void => {
  console.log(`Promedio ponderado: ${num}`);
};

rellenarArrays(notasValores, arrayNumeros, arrayPesos);
imprimirMensaje(calcularPromedioPonderado(arrayNumeros, arrayPesos));
