const express = require("express");
const { logicaGet, logicaPost } = require("../servicio/JARiveros.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    mensaje: "Servidor en ejecución",
    rutas: {
      get: "GET /andres",
      getConId: "GET /andres?id=3",
      post: "POST /andres",
    },
  });
});

app.get("/andre", logicaGet);
app.post("/andress", logicaPost);

app.listen(PORT, function (error) {
  if (error) {
    if (error.code === "EADDRINUSE") {
      console.error("El puerto " + PORT + " ya está en uso.");
      console.error("Cierra el proceso anterior o cambia el puerto.");
    } else {
      console.error("No se pudo iniciar el servidor:", error.message);
    }
    process.exit(1);
  }

  console.log("Inicio del servicio en el puerto " + PORT);
  console.log("GET  http://localhost:" + PORT + "/andres");
  console.log("POST http://localhost:" + PORT + "/andres");
});