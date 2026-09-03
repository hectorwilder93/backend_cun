const productos = [
    {
        id: 1,
        nombre: "Portatil ASUS",
        precio: 3800000,
        stock: 12,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Cámara de acción GOPRO",
        precio: 1100000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "INSTA360 X5",
        precio: 2700000,
        stock: 2,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Control PLAYSTATION PS5",
        precio: 264000,
        stock: 4,
        categoria: "Electrodomesticos"
    },
    {
        id: 5,
        nombre: "Consola NINTENDO SWITCH 2",
        precio: 3600000,
        stock: 6,
        categoria: "Tecnología"
    },
    {
        id: 6,
        nombre: "Control Inalámbrico PDP",
        precio: 95000,
        stock: 7,
        categoria: "Tecnología"
    },
    {
        id: 7,
        nombre: "Bateria recargable KALLEY",
        precio: 55000,
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