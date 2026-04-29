/* Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
"examen") y nota.
Escribe una función que calcule el promedio por categoría para un estudiante
específico.
*/

type Calificacion = {
    estudianteId: number;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
}

const calificaciones: Calificacion[] = [
    { estudianteId: 1, categoria: "tareas", nota: 4 },
    { estudianteId: 1, categoria: "tareas", nota: 2 },
    { estudianteId: 1, categoria: "quices", nota: 3 },
    { estudianteId: 1, categoria: "examen", nota: 5 }
];

function promedioPorCategoria(calificaciones: Calificacion[], estudianteId: number) {

    const datos = {
        tareas: { suma: 0, count: 0 },
        quices: { suma: 0, count: 0 },
        examen: { suma: 0, count: 0 }
    };

    calificaciones.forEach(c => {
        if (c.estudianteId === estudianteId) {
            datos[c.categoria].suma += c.nota;
            datos[c.categoria].count++;
        }
    });

    return {
        tareas: datos.tareas.count ? datos.tareas.suma / datos.tareas.count : 0,
        quices: datos.quices.count ? datos.quices.suma / datos.quices.count : 0,
        examen: datos.examen.count ? datos.examen.suma / datos.examen.count : 0
    };
}

console.log(promedioPorCategoria(calificaciones, 1));