const router = require('express').Router();
const auth = require('../../middleware/auth');
const Controller = require('./controllers/recebimentoController');

router.use(auth);

router.get('/', Controller.get);
router.post('/', Controller.post);
router.delete('/:id', Controller.delete);


module.exports = app => app.use('/recebimento', router);