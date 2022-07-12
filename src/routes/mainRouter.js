const express = require('express');
const mainRouter = express.Router();

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const mainController = require('../controllers/mainController');

// CONFIFURACION DE RUTAS Y METODOS
mainRouter.get('/', mainController.home);
mainRouter.get('/login', mainController.login);


module.exports = mainRouter;