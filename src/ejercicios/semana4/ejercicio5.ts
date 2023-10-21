import culpables from "../../files/culpables.json";

const arrayInocentes = [];
const arrayCulpables = [];

const rellenarListas = (arr: any[], arr1: String[], arr2: String[]):void => {
  for (let i = 0; i < arr.length; i++) {
    if (
      verificarCondiciones(arr[i].nombre, arr[i].apellido1, arr[i].apellido2)
    ) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
};

const verificarCondiciones = (
  nombre: string,
  apellido1: string,
  apellido2: string
): boolean => {
  for (let i = 0; i < culpables.length; i++) {
    return (
      5 <= apellido1.length &&
      apellido1.length <= 10 &&
      apellido2.includes("AR") &&
      nombre.startsWith("D")
    );
  }
};

const imprimirListaFormato1 = (): void => {
  console.log("LISTA DE CULPABLES :");
  for (let i = 0; i < arrayCulpables.length; i++) {
    console.log(
      `${i + 1}. `,
      arrayCulpables[i].nombre,
      arrayCulpables[i].apellido1,
      arrayCulpables[i].apellido2
    );
  }
  console.log("LISTA DE INOCENTES :");
  for (let i = 0; i < arrayInocentes.length; i++) {
    console.log(
      `${i + 1}. `,
      arrayInocentes[i].nombre,
      arrayInocentes[i].apellido1,
      arrayInocentes[i].apellido2
    );
  }
};

rellenarListas(culpables, arrayCulpables, arrayInocentes);
imprimirListaFormato1();
