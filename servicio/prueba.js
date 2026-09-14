import { 
    productos, 
    calcularCostoTotal, 
    obtenerProductosCaros, 
    obtenerProductoMayorStock, 
    buscarProductoPorId, 
    obtenerTecnologicos, 
    contarCategorias 
} from './Cristianlugo.js';

console.log("=== PRUEBA DE FUNCIONES ===");
console.log("1. Total Productos:", productos.length);
console.log("2. Costo Total Inventario:", calcularCostoTotal(productos));
console.log("3. Productos Caros (>100k):", obtenerProductosCaros(productos, 100000).length);
console.log("4. Producto Mayor Stock:", obtenerProductoMayorStock(productos).nombre);
console.log("5. Buscar ID 1:", buscarProductoPorId(productos, 1)?.nombre);
console.log("6. Total Tecnología:", obtenerTecnologicos(productos).length);
console.log("7. Conteo Categorías:", contarCategorias(productos));