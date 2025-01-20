require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/conexion.db');

const productRoutes = require('./src/routes/pruduct.routes');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));