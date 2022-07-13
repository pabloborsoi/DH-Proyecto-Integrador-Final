const express = require('express');
const mainRouter = express.Router();
const path = require('path');

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const mainController = require('../controllers/mainController');

// CONFIFURACION DE RUTAS Y METODOS
mainRouter.get('/', mainController.home);

module.exports = mainRouter;