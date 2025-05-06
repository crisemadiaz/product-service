const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');

//ruta de prueba
router.get('/ping', (req, res) => {
    res.json({message: 'pong desde Product Services'});
});

//crear producto
router.post('/', productController.createProduct);

//obtener todos los productos
router.get('/', productController.getAllProducts);

//obtener producto por ID
router.get('/:id', productController.getProductById);

//actualizar producto por id
router.put('/:id', productController.updateProduct);

//eliminar producto por id
router.delete('/:id', productController.deleteProduct);

module.exports = router;