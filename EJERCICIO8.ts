/* Crea un tipo Usuario con nombre, edad, estado activo y rol ("admin", "editor",
"visitante").
Implementa una función que devuelva únicamente los usuarios que sean mayores
de edad, estén activos y no tengan el rol de visitante.
*/

type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
}

const usuarios: Usuario[] = [
    { nombre: "Juan", edad: 20, activo: true, rol: "admin" },
    { nombre: "Ana", edad: 17, activo: true, rol: "editor" },
    { nombre: "Pedro", edad: 25, activo: false, rol: "admin" },
    { nombre: "Luis", edad: 30, activo: true, rol: "visitante" },
    { nombre: "Maria", edad: 22, activo: true, rol: "editor" }
];

function filtrarUsuarios(usuarios: Usuario[]) {
    return usuarios.filter(usuario => 
        usuario.edad >= 18 &&
        usuario.activo === true &&
        usuario.rol !== "visitante"
    );
}

console.log(filtrarUsuarios(usuarios));