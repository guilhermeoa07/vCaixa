const express = require('express');
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const config = require('./config/config')('./config/DatabaseConfig.ini');

const port = normalizePort(process.env.port || '80');
require('./src/database/Database')(config.test.ip, config.test.porta, config.test.db);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/src/index.html');
});
app.listen(port, () => {
	console.log('Servidor Online na porta: ' + port);
});
