import { generarNumeroDecimalAleatorio } from "../../utilities/randomUtilities";

const peso = generarNumeroDecimalAleatorio(50, 100);
const altura = generarNumeroDecimalAleatorio(1.5, 2.0);

const calcularIMC = (altura: number, peso: number): number =>
  peso / Math.pow(altura, 2);

const imc = calcularIMC(altura, peso);

const imprimirMensaje = (peso: number, altura: number, imc: number): void =>
  console.log(
    `Para el peso ${peso.toFixed(2)} kg y la altura de ${altura.toFixed(
      2
    )} m se tiene un IMC de ${imc.toFixed(2)}`
  );

imprimirMensaje(peso, altura, imc);
