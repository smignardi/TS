import { generarNumeroDecimalAleatorio } from "../../utilities/randomUtilities";

const radio = generarNumeroDecimalAleatorio(1, 5);

const calcularPerimetro = (radio: number): number => 2 * Math.PI * radio;

const calcularArea = (radio: number): number => Math.PI * Math.pow(radio, 2);

const perimetro = calcularPerimetro(radio);
const area = calcularArea(radio);

const imprimirMensaje = (
  radio: number,
  perimetro: number,
  area: number
): void =>
  console.log(
    `Con un radio de ${radio.toFixed(
      2
    )} m se obtiene un perimetro ${perimetro.toFixed(2)} metros`
  );
console.log(
  `Con un radio de ${radio.toFixed(2)} m se obtiene un area de ${area.toFixed(
    2
  )} metros cuadrados`
);

imprimirMensaje(radio, perimetro, area);
