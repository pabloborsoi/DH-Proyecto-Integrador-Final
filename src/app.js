const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
//app.use(express.urlencoded({ extended: false }));
const mainRoute = require('./routes/mainRoute');

app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/cart', mainRoute);
app.use('/product', mainRoute);

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