import { bblSort } from "../../utilities/arrayUtilities";
import listaVideojuegos from "../../files/videojuegos.json";

const ordenarArray = (arr): any[] => {
  return listaVideojuegos.juegos.sort((a, b) => a.precio - b.precio);
};

const imprimirReporte = (lista): void => {
  console.log(lista);
};

ordenarArray(listaVideojuegos);

imprimirReporte(listaVideojuegos);
