
exports.get = async (req, res) => {
    const categoria = Categoria.find();
    if(!categoria) return res.status(204).send("Nenhuma Categoria cadastrada.");
    return res.status(200).send({categoria});
};