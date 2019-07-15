const express = require('express');
const bodyParser = require('body-parser');
const normalizePort = require('normalize-port');
const config = require('./config/config')('./config/DatabaseConfig.ini');
const port = normalizePort(process.env.port || '80');

//database local
require('./src/database/Database')(config.test.ip, config.test.porta, config.test.db);

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

app.listen(port, () => {
	console.log('Servidor Online na porta: ' + port);
});
