/*Crea una función que reciba un array de objetos de productos y realice las siguientes operaciones:

Obtener los productos cuyo precio sea mayor a $100.000.
Calcular el valor total del inventario (precio × stock).
Encontrar el producto con mayor stock.
Obtener un nuevo array que contenga únicamente los productos con categoria === "Tecnología".
Buscar un producto por su id.
Generar un objeto con la cantidad de productos agrupados por categoría.*/

const productos = [

    { 
       id: 1, nombre: "Laptop Lenovo",
       precio: 2800000,
       stock: 8,
       ategoria: "Tecnología"
     },


    { 
      id: 2, nombre: "Mouse Logitech",
      precio: 120000,
      stock: 25,
      categoria: "Tecnología" 
    },


    { 
        id: 3, nombre: "Teclado Mecánico",
        precio: 350000,
        stock: 12,
        categoria: "Tecnología" 
    },


    { 
        id: 4, nombre: "Silla Ergonómica",
        precio: 850000,
        stock: 5,
        categoria: "Muebles" 
    },


    { 
        id: 5, nombre: "Escritorio",
        precio: 1200000,
        stock: 7,
        categoria: "Muebles" 
    },


    { 
        id: 6, nombre: "Audífonos Sony",
         precio: 450000,
         stock: 18,
         categoria: "Audio" 
        },

    { 
        id: 7, nombre: "Micrófono USB",
        precio: 380000,
        stock: 10,
        categoria: "Audio" 
    },


    { 
        id: 8, nombre: "Monitor Samsung",
        precio: 950000,
        stock: 6,
        categoria: "Tecnología" 
    
    }
];

// 1. Costo total inventario
function calcularCostoTotal(array) {
    return array.reduce((total, p) => total + p.precio * p.stock, 0);
}

// 2. Productos mayores a $100.000
function obtenerProductosCaros(array, limite = 100000) {
    return array.filter(p => p.precio > limite);
}

// 3. Producto con mayor stock
function obtenerProductoMayorStock(array) {
    if (array.length === 0) return null;
    return array.reduce((max, p) => p.stock > max.stock ? p : max);
}

// 4. Buscar por id
function buscarProductoPorId(array, id) {
    return array.find(p => p.id === id);
}

// 5. Solo Tecnología
function obtenerTecnologicos(array) {
    return array.filter(p => p.categoria === "Tecnología");
}

// 6. Agrupados por categoría
function contarCategorias(array) {
    return array.reduce((acc, p) => {
        acc[p.categoria] = (acc[p.categoria] || 0) + 1;
        return acc;
    }, {});
}


module.exports = {
  productos,
  calcularCostoTotal,
  obtenerProductosCaros,
  obtenerProductoMayorStock,
  buscarProductoPorId,
  obtenerTecnologicos,
  contarCategorias
};
