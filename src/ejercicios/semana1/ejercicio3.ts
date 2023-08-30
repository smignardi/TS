import { generarNumeroDecimalAleatorio } from "../../utilities/randomUtilities";

const lado = generarNumeroDecimalAleatorio(5, 500);

const calcularPerimetro = (lado: number): number => lado * 3;

const calcularArea = (lado: number): number =>
  (Math.sqrt(3) / 4) * Math.pow(lado, 2);

const perimetro = calcularPerimetro(lado);
const area = calcularArea(lado);

const imprimirMensaje = (lado: number, perimetro: number, area: number): void =>
  console.log(
    `El perímetro de un triángulo equilátero de lado ${lado.toFixed(
      2
    )} es ${perimetro.toFixed(2)}`
  );
console.log(
  `El área de un triángulo equilátero de lado ${lado.toFixed(
    2
  )} es ${area.toFixed(2)}`
);

imprimirMensaje(lado, perimetro, area);
