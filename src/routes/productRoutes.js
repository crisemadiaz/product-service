const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');

//crear producto
router.post('/products', productController.createProduct);

//obtener todos los productos
router.get('products', productController.getAllProducts);

//obtener producto por ID
router.get('/products/:id', productController.getProductById);

//actualizar producto por id
router.put('/products/:id', productController.updateProduct);

//eliminar producto por id
router.delete('/products/:id', productController.deleteProduct);

//ruta de prueba
router.get('/ping', (req, res) =>{
    res.json({message: 'pong desde Product Services'});
});

module.exports = router;