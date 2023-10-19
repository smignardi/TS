import { generarEnteroAleatorio } from "./randomUtilities";

export const generarArrayAleatorio = (length: number, min: number, max: number): number[] => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(generarEnteroAleatorio(min, max));
  }
  return array;
};

export const sumaArray = (array1: number[], array2: number[]): number[] => {
  const arraySuma: number[] = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] + array2[i]);
  }
  return arraySuma;
};

export const restaArrays = (array1: number[], array2: number[]): number[] => {
  const arraySuma: number[] = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] - array2[i]);
  }
  return arraySuma;
};

export const multiplicacionArrays = (array1: number[], array2: number[]): number[] => {
  const arraySuma: number[] = [];
  const arraysLength = array1.length;
  for (let i = 0; i < arraysLength; i++) {
    arraySuma.push(array1[i] * array2[i]);
  }
  return arraySuma;
};

export const bblSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
