import listaNumeros from "../../files/listaNumbers.json";

const calcularPromedioSimple = (lista: number[]): number => {
  let acumulado = 0;
  for (let i = 0; i < lista.length; i++) {
    acumulado = acumulado + lista[i];
  }
  return acumulado / lista.length;
};

const imprimirMensaje = (valor: number): void => {
  console.log(`Promedio Simple : ${valor}`);
};

imprimirMensaje(calcularPromedioSimple(listaNumeros));
