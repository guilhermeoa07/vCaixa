const Pagamento = require('../../Pagamento/models/modelPagamentos');
const Recebimento = require('../../Recebimento/models/modelRecebimentos');
const Categoria = require('../../Categoria/model/modelCategoria');
const moment = require('moment');


exports.getTotal = async (req, res) => {
    let pagamento = await Pagamento.find({})
    let totalPagamento = 0;
    pagamento.forEach((value)=>{
        totalPagamento = totalPagamento + value.valor
    })
    let recebimento = await Recebimento.find({})
    let totalRecebimento = 0;
    recebimento.forEach((value)=>{
        totalRecebimento = totalRecebimento + value.valor
    })
    const totalGeral = totalRecebimento - totalPagamento;
    res.send({ saldoTotal: totalGeral.toFixed(2), 
        movimentacoes:{
            Pagamentos:{pagamento},
            Recebimentos: {recebimento}
    }});
};
exports.getSaldoDia = async(req, res)=>{  
        let date = req.params.date;
        date = date.substring(0,2)+'/'+date.substring(2,4)+'/'+date.substring(4,8);
        const data = moment(date, 'DD/MM/YYYY', "pt", true).format('DD/MM/YYYY');
        let pagamento = await Pagamento.find( {date: data } );
        let totalPagamento = 0;
        pagamento.forEach((value)=>{
            totalPagamento = totalPagamento + value.valor
        });
        let recebimento = await Recebimento.find( {date: data } );
        let totalRecebimento = 0;
        recebimento.forEach((value)=>{
        totalRecebimento = totalRecebimento + value.valor
        });
        const totalGeral = totalRecebimento - totalPagamento;
        console.log('Pagamentos: ' + totalPagamento.toFixed(2));
        console.log('Recebimentos: ' +totalRecebimento.toFixed(2));
        res.send({ saldoTotal: totalGeral.toFixed(2), 
            movimentacoes:{
                Pagamentos:{pagamento},
                Recebimentos: {recebimento}
        }});
};

exports.getbyCategoria = async(req,res)=>{
        let categoria = req.params.categoria;
        let type = req.params.type;
        let pagamento = await Pagamento.find( {categoria: categoria });
        let recebimento = await Recebimento.find( {categoria: categoria } );
        if(type == 1){
            res.status(200).send({
                Categoria: categoria,
                Recebimentos: recebimento
            })  
        }
        if(type == 0){
            res.status(200).send({
                Categoria: categoria,
                Pagamentos: pagamento,
            })
        }

}

