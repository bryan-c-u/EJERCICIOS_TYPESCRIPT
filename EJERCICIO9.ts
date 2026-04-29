/* Diseña una función que permita convertir entre distintas unidades de medida:
"cm", "m" y "km".
Usa un tipo unión para representar las unidades posibles y asegúrate de validar
correctamente los valores de entrada y salida.
 */

type Unidad = "cm" | "m" | "km";

function convertir(valor: number, de: Unidad, a: Unidad) {
    if (valor < 0) return;

    const aMetros = {
        cm: 0.01,
        m: 1,
        km: 1000
    };

    const enMetros = valor * aMetros[de];
    return enMetros / aMetros[a];
}

console.log(convertir(100, "cm", "m"));
console.log(convertir(2, "km", "m"));
console.log(convertir(5, "m", "cm"));