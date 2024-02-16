const express = require('express');
const conectar = require('./config/database');
const cors = require('cors');

const app = express();

conectar.conectarDB();

app.use(cors());

app.use(express.json({limit: '50mb'})); //Limites para las imagenes
app.use(express.urlencoded({limit: '50mb'}));

app.use('./api/categorias', require('./routes/categoriasRoutes'));

app.use('./api/clases', require('./routes/clasesRoutes'));

app.use('./api/gastos', require('./routes/gastosRoutes'));

app.use('./api/instituciones', require('./routes/institucionesRoutes'));

app.use('./api/periodos', require('./routes/periodosRoutes'));

