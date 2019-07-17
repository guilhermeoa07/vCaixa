const router = require('express').Router();
const auth = require('../../middleware/auth');
const Controller = require('./controller/controllerCaixa');

router.use(auth);

router.get('/', Controller.getTotal);
router.get('/date/:date', Controller.getSaldoDia);
router.get('/categoria/:categoria/:type', Controller.getbyCategoria);


module.exports = app => app.use('/caixa', router);