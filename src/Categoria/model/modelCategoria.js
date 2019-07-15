const mongoose = require('mongoose');

const SchemasCategorias = new mongoose.Schema({
    description:{
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true
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

const Categorias = mongoose.model('Categorias', SchemasCategorias);

module.exports = Categorias;