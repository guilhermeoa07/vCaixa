const jwt = require('jsonwebtoken');
const authConfig = require('../../config/config');


module.exports = function generateToken(params = {}) {
	return jwt.sign(params, authConfig.secret, {
		expiresIn: 432000
	});
}
