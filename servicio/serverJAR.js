


import express from 'express';
import {
    obtenerMayoresA100k,
    calcularValorTotal,
    obtenerMayorStock,
    filtrarTecnologia,
    findById,
    agruparPorCategoria
} from './JhonRodriguez.js';

const app = express();
const port = 3000;

const productos = [
    { id: 1, nombre: "Laptop Lenovo", precio: 2800000, stock: 8, categoria: "Tecnología" },
    { id: 2, nombre: "Mouse Logitech", precio: 120000, stock: 25, categoria: "Tecnología" },
    { id: 3, nombre: "Teclado Mecánico", precio: 350000, stock: 12, categoria: "Tecnología" },
    { id: 4, nombre: "Silla Ergonómica", precio: 850000, stock: 5, categoria: "Muebles" },
    { id: 5, nombre: "Escritorio", precio: 1200000, stock: 7, categoria: "Muebles" },
    { id: 6, nombre: "Audífonos Sony", precio: 450000, stock: 18, categoria: "Audio" },
    { id: 7, nombre: "Micrófono USB", precio: 380000, stock: 10, categoria: "Audio" },
    { id: 8, nombre: "Monitor Samsung", precio: 950000, stock: 6, categoria: "Tecnología" }
];


// Ruta principal de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Inventario! Para probar, navega a: /api/productos/agrupados');
});


app.get('/api/productos/mayores-100k', (req, res) => {
    res.json(obtenerMayoresA100k(productos));
});

app.get('/api/productos/valor-total', (req, res) => {
    res.json(calcularValorTotal(productos));
});

app.get('/api/productos/mayor-stock', (req, res) => {
    res.json(obtenerMayorStock(productos));
});

app.get('/api/productos/tecnologia', (req, res) => {
    res.json(filtrarTecnologia(productos));
});

app.get('/api/productos/agrupados', (req, res) => {
    res.json(agruparPorCategoria(productos));
});

app.get('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = findById(productos, id);
    
    if (resultado.mensaje) {
        res.status(404).json(resultado);
    } else {
        res.json(resultado);
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`API ejecutándose en http://localhost:${port}`);
});