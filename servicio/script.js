
const sumar= (a,b) => {a+b}; 

console.log(sumar(5,10));


let productos = [
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

let costotal = 0; 


for (let i = 0; i < productos.length; i++) {
    costotal +=  productos[i].precio* productos[i].stock
    
}

console.log ("el precio total del inventario es:", costotal); 

console.log("Los productos mayores a cien mil son:");

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 100000) {
        console.log("-:", productos[i].nombre); 
    }
    
}

let Productomayorstock = productos[0];
for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock > Productomayorstock.stock) {
        Productomayorstock = productos[i];
    }
    
}

console.log("El producto con mayor stock es", Productomayorstock.nombre);
console.log("Su stock total es:",Productomayorstock.stock);

let buscarid = 3; 

let identificador = productos.find(producto => producto.id===buscarid );

if (identificador) {
    console.log("Producto encontrado:", identificador.nombre);
    console.log("Precio:", identificador.precio);
} else {
    console.log("No se encontró ningún producto con el ID:", buscarid);
}


let tecnologicos = []; 

for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === "Tecnología") {
        tecnologicos.push(productos[i]);
    }
    
}
console.log(tecnologicos);


const cantidadPorCategoria = productos.reduce((acumulador, producto) => {
    const categoria = producto.categoria;
    acumulador[categoria] = (acumulador[categoria] || 0) + 1;
    return acumulador;
}, {});

console.log(cantidadPorCategoria);


function calcularCostoTotal(array) {
    let costoTotal = 0;
    for (let i = 0; i < array.length; i++) {
        costoTotal += array[i].precio * array[i].stock;
    }
    return costoTotal;
}

function obtenerProductosCaros(array, limitePrecio = 100000) {
    let productosCaros = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].precio > limitePrecio) {
            productosCaros.push(array[i]);
        }
    }
    return productosCaros;
}

function obtenerProductoMayorStock(array) {
    if (array.length === 0) return null;
    let productoMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].stock > productoMayor.stock) {
            productoMayor = array[i];
        }
    }
    return productoMayor;
}

function buscarProductoPorId(array, id) {
    return array.find(producto => producto.id === id);
}

function obtenerTecnologicos(array) {
    let tecnologicos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].categoria === "Tecnología") {
            tecnologicos.push(array[i]);
        }
    }
    return tecnologicos;
}

function contarCategorias(array) {
    return array.reduce((acumulador, producto) => {
        const categoria = producto.categoria;
        acumulador[categoria] = (acumulador[categoria] || 0) + 1;
        return acumulador;
    }, {});
}

export {
    productos,
    calcularCostoTotal,
    obtenerProductosCaros,
    obtenerProductoMayorStock,
    buscarProductoPorId,
    obtenerTecnologicos,
    contarCategorias
};