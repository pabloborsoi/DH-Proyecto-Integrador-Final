const express = require('express');
const usersRouter = express.Router();
const path = require('path');

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const usersController = require("../controllers/usersController")


usersRouter.get('/login', usersController.login);
usersRouter.post('/login', usersController.login);

// CONFIFURACION DE RUTAS Y METODOS

// CREATE
usersRouter.get('/register', usersController.register);
usersRouter.post('/register', usersController.processRegister);

// UPDATE
usersRouter.get("/edit/:id", usersController.edit);
usersRouter.put("/edit/:id", usersController.processEdit)

// DETAIL
usersRouter.get("/detail/:id", usersController.detail);

//DELETE 
usersRouter.delete("/delete/:id", usersController.delete)


module.exports = usersRouter;