import numbersString from "../../files/numbersString.json";

const array1 = [];
const array2 = [];

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
};

const sumarArrays = (arr1: number[], arr2: number[]): number[] => {
  let sumaResult = [];
  for (let i = 0; i < arr1.length; i++) {
    sumaResult.push(arr1[i] + arr2[i]);
  }
  return sumaResult;
};

const restarArrays = (arr1: number[], arr2: number[]): number[] => {
  let restaResult = [];
  for (let i = 0; i < arr1.length; i++) {
    restaResult.push(arr1[i] - arr2[i]);
  }
  return restaResult;
};

const multiplicarArrays = (arr1: number[], arr2: number[]): number[] => {
  let multiResult = [];
  for (let i = 0; i < arr1.length; i++) {
    multiResult.push(arr1[i] * arr2[i]);
  }
  return multiResult;
};

const dividirArrays = (arr1: number[], arr2: number[]): number[] => {
  let divisionResult = [];
  for (let i = 0; i < arr1.length; i++) {
    divisionResult.push(arr1[i] / arr2[i]);
  }
  return divisionResult;
};

rellenarArrays(numbersString, array1, array2);

console.log(`SUMA: ${sumarArrays(array1, array2)}`);
console.log(`RESTA: ${restarArrays(array1, array2)}`);
console.log(`DIVISION: ${multiplicarArrays(array1, array2)}`);
console.log(`DIVISION: ${dividirArrays(array1, array2)}`);
