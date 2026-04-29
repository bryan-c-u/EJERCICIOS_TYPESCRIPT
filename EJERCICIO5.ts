/* Modela un historial de cambios de un usuario, donde cada cambio puede ser de
nombre, correo o contraseña.
Escribe una función que reciba una lista de estos cambios y devuelva un resumen
con el número de veces que se cambió cada uno.
*/

type CambioNombre = {
    tipo: "nombre";
    nuevoNombre: string;
}

type CambioCorreo = {
    tipo: "correo";
    nuevoCorreo: string;
}

type CambioContraseña = {
    tipo: "contraseña";
    nuevaContraseña: string;
}

type Cambio = CambioNombre | CambioCorreo | CambioContraseña;

const historial: Cambio[] = [
    { tipo: "nombre", nuevoNombre: "Juan" },
    { tipo: "correo", nuevoCorreo: "juan@gmail.com" },
    { tipo: "contraseña", nuevaContraseña: "1234" },
    { tipo: "nombre", nuevoNombre: "Carlos" },
    { tipo: "correo", nuevoCorreo: "carlos@gmail.com" }
];

function resumenCambios(cambios: Cambio[]) {

    const resumen = {
        nombre: 0,
        correo: 0,
        contraseña: 0
    };

    cambios.forEach((cambio) => {

        if (cambio.tipo === "nombre") {
            resumen.nombre++;
        }

        if (cambio.tipo === "correo") {
            resumen.correo++;
        }

        if (cambio.tipo === "contraseña") {
            resumen.contraseña++;
        }
    });

    return resumen;
}

console.log(resumenCambios(historial));