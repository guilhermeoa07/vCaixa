const mongoose = require('mongoose');
const Categorias = require('../../Categoria/model/modelCategoria');


async function getCategoria () {
    await Categorias.find({})
    .then(value =>{ 
        let dados = new Object;
        value.forEach(element => {
            dados.push(element.description);  
        });
        console.log(dados)
        return dados;
    })
    .catch(err =>{
        console.log(err)
    });
};

const SchemasPagamentos = new mongoose.Schema({
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
        validate: [getCategoria, 'Categoria não cadastrada.']
    }
});

const Pagamentos = mongoose.model('Pagamentos', SchemasPagamentos);

module.exports = Pagamentos;