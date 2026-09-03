
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

let resultado = 0;
var stock_mayor= 0; 
let name_stock = "";
const Tecnologia = []; 
const conteoCategorias = {};
    
console.log("Productos con valor mayor a $100.000")

for(x=0; x<productos.length; x++){

    // primer punto
    if(productos[x].precio>100000){
        console.log("Nombre: "+productos[x].nombre+" Valor: "+productos[x].precio);
    };

    // Segundo punto
    resultado += (productos[x].precio * productos[x].stock);

    // tercer punto
    if(stock_mayor < productos[x].stock){
        stock_mayor= productos[x].stock;
        name_stock = productos[x].nombre;
    }

    // Cuarto punto
    if(productos[x].categoria  === "Tecnología"){ 
        Tecnologia.push(productos[x]);
    }


    // Quinto punto


    // Sexto punto
    
    let cat = productos[x].categoria; 
    
    if (conteoCategorias[cat]) {
    
    conteoCategorias[cat]++;
    } else {
    
    conteoCategorias[cat] = 1;
    }
    

}


console.log("El Valor total del inventa es: " + resultado);
console.log("El producto con mayor Stock es "+ name_stock  + " con un Stock de: " + stock_mayor);
console.log("Cantidad de productos por categoría:", conteoCategorias);


