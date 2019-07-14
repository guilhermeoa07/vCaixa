const moongose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const generateToken = require ('../../middleware/generationToken');

exports.post = async (req, res) => {
	try {
		const user = await User.create(req.body);
        user.password = undefined;
        const token = generateToken({ id: user.id });
        console.log(token)
		return res.status(200).send({ Id: user.id, Token: token });
	} catch (err) {
		res.status(400).send({ Erro: err });
	}
};

exports.postAuthenticate = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select('+password');
	if (!user) return res.status(401).send({ Erro: 'Usuario não encontrado.' });

	if (!await bcrypt.compare(password, user.password)) return res.status(401).send({ Erro: 'Senha Invalida.' });

	user.password = undefined;

	res.status(200).send({ Usuario: user.name, token: generateToken({ id: user.id }) });
}

