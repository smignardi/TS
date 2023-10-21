import { generarEnteroAleatorio } from "../../utilities/randomUtilities";

const calcularNumCabezas = (vacas: number, gallinas: number): number =>
  vacas + gallinas;

const calcularNumPatas = (vacas: number, gallinas: number): number =>
  vacas * 4 + gallinas * 2;

const vacas = generarEnteroAleatorio(1, 5);
const gallinas = generarEnteroAleatorio(1, 5);

const numCabezas = calcularNumCabezas(vacas, gallinas);
const numPatas = calcularNumPatas(vacas, gallinas);

const imprimirMensaje = (
  vacas: number,
  gallinas: number,
  cabezas: number,
  patas: number
): void => {
  console.log(
    `En ${vacas} vacas & ${gallinas} gallinas hay ${cabezas} cabezas`
  );
  console.log(`En ${vacas} vacas & ${gallinas} gallinas hay ${patas} patas`);
};

imprimirMensaje(vacas, gallinas, numCabezas, numPatas);
