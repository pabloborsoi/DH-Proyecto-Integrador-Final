const express = require('express');
const usersRouter = express.Router()

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const usersController = require("../controllers/usersController")


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