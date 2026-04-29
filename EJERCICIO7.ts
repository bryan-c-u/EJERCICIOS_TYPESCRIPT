/*
Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
"tecnología", "papelería").
Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
categoría:
alimentos: menos de 20 unidades
tecnología: menos de 5 unidades
papelería: menos de 50 unidades
*/

type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnologia" | "papeleria";
}

const productos: Producto[] = [
    { id: 1, nombre: "Arroz", cantidad: 10, categoria: "alimentos" },
    { id: 2, nombre: "Laptop", cantidad: 3, categoria: "tecnologia" },
    { id: 3, nombre: "Cuadernos", cantidad: 60, categoria: "papeleria" },
    { id: 4, nombre: "Pan", cantidad: 25, categoria: "alimentos" },
    { id: 5, nombre: "Mouse", cantidad: 10, categoria: "tecnologia" },
    { id: 6, nombre: "Lápices", cantidad: 30, categoria: "papeleria" }
];

function bajoStock(producto: Producto) {

    if (producto.categoria === "alimentos" && producto.cantidad < 20) {
        return true;
    }

    if (producto.categoria === "tecnologia" && producto.cantidad < 5) {
        return true;
    }

    if (producto.categoria === "papeleria" && producto.cantidad < 50) {
        return true;
    }

    return false;
}

productos.forEach(producto => {
    console.log(producto.nombre, "-> bajo stock:", bajoStock(producto));
});