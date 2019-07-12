const express = require('express');
const normalizePort = require('normalize-port');
const app = express();
const port = normalizePort(process.env.port || '80');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send("Hello World")
});
app.listen(port, () => {
	console.log('Servidor Online na porta: ' + port);
});
