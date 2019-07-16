const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const SchemasPagamentos = new mongoose.Schema({
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
        default:null
    }
});

const Pagamentos = mongoose.model('Pagamentos', SchemasPagamentos);

module.exports = Pagamentos;