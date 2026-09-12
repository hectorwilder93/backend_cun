const express = require("express");
const DgOrjuela = require("./DgOrjuela");
const VyOrjuela = require("./VyOrjuela");

const app = express();
app.use(express.json());

app.get("/productos/dg", (req, res) => {
    res.json(DgOrjuela.productos);
});

app.get("/productos/vy", (req, res) => {
    res.json(VyOrjuela.productos);
});

app.get("/productos", (req, res) => {
    res.json([...DgOrjuela.productos, ...VyOrjuela.productos]);
});

app.listen(3000, function(){
    console.log("Inicio del servicio en el puerto 3000");
})
