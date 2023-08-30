import { generarEnteroAleatorio } from "../../utilities/randomUtilities";

const n = generarEnteroAleatorio(15, 30);

const calcularMediaArmonica = (totalNum: number): number => {
  let valorMediaArmonica = 0;
  for (let i = 0; i < totalNum; i++) {
    const numAleatorioActual = generarEnteroAleatorio(10, 20);
    valorMediaArmonica = valorMediaArmonica + 1 / numAleatorioActual;
  }
  return totalNum / valorMediaArmonica;
};

const imprimirMensaje = (n: number, valorMediaArmonica: number): void =>
  console.log(
    `La media armonica es ${valorMediaArmonica.toFixed(
      2
    )} para un valor de N de ${n}`
  );

imprimirMensaje(n, calcularMediaArmonica(n));
