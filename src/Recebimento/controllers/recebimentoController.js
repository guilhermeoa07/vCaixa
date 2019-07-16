const Recebimento = require('../models/modelRecebimentos');
const Categoria = require('../../Categoria/model/modelCategoria');


exports.get = async (req, res) => {
    Recebimento.find({})
    .then(value =>{ 
        res.status(200).send(value) 
    })
    .catch(err =>{
        res.status(400).send(err) 
    });
};


exports.post = async (req, res) => {
    const categoria = await Categoria.find({description: req.body.categoria, type: true});
    try {
        if(categoria == '') {
            return res.status(200).send({Error: "Categoria não cadastrada."});
        }else{
            const recebimento = await Recebimento.create(req.body);
            return res.status(200).send({ recebimento });
        }   
	} catch (err) {
		return res.status(400).send({Erro: err});
	}
};

exports.delete = async (req, res) =>{
    const {id} = req.params;
    Recebimento.findByIdAndDelete(id, (err, value)=>{
        if(err) return res.status(400).send({Erro: err});
        else{
            return res.status(200).send("Deletado com sucesso.")
        }
    })
}

