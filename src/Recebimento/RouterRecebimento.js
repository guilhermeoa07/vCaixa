const router = require('express').Router();
const auth = require('../../middleware/auth');
const Controller = require('./controllers/recebimentoController');

router.use(auth);
//Busca de todos os recebimentos.
router.get('/', Controller.get);
//Busca de recebimentos por data.
router.get('/date/:date', Controller.getbyDate);
//Inserir novo recebimento.
router.post('/', Controller.post);
//Deletar recebimento.
router.delete('/:id', Controller.delete);


module.exports = app => app.use('/recebimento', router);