const router = require('express').Router();
const auth = require('../middleware/auth');
const Categoria = require('./model/modelCategoria');
const Controller = require('./controller/categoriaController');

router.use(auth);

router.get('/', Controller.get);

module.exports = app => app.use('/categoria', router);