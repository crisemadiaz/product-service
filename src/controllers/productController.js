const productModel = require('../models/productModel');

//crear nuevo producto
const createProduct = (req, res) => {
    const {name, description, price, stock} = req.body;

    //validaciones básicas
    if (!name || !price || !stock) {
        return res.status(400).json({error: 'Campos requeridos: name, precio, stock'});
    }

    //crear producto
    productModel.createProduct(name, description, price, stock, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al crear el producto'});
        res.status(201).json({message: 'Producto creado exitosamente', productId: result.insertId});
    });
};

//obtener todos los productos
const getAllProducts = (req, res) => {
    productModel.getAllProducts((err, results) => {
        if (err) return res.status(500).json({error: 'Error al obtener productos'});
        res.status(200).json({products: results});
    });
};

//obtener producto por su id
const getProductById = (req, res) => {
    const { id } = req.params;

    //validar id
    if (!id){
        return res.status(400).json({error: 'ID del producto requerido'});
    }

    productModel.getProductById(id, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al obtener el producto'});
        if (result.length === 0) return res.status(400).json({error: 'Producto no encontrado'});
        res.status(200).json({product: result[0]});
    });
};

//Actualizar producto
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock} = req.body;

    //validación básica
    if (!id || !name || !price || !stock){
        return res.status(400).json({error: 'Campos requeridos: id, name, price, stock'});
    }
    
    productModel.updateProduct(id, name, price, stock, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al actualizar el producto'});
        if (result.affectedRows === 0) return res.status(400).json({error: 'Producto no encontrado'});

        res.status(200).json({message: 'Producto actualizado exitosamente'});
    });
};

//eliminar producto
const deleteProduct = (req, res) => {
    const { id } = req.params;

    //validar id
    if (!id){
        return res.status(400).json({error: 'ID del producto es requerido'});
    }

    productModel.deleteProduct(id, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al eliminar el producto'});
        if (result.affectedRows === 0) return res.status(400).json({error: 'Producto no encontrado'});
        res.status(200).json({message: 'Producto eliminado exitosamente'});
    });
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};