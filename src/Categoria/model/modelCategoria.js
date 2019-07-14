const mongoose = require('mongoose');

const SchemasCategoria = new mongoose.Schema({
    description:{
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    type: {
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Categoria = mongoose.model('Categoria', SchemasCategoria);

module.exports = Categoria;