//Crea una función que reciba un array de objetos de productos y realice las siguientes operaciones:
/*
Obtener los productos cuyo precio sea mayor a $100.000.
Calcular el valor total del inventario (precio × stock).
Encontrar el producto con mayor stock.
Obtener un nuevo array que contenga únicamente los productos con categoria === "Tecnología".
Buscar un producto por su id.
Generar un objeto con la cantidad de productos agrupados por categoría.
*/
const express = require('express');
const router = express.Router();

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
// 1. Productos con precio mayor a $100.000
router.get('/mayores-100k', (req, res) => {
    res.json(productos.filter(p => p.precio > 100000));
});

// 2. Valor total del inventario
router.get('/valor-inventario', (req, res) => {
    const total = productos.reduce((acc, item) => acc + (item.precio * item.stock), 0);
    res.json({ valorTotalInventario: total });
});

// 3. Producto con mayor stock
router.get('/mayor-stock', (req, res) => {
    const maxStock = productos.reduce((max, item) => item.stock > max.stock ? item : max, productos[0]);
    res.json(maxStock);
});

// 4. Productos de la categoría "Tecnología"
router.get('/tecnologia', (req, res) => {
    res.json(productos.filter(p => p.categoria === "Tecnología"));
});
// 5. Cantidad de productos agrupados por categoría
router.get('/agrupados-categoria', (req, res) => {
    const agrupado = productos.reduce((acc, item) => {
        acc[item.categoria] = (acc[item.categoria] || 0) + 1;
        return acc;
    }, {});
    res.json(agrupado);
});

// 6. Buscar producto por su ID (Dejar al final para evitar colisiones de rutas)
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json(producto);
});

module.exports = router;