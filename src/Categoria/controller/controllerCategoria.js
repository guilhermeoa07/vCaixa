const Categorias = require('../model/modelCategoria');


exports.get = async (req, res) => {
    Categorias.find({})
    .then(value =>{ 
        res.status(200).send(value) 
    })
    .catch(err =>{
        res.status(400).send(err) 
    });
};

exports.post = async (req, res) => {
	try {
        const categoria = await Categorias.create(req.body);
		return res.status(200).send({ categoria });
	} catch (err) {
		return res.status(400).send({Erro: err});
	}
};

exports.getByName = async (req, res) => {
    const {description} = req.params;
    Categorias.find({'description': description})
    .then(value =>{ 
        res.status(200).send(value) 
    })
    .catch(err =>{
        res.status(400).send(err) 
    });
};

exports.delete = async (req, res) =>{
    const {id} = req.params;
    Categorias.findByIdAndDelete(id, (err, value)=>{
        if(err) return res.status(400).send({Erro: err});
        else{
            return res.status(200).send("Deletado com sucesso.")
        }
    })
}
