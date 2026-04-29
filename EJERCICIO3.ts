/*Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing).
*/

type SMS = {
    numero: number;
    mensaje: string;
}

type Email = {
    receptor: string;
    mensaje: string;
}

type Push = {
    dispositivo: string;
    mensaje: string;
}

type Notificacion = SMS | Email | Push;

const notificacion: Notificacion = {
    numero: 234,
    mensaje: "Hola SMS",
};

function enviarNotificacion(notificacion: Notificacion) {

    if ("numero" in notificacion) {
        console.log("Enviando SMS al número:", notificacion.numero);
    }

    else if ("receptor" in notificacion) {
        console.log("Enviando Email a:", notificacion.receptor);
    }

    else {
        console.log("Enviando notificación Push al dispositivo:", notificacion.dispositivo);
    }
}

enviarNotificacion(notificacion);