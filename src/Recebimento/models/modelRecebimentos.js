const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);
const moment = require('moment');

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
        type: String,
        default: moment().format('DD/MM/YYYY'),
        required: true
    },
    update: {
        type: Date,
        default: moment()
    },
    categoria:{
        type: String,
        default: null
    }
});

const Recebimento = mongoose.model('Recebimento', SchemasRecebimento);

module.exports = Recebimento;