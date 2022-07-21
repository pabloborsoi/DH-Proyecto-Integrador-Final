// REQUERIMOS LA BASE DE DATOS
let users = require("../data/users");
const path = require('path');
const fs = require ('fs');

// CREAMOS LOS METODOS DEL CONTROLADOR
const usersController = {

        login: function (req, res) {
            res.render('login');
        },
	edit: (req, res) => {
        // 1- CAPTURAMOS EL ID
        // 2- RECORREMOS LOS USUARIOS Y BUSCAMOS LA COINCIDENCIA
        // 3- RENDERIZAMOS LA VISTA CON EL USUARIO QUE COINCIDE
        const idParam = req.params.id;
        let userSelected = null
        users.forEach(user => {
            if (user.id == idParam) {
                return userSelected = user
            }
        })
		res.render("edit", {user: userSelected});
	},
    ingresar: (req,res) =>{
        const errors = validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
          let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
          let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
          //return res.send(usuarioLogueado);
          //Como podemos modificar nuestros req.body
          delete usuarioLogueado.password;
          req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
          //Aquí voy a guardar las cookies del usuario que se loguea
          if(req.body.recordarme){
            res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
          }
          return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)
  
        }else{
          //Devolver a la vista los errores
          res.render(path.resolve(__dirname, '../views/partials/login'),{errors:errors.mapped(),old:req.body});        
        }
      },
	register: (req, res) => {
        // RENDERIZAMOS EL FORMULARIO DE REGISTRO
		res.render("register");
	},
	detail: (req, res) => {
        // 1- CAPTURAMOS EL ID
        // 2- RECORREMOS LOS USUARIOS Y BUSCAMOS LA COINCIDENCIA
        // 3- RENDERIZAMOS LA VISTA CON EL USUARIO QUE COINCIDE
        const idParam = req.params.id;
        let userSelected = null
        users.forEach(user => {
            if (user.id == idParam) {
                return userSelected = user
            }
        })

		res.render("detail", {user: userSelected});
	},
	processRegister: (req, res) => {
        // 1- CAPTURAMOS LA DATA DEL FORMULARIO
        // 2- LO AGREGAMOS EN UNA VARIABLE NUEVA CON UN ID
        // 3- LO AGREGAMOS AL ARRAY DE USUARIOS
        // 4- REDIRIGIMOS
		const data = req.body;
		let newUser = {
			id: users.length + 1,
			...data,
		};
		users.push(newUser);
        res.redirect('/')
		// res.render("index", { users });
	},
    processEdit: (req, res) => {
        // 1- CAPTURAMOS EL ID
        // 2- CAPTURAMOS LA DATA INGRERSADA POR EL USUARIO
        // 3- DEFINIMOS LA NUEVA VARIABLE CON LO QUE INGRESO EL USUARIO
        // 4- EDITAMOS EL ELEMENTO CON IDPARAMS - 1 CON EL VALOR DE LA VARIABLE 
        // 5- REDIRIGIMOS AL INDEX
        const idParam = req.params.id;
        const data = req.body;
		let userEdited = {
            id: idParam,
			...data,
		};
		users[idParam - 1] = userEdited;
        res.redirect('/')
    },
    // 1- CAPTURAMOS EL ID
    // 2- HACEMOS UN FILTER DE LOS USUARIOS QUE NO COINCIDAN CON EL ID PARAM, Y LO ASIGNAMOS A UNA NUEVA VARIABLE
    // 3- RENDERIZAMOS EL INDEX CON EL NUEVO ARRAY DE USUARIOS
    delete: (req, res) => {
        const idParam = req.params.id;
        let usersArray = users.filter(user => user.id != idParam);
        // res.redirect("/")
        res.render('index', {users: usersArray })
    }
};

module.exports = usersController;