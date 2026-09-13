// 1. Los imports SIEMPRE deben ir en las primeras líneas del archivo
import express from 'express';
import {
    productos,
    calcularCostoTotal,
    obtenerProductosCaros,
    obtenerProductoMayorStock,
    buscarProductoPorId,
    obtenerTecnologicos,
    contarCategorias
} from './Cristianlugo.js';

// 2. Creación e inicialización de Express
const app = express();
const PORT = 3000;

app.use(express.json());

// ------------------- RUTAS DE LA API ------------------- //

// 1. Obtener todos los productos
app.get('/api/productos', (req, res) => {
    res.json({
        total: productos.length,
        datos: productos
    });
});

// 2. Obtener el costo total del inventario
app.get('/api/productos/costo-total', (req, res) => {
    const costoTotal = calcularCostoTotal(productos);
    res.json({ costoTotal });
});

// 3. Obtener productos caros (por defecto mayores a 100,000)
app.get('/api/productos/caros', (req, res) => {
    const limite = req.query.precio ? Number(req.query.precio) : 100000;
    const productosCaros = obtenerProductosCaros(productos, limite);
    res.json({
        limitePrecio: limite,
        totalEncontrados: productosCaros.length,
        datos: productosCaros
    });
});

// 4. Obtener el producto con mayor stock
app.get('/api/productos/mayor-stock', (req, res) => {
    const producto = obtenerProductoMayorStock(productos);
    if (!producto) {
        return res.status(404).json({ mensaje: 'No hay productos en el inventario' });
    }
    res.json(producto);
});

// 5. Obtener productos de categoría Tecnología
app.get('/api/productos/tecnologia', (req, res) => {
    const tecnologicos = obtenerTecnologicos(productos);
    res.json({
        total: tecnologicos.length,
        datos: tecnologicos
    });
});

// 6. Obtener conteo de productos por categoría
app.get('/api/productos/categorias/conteo', (req, res) => {
    const resumenCategorias = contarCategorias(productos);
    res.json(resumenCategorias);
});

// 7. Buscar un producto por su ID
app.get('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const producto = buscarProductoPorId(productos, id);

    if (!producto) {
        return res.status(404).json({
            error: 'Producto no encontrado',
            mensaje: `No existe un producto con el id ${id}`
        });
    }

    res.json(producto);
});

// 3. Encender el servidor (solo se debe llamar UNA vez al final del archivo)
app.listen(PORT, function() {
    console.log("Inicio del servicio en el puerto 3000");
});