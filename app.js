const { PORT } = require('./src/config.js');

const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/conexion.db');
const bodyParser = require('body-parser');

const productRoutes = require('./src/routes/pruduct.routes');
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const categoryRoutes = require('./src/routes/category.routes');

const app = express();
connectDB();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(express.json());

app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));