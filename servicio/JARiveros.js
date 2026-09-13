/*Crea una función que reciba un array de objetos de productos y realice las siguientes operaciones:

Obtener los productos cuyo precio sea mayor a $100.000.
Calcular el valor total del inventario (precio × stock).
Encontrar el producto con mayor stock.
Obtener un nuevo array que contenga únicamente los productos con categoria === "Tecnología".
Buscar un producto por su id.
Generar un objeto con la cantidad de productos agrupados por categoría.*/


const productos = [
    {
        id: 1,
        nombre: "Laptop Lenovo",
        precio: 2800000,
        stock: 8,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Mouse Logitech",
        precio: 120000,
        stock: 25,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Teclado Mecánico",
        precio: 350000,
        stock: 12,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Silla Ergonómica",
        precio: 850000,
        stock: 5,
        categoria: "Muebles"
    },
    {
        id: 5,
        nombre: "Escritorio",
        precio: 1200000,
        stock: 7,
        categoria: "Muebles"
    },
    {
        id: 6,
        nombre: "Audífonos Sony",
        precio: 450000,
        stock: 18,
        categoria: "Audio"
    },
    {
        id: 7,
        nombre: "Micrófono USB",
        precio: 380000,
        stock: 10,
        categoria: "Audio"
    },
    {
        id: 8,
        nombre: "Monitor Samsung",
        precio: 950000,
        stock: 6,
        categoria: "Tecnología"
    }
];
/*Obtener los productos cuyo precio sea mayor a $100.000.*/
const productosMayor100k = productos.filter(p => p.precio > 100000);
console.log("OPERACIÓN 1 - Productos con precio > $100.000:");
console.log(productosMayor100k);
console.log("----------------------------------------\n");

/*Calcular el valor total del inventario (precio × stock).*/
const valorTotalInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
console.log("OPERACIÓN 2 - Valor total del inventario:");
console.log(valorTotalInventario);
console.log("----------------------------------------\n");

/*Encontrar el producto con mayor stock.*/
const productoMayorStock = productos.reduce((max, p) => p.stock > max.stock ? p : max);
console.log("OPERACIÓN 3 - Producto con mayor stock:");
console.log(productoMayorStock);
console.log("----------------------------------------\n");

/*Obtener un nuevo array que contenga únicamente los productos con categoria === "Tecnología".*/
const productosTecnologia = productos.filter(p => p.categoria === "Tecnología");
console.log("OPERACIÓN 4 - Productos de categoría 'Tecnología':");
console.log(productosTecnologia);
console.log("----------------------------------------\n");

/*Buscar un producto por su id.*/
const productoPorId = productos.find(p => p.id === 5);
console.log("OPERACIÓN 5 - Producto con id 5:");
console.log(productoPorId);
console.log("----------------------------------------\n");

/*Generar un objeto con la cantidad de productos agrupados por categoría.*/
const gruposPorCategoria = productos.reduce((acc, p) => {
    acc[p.categoria] = acc[p.categoria] || 0;
    acc[p.categoria]++;
    return acc;
}, {});
console.log("OPERACIÓN 6 - Cantidad de productos por categoría:");
console.log(gruposPorCategoria);
console.log("----------------------------------------\n");
