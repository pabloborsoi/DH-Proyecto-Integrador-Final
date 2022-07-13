const res = require('express/lib/response');
const path = require('path');
const fs = require ('fs');

const mainController = {
    home: function (req, res) {
        res.render('home');
    }
};

module.exports = mainController;