import { generarNumeroDecimalAleatorio } from "../../utilities/randomUtilities";

const calcularSoles = (usd: number): number => usd * 3.9;

const calcularEuros = (usd: number): number => usd * 0.99;

const calcularYenes = (usd: number): number => usd * 145.66;

const calcularYuan = (usd: number): number => usd * 7.25;

const calcularRupias = (usd: number): number => usd * 15637.8;

const cantidadUsd = generarNumeroDecimalAleatorio(100, 200);

const usdSoles = calcularSoles(cantidadUsd);
const usdEuros = calcularEuros(cantidadUsd);
const usdYenes = calcularYenes(cantidadUsd);
const usdYuan = calcularYuan(cantidadUsd);
const usdRupias = calcularRupias(cantidadUsd);

const imprimirMensaje = (): void => {
  console.log(
    `El equivalente de ${cantidadUsd.toFixed(
      2
    )} USD en Soles es ${usdSoles.toFixed(2)}`
  );
  console.log(
    `El equivalente de ${cantidadUsd.toFixed(
      2
    )} USD en Euros es ${usdEuros.toFixed(2)}`
  );
  console.log(
    `El equivalente de ${cantidadUsd.toFixed(
      2
    )} USD en Yenes es ${usdYenes.toFixed(2)}`
  );
  console.log(
    `El equivalente de ${cantidadUsd.toFixed(
      2
    )} USD en Yuan es ${usdYuan.toFixed(2)}`
  );
  console.log(
    `El equivalente de ${cantidadUsd.toFixed(
      2
    )} USD en Rupias es ${usdRupias.toFixed(2)}`
  );
};

imprimirMensaje();
