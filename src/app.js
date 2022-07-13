const express = require('express');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
//app.use(express.urlencoded({ extended: false }));

//Requerir las rutas
const adminRouter = require ('./routes/adminRouter');
const mainRouter = require ('./routes/mainRouter');
const productRouter = require ('./routes/productRouter');
const registerRouter = require ('./routes/registerRouter');
const usersRouter = require ('./routes/usersRouter');

app.use('/', mainRouter);
app.use('/login', usersRouter);
app.use('/register', usersRouter);
app.use('/cart', mainRouter);
app.use('/product', mainRouter);

app.listen(3030, ()=> console.log('Servidor funcionando'));
app.set('view engine', 'ejs');








/*app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/cart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/cart.html'))
})

app.get('/producto', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/producto.html'))
})

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})*/

//agrego ruta a productDetail
/*app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});*/