const db = require('../db');

//crea nuevo producto en la db
const createProduct = (name, description, price, stock, callback) => {
    const sql = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, description, price, stock], callback);
};

//busca todos los productos
const getAllProducts = (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, callback);
};

//busca productos por id
const getProductById = (id, callback) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [id], callback);
};

//Actualiza un producto por su ID
const updateProduct = (id, name, description, price, stock, callback) => {
    const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
    db.query(sql, [name, description, price, stock], callback);
};

//Elimina un producto por su ID
const deleteProduct = (id, callback) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};