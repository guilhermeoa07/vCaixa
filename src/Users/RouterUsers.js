const router = require('express').Router();
const userControler = require('./controllers/userController');

router.post('/', userControler.post);

router.post('/authenticate', userControler.postAuthenticate);

module.exports = (app) => app.use('/user', router);
