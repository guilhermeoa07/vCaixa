const jwt = require('jsonwebtoken');
const authConfig = require('../config/Auth.json');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).send({ Error: 'Nenhum token informado.' });

	const parts = authHeader.split(' ');
	if (!parts.length === 2) return res.status(401).send({ Error: 'Token incompleto ou malformado.' });

	const [ scheme, token ] = parts;

	if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ Error: 'Token invalido.' });

	jwt.verify(token, authConfig.secret, (err, decode) => {
		if (err) return res.status(401).send({ Error: 'Token Invalido ou expirado.' });

		req.userId = decode.id;
		next();
	});
};
