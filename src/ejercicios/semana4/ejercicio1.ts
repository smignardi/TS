"use strict";
import notasAlumnos from "../../files/personas.json";

const estaAprobado = (nota: number): String => {
  return nota > 11 ? "APROBADO" : "DESAPROBADO";
};

const imprimirReporte = (): void => {
  for (let i = 0; i < notasAlumnos.length; i++) {
    console.log(
      `NOMBRE: ${notasAlumnos[i].nombre} NOTA: ${
        notasAlumnos[i].nota
      } ${estaAprobado(notasAlumnos[i].nota)}`
    );
  }
};

imprimirReporte();
