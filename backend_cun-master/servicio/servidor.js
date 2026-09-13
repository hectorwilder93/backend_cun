const express = require("express");
const app = express();

const productosRouter = require("./hamethDumar");

console.log("Rutas cargadas en el router:", productosRouter.stack.map(r => r.route?.path));

app.use(express.json());

app.use("/api/balmaceda/productos", productosRouter);

app.listen(3000, function(){
    console.log("Inicio del servicio en el puerto 3000");
})