

const express = require('express');
const app = express();
const PORT = 3000;
const { productos } = require('./GinaRobles.js');
app.use(express.json());
app.get('/productos', (req, res) => 
  { res.json(productos); });
app.get('/', (req, res) => 
  { res.json(productos); });
app.listen(PORT, () => 
  { console.log('Servidor OK en http://localhost:' + PORT + '/productos'); });