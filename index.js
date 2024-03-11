const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/database');
require('dotenv').config({ path: 'enviroment.env' });

const app = express();

conectarDB();

app.use(cors());

app.use(express.json({limit: '50mb'})); //Limites para las imagenes
app.use(express.urlencoded({limit: '50mb'}));

app.use('/api/estudiantes', require('./routes/estudiantesRoutes'));

app.use('/api/categorias', require('./routes/categoriasRoutes'));

app.use('/api/clases', require('./routes/clasesRoutes'));

app.use('/api/gastos', require('./routes/gastosRoutes'));

app.use('/api/instituciones', require('./routes/institucionesRoutes'));

app.use('/api/periodos', require('./routes/periodosRoutes'));

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});