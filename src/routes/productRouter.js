const express = require('express');
const productRouter = express.Router();

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const mainController = require('../controllers/productController');

productRouter.get('/cart', productController.cart);
productRouter.get('/product', productController.product);

module.exports =productRouter;