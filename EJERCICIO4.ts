/* Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo.
*/

type tipo = "texto" | "numero" | "email";
type valor = number | string


type Formulario = {
    nombre: string;
    tipoFormulario: tipo;
    valorFormulario: valor;
}

const formulario: Formulario[] = [
    {
        nombre: "Apellido",
        tipoFormulario: "texto",
        valorFormulario: 34
    },
    {
        nombre: "Nombre",
        tipoFormulario: "texto",
        valorFormulario: 30
    },
    {
        nombre: "Correo",
        tipoFormulario: "email",
        valorFormulario: "uranpavabryancamilo@gmail.com",
    }
]
function validarFormulario(formularios: Formulario[]) {
    const errores: string[] = [];

    formularios.forEach((campo) => {

        if (campo.tipoFormulario === "numero") {
            if (typeof campo.valorFormulario !== "number") {
                errores.push(campo.nombre);
            }
        }

        if (campo.tipoFormulario === "texto") {
            if (typeof campo.valorFormulario !== "string") {
                errores.push(campo.nombre);
            }
        }

        if (campo.tipoFormulario === "email") {
            if (
                typeof campo.valorFormulario !== "string" ||
                !campo.valorFormulario.includes("@")
            ) {
                errores.push(campo.nombre);
            }
        }
    })
    return errores;
}
console.log (validarFormulario(formulario));