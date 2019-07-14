const mongoose = require('mongoose');
const categoria = require('../Categoria/models/RouterCategoria');

function validarCategoria(value){
    
}

const SchemasRecebimento = new mongoose.Schema({
    description:{
        type: String,
        default: null,
        lowercase: true,
        trim: true
    },
    valor:{
        type: Number,
        required: true,
        min: 0
    },
    date:{
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now,
        required: true
    },
    categoria:{
        type: String,
        validate: [validarCategoria, 'Categoria não cadastrada.']
    }
});

const Recebimento = mongoose.model('Recebimento', SchemasRecebimento);

module.exports = Recebimento;