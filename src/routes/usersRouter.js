const express = require('express');
const usersRouter = express.Router();
const path = require('path');

//Requiero el paquete para comparar las contraseñas  que tengo hash (Pueden instalar el paquete bcrypt o bcryptjs)
//const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está reistrando existe o no
//const fs = require('fs');
//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
//const multer = require('multer');

//Requiero el paquete expres-validator
//const { body } = require('express-validator');

//Requerir el modulo de los controladores
const usersController = require(path.resolve(__dirname, '../controllers/usersController'));

//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.

//let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));

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