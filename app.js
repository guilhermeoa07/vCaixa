const express = require('express');
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const config = require('./config/config')('./config/DatabaseConfig.ini');
const port = normalizePort(process.env.port || config.config.porta);

//database local
require('./database/Database')(config.DBTest.ip, config.DBTest.porta, config.DBTest.db);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send({
        Version: 1.0,
        Message: "Vcaixa"
    });
});

//Routers
require('./src/Categoria/routerCategoria')(app);
require('./src/Users/routerUsers')(app);
require('./src/Pagamento/routerPagamento')(app);
require('./src/Recebimento/RouterRecebimento')(app);
require('./src/Caixa/routerCaixa')(app);

app.listen(port, () => {
	console.log('Servidor Online na porta: ' + port);
});

module.exports = app;