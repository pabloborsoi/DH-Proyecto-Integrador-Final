const res = require('express/lib/response');

const mainController = {
    home: function (req, res) {
        res.render('home');
    },
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },
    cart: function (req, res) {
        res.render('cart');
    },
    product: function (req, res) {
        res.render('product');
    }
};

module.exports = mainController;