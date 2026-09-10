const productos = [
    {
        id: 1,
        nombre: "Adaptador multipuerto VTA 8 en 1",
        precio: 150000,
        stock: 12,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Base Refrigerante",
        precio: 60000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Kit x2 micrófono VTA inalámbrico",
        precio: 120000,
        stock: 2,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Parlante JBL inalámbrico",
        precio: 1900000,
        stock: 4,
        categoria: "Tecnología"
    },
    {
        id: 5,
        nombre: "Apple pencil USB-C",
        precio: 360000,
        stock: 6,
        categoria: "Tecnología"
    },
    {
        id: 6,
        nombre: "Dron DJI Mini 5 pro fly",
        precio: 5600000,
        stock: 7,
        categoria: "Tecnología"
    },
    {
        id: 7,
        nombre: "Cámara TAPO C200 1080p",
        precio: 90000,
        stock: 4,
        categoria: "Tecnología"
}


];

function gestionarProductos(productos) {

const productosMayor100000 = productos.filter(producto => producto.precio > 100000);

const valorTotalInventario = productos.reduce( 
    (total, producto) => total + (producto.precio * producto.stock), 
    0 
);

const productoMayorStock = productos.reduce( 
    (mayor, producto) => producto.stock > mayor.stock ? producto : mayor 
);

const productosTecnologia = productos.filter( 
    producto => producto.categoria === "Tecnología" 
);

const buscarProductoPorId = (id) => { 
    return productos.find(producto => producto.id === id); 
};

const productosPorCategoria = productos.reduce((categorias, producto) => { 
    if (!categorias[producto.categoria]) { 
        categorias[producto.categoria] = 0; 
    } 
    
    categorias[producto.categoria]++; 
    return categorias; 
}, {});

return { 
    productosMayor100000, 
    valorTotalInventario, 
    productoMayorStock, 
    productosTecnologia,
    buscarProductoPorId, 
    productosPorCategoria
 }; 
} 

// Ejecutamos la función 
const resultado = gestionarProductos(productos); 

// Mostramos los resultados 
console.log("Productos con precio mayor a $100.000:"); 
console.log(resultado.productosMayor100000); 

console.log("Valor total del inventario:"); 
console.log(resultado.valorTotalInventario); 

console.log("Producto con mayor stock:"); 
console.log(resultado.productoMayorStock); 

console.log("Productos de categoría Tecnología:"); 
console.log(resultado.productosTecnologia); 

console.log("Producto con ID 3:"); 
console.log(resultado.buscarProductoPorId(3)); 

console.log("Cantidad de productos por categoría:"); 
console.log(resultado.productosPorCategoria);

module.exports = { productos, gestionarProductos };
