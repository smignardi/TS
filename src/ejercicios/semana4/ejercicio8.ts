import listaNumeros from "../../files/listaNumbers.json";

const calcularMediaArmonica = (lista: number[]): number => {
  let acumulado = 0;
  for (let i = 0; i < lista.length; i++) {
    acumulado = acumulado + 1 / lista[i];
  }
  return lista.length / acumulado;
};

const imprimirMensaje = (valor: number): void => {
  console.log(`Media Geometrica : ${valor}`);
};

imprimirMensaje(calcularMediaArmonica(listaNumeros));
