
const sumar= (a,b) => {a+b}; 

console.log(sumar(5,10));

//arreglo ejercicio 

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
// costo tal inventario 
let costotal = 0; 


for (let i = 0; i < productos.length; i++) {
    costotal +=  productos[i].precio* productos[i].stock
    
}

console.log ("el precio total del inventario es:", costotal); 

// producto con mayor stock 
console.log("Los productos mayores a cien mil son:");

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 100000) {
        console.log("-:", productos[i].nombre); 
    }
    
}

// producto con mayor stock 
let Productomayorstock = productos[0];
for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock > Productomayorstock.stock) {
   Productomayorstock = productos[i];
    }
    
}

 console.log("El producto con mayor stock es", Productomayorstock.nombre);
 console.log("Su stock total es:",Productomayorstock.stock);
// identificando producto
 let buscarid = 3; 

 let identificador = productos.find(producto => producto.id===buscarid );

if (identificador) {
    console.log("Producto encontrado:", identificador.nombre);
    console.log("Precio:", identificador.precio);
} else {
    console.log("No se encontró ningún producto con el ID:", buscarid);
}

//nuevlo arreglo con los productos de tecnologia 

let tecnologicos = []; 

for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === "Tecnología") {
        tecnologicos.push(productos[i]);
    }
    
}
console.log(tecnologicos);
//