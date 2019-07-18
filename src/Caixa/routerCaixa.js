const router = require('express').Router();
const auth = require('../../middleware/auth');
const Controller = require('./controller/controllerCaixa');

router.use(auth);

//Valores atuais do caixa.
router.get('/', Controller.getTotal);
//Valores do caixa por uma data expecifica.
router.get('/date/:date', Controller.getSaldoDia);
//Valores de caixa por categoria.
router.get('/categoria/:categoria/:type', Controller.getbyCategoria);


module.exports = app => app.use('/caixa', router);