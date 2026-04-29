/*Crea un tipo Tarea que tenga las propiedades: id, descripción, si está completada,
y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
Implementa una función que reciba una lista de tareas y devuelva solo aquellas
que estén en progreso o pendientes.*/

console.log("Hola mundo");
type tarea = {
    id: number;
    descripcion: string;
    completada: boolean;
    estado: "pendiente" | "en progreso" | "completada";
}
const tareas :  tarea []= [{
    id : 1,
    descripcion: "matematicas",
    completada: false,
    estado : "pendiente"
},
{
    id : 2,
    descripcion: "fisica",
    completada: false,
    estado : "pendiente"
},
{
    id : 3,
    descripcion: "Ingles",
    completada: true,
    estado : "completada"
}];

function getTaskProgressOrPending(tareas: tarea[]) {
return tareas.filter((tareas: tarea) => tareas.estado !== "completada")
}
console.log(getTaskProgressOrPending(tareas));