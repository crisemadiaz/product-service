const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productRoutes);

const PORT = process.env.PRODUCT_PORT || 3002;
app.listen(PORT, () =>{
    console.log(`Product Service escuchando en el puerto ${PORT}`);
});
