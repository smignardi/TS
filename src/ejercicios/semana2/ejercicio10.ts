const num1 = 121;
const num2 = 335533;
const num3 = 741;
const num4 = 321;

const calcularInversa = (numero: number): number => {
  let aux = numero;
  let inverso = 0;

  while (aux != 0) {
    inverso = 10 * inverso + (aux % 10);
    aux = Math.floor(aux / 10);
  }
  return inverso;
};

const verificarCapicua = (
  numeroOriginal: number,
  numeroInvertido: number
): boolean => {
  return numeroOriginal === numeroInvertido;
};

const imprimirMensajeFinal = (
  numeroOriginal: number,
  numeroInvertido: number,
  capicauaValidation: boolean
): void =>
  console.log(
    `La inversa de ${numeroOriginal} es ${numeroInvertido} y por ende es capicua es: ${capicauaValidation}`
  );

imprimirMensajeFinal(
  num1,
  calcularInversa(num1),
  verificarCapicua(num1, calcularInversa(num1))
);

imprimirMensajeFinal(
  num2,
  calcularInversa(num2),
  verificarCapicua(num2, calcularInversa(num2))
);

imprimirMensajeFinal(
  num3,
  calcularInversa(num3),
  verificarCapicua(num3, calcularInversa(num3))
);

imprimirMensajeFinal(
  num4,
  calcularInversa(num4),
  verificarCapicua(num4, calcularInversa(num4))
);
