import listaNumeros from "../../files/listaPosiblesCapicua.json";

const invertirArray = (arr: number[]): number[] => {
  const arrayInvertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrayInvertido.push(arr[i]);
  }

  return arrayInvertido;
};

const esCapicua = (arr1: number[], arr2: number[]): boolean => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

const imprimirMensaje = (answer: boolean): void => {
  console.log(`El array de JSON ${answer == true ? "SI" : "NO"} es capicua`);
};

const arrayinvertido = invertirArray(listaNumeros);
imprimirMensaje(esCapicua(listaNumeros, arrayinvertido));
