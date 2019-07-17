const Pagamento = require('../models/modelPagamentos');
const Categoria = require('../../Categoria/model/modelCategoria');
const moment = require('moment');

exports.get = async (req, res) => {
    Pagamento.find({})
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
    Pagamento.find( {date: data } )
    .then((err, pagamento)=>{
        if(err) res.status(400).send(err);
        res.send(pagamento)
    })
}

exports.post = async (req, res) => {
    const categoria = await Categoria.find({description: req.body.categoria, type: false});
    try {
        if(categoria == '') {
            return res.status(200).send({Error: "Categoria não cadastrada."});
        }else{
            const pagamento = await Pagamento.create(req.body);
            return res.status(201).send({Pagamento: { pagamento }});
        }   
	} catch (err) {
		return res.status(400).send({Erro: err});
	}
};

exports.delete = async (req, res) =>{
    const {id} = req.params;
    Pagamento.findByIdAndDelete(id, (err, value)=>{
        if(err) return res.status(400).send({Erro: err});
        else{
            return res.status(200).send("Deletado com sucesso.")
        }
    })
}

