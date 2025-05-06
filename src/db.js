const mysql = require('mysql2');
require('dotenv').config();

const connectWithRetry = () => {
    const connection = mysql.createConnection({
        host: process.env.PRODUCT_DB_HOST || 'mariadb-product',
        user: process.env.PRODUCT_DB_USER,
        password: process.env.PRODUCT_DB_PASSWORD,
        database: process.env.PRODUCT_DB_NAME || 'productdb',
        port: 3306,
    });

    connection.connect((err) => {
        if(err){
            console.error('❌ Error de conexión a la DB:',err.message);
            setTimeout(connectWithRetry, 5000);
        }else{
            console.log('✅ Conectado a MariaDB - Base de datos product_db');
        }
    });

    return connection;
};

const connection=connectWithRetry();
module.exports=connection;