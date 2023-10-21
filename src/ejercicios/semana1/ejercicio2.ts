import { generarNumeroDecimalAleatorio } from "../../utilities/randomUtilities";

const cateto1 = generarNumeroDecimalAleatorio(1, 10);
const cateto2 = generarNumeroDecimalAleatorio(1, 10);

const calcularHipotenusa = (num1: number, num2: number): number =>
  Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));

const hipotenusa = calcularHipotenusa(cateto1, cateto2);

const imprimirMensaje = (
  cat1: number,
  cat2: number,
  hipotenusa: number
): void =>
  console.log(
    `El triangulo de catetos ${cat1.toFixed(2)} y ${cat2.toFixed(
      2
    )} tiene una hipotenusa de ${hipotenusa.toFixed(2)}`
  );

imprimirMensaje(cateto1, cateto2, hipotenusa);
