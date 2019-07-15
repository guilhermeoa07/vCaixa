const Pagamento = require('../models/modelPagamentos');


exports.get = async (req, res) => {
    Pagamento.find({})
    .then(value =>{ 
        res.status(200).send(value) 
    })
    .catch(err =>{
        res.status(400).send(err) 
    });
};

exports.post = async (req, res) => {
	try {
		const pagamento = await Pagamento.create(req.body);
		return res.status(200).send({ pagamento });
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
