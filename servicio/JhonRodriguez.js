
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


/*Crea una función que reciba un array de objetos de productos y realice las siguientes operaciones:

Obtener los productos cuyo precio sea mayor a $100.000.
Calcular el valor total del inventario (precio × stock).
Encontrar el producto con mayor stock.
Obtener un nuevo array que contenga únicamente los productos con categoria === "Tecnología".
Buscar un producto por su id.
Generar un objeto con la cantidad de productos agrupados por categoría. */


// Punto 1
function obtenerMayoresA100k(param) {
    const mayores = [];
    for (let x = 0; x < param.length; x++) {
        if (param[x].precio > 100000) {
            mayores.push(param[x]);
        }
    }
    return mayores;
}

// Punto 2
function calcularValorTotal(param) {
    let resultado = 0;
    for (let x = 0; x < param.length; x++) {
        resultado += (param[x].precio * param[x].stock);
    }
    return { valorTotal: resultado }; // Retornamos un objeto para que la API responda en formato JSON
}

// Punto 3
function obtenerMayorStock(param) {
    let stock_mayor = 0;
    let producto_mayor = null;
    for (let x = 0; x < param.length; x++) {
        if (stock_mayor < param[x].stock) {
            stock_mayor = param[x].stock;
            producto_mayor = param[x]; // Guardamos el objeto completo del producto
        }
    }
    return producto_mayor;
}

// Punto 4
function filtrarTecnologia(param) {
    const tecnologia = [];
    for (let x = 0; x < param.length; x++) {
        if (param[x].categoria === "Tecnología") {
            tecnologia.push(param[x]);
        }
    }
    return tecnologia;
}

// Punto 5
function findById(param, id) {
    for (let i = 0; i < param.length; i++) {
        if (param[i].id === id) {
            return param[i];
        }
    }
    return { mensaje: 'no hay datos' }; // Cambiado a JSON para Express
}

// Punto 6
function agruparPorCategoria(param) {
    const conteoCategorias = {};
    for (let x = 0; x < param.length; x++) {
        let cat = param[x].categoria;
        if (conteoCategorias[cat]) {
            conteoCategorias[cat]++;
        } else {
            conteoCategorias[cat] = 1;
        }
    }
    return conteoCategorias;
}

export {
    obtenerMayoresA100k,
    calcularValorTotal,
    obtenerMayorStock,
    filtrarTecnologia,
    findById,
    agruparPorCategoria
};