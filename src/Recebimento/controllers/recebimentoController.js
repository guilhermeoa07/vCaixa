const Recebimento = require('../models/modelRecebimentos');
const Categoria = require('../../Categoria/model/modelCategoria');
const moment = require('moment');

exports.get = async (req, res) => {
    Recebimento.find({})
    .then(value =>{ 
        res.status(200).send(value) 
    })
    .catch(err =>{
        res.status(400).send(err) 
    });
};

exports.getbyDate = async(req, res)=>{
    let date = req.params.date;
    date = date.substring(0,2)+'/'+date.substring(2,4)+'/'+date.substring(4,8);
    const data = moment(date, 'DD/MM/YYYY', "pt", true).format('DD/MM/YYYY');
    console.log(data)
    Recebimento.find( {date: data } )
    .then((err, recebimento)=>{
        if(err) res.status(400).send(err);
        res.send(recebimento)
    })
}

exports.post = async (req, res) => {
    const categoria = await Categoria.find({description: req.body.categoria, type: true});
    try {
        if(categoria == '') {
            return res.status(200).send({Error: "Categoria não cadastrada."});
        }else{
            const recebimento = await Recebimento.create(req.body);
            return res.status(201).send({ recebimento });
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

