const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/product', productRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () =>{
    console.log(`Product Service escuchando en el puerto ${PORT}`);
});
