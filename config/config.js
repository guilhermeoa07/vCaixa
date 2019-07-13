const fs = require('fs');
const ini = require('ini');
module.exports = (value) =>{
    const config = ini.parse(fs.readFileSync(value,'utf-8'));
    return config;
};
