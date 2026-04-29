/*Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
la categoría.
Crea una función que reciba un arreglo de transacciones y retorne un objeto que
contenga la suma total agrupada por tipo. */

type TipoTransaccion = "ingreso" | "egreso";

type Transaccion = {
    monto : number;
    tipo : TipoTransaccion;
    categoria : string;
}

const transacciones : Transaccion[] = [{
    monto : 30000,
    tipo : "ingreso" ,
    categoria : "salario",

},{
    monto : 50000,
    tipo : "ingreso" ,
    categoria : "salario",
},{
    monto : 40000,
    tipo : "egreso" ,
    categoria : "salario",
}]
function calcularTotales(transacciones : Transaccion[]) {
    return transacciones.reduce((acc, cur) =>{

        if(cur.tipo === "ingreso"){
            acc.ingreso += cur.monto;
        }else{
            acc.egreso += cur.monto
        }
        return acc;
    },{ingreso : 0 , egreso : 0})
}

console.log(calcularTotales(transacciones));
