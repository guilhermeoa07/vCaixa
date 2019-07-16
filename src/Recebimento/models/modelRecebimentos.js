const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const SchemasRecebimento = new mongoose.Schema({
    description:{
        type: String,
        default: null,
        lowercase: true,
        trim: true
    },
    valor:{
        type: Float,
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
        default: null
    }
});

const Recebimento = mongoose.model('Recebimento', SchemasRecebimento);

module.exports = Recebimento;