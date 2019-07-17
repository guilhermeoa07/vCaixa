const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const Pagamento = require('../src/Pagamento/models/modelPagamentos');
require('./User.test');
const should = chai.should();

chai.use(chaiHttp);

describe('Pagamento', ()=>{
    const pagamento = {
        description: "pagamento de boleto",
        valor: "103.31",
        categoria: "agua"
    };
    before((next) =>{
        Pagamento.remove({}, (err)=>{ 
            next();
        });
    });
    it('Lançamento de pagamento - POST', (done)=>{
        chai.request(server)
        .post('/pagamento')
        .set('Authorization', 'Bearer '+ token)
        .send(pagamento)
        .end((err, res) =>{
            if(err) console.log({Erro: err});
            res.should.status(201);
            done();
        })
    });
    it('Busca de pagamentos - GET', (done) =>{
        chai.request(server)
        .get('/pagamento')
        .set('Authorization', 'Bearer '+ token)
        .end((err, res) =>{
            if(err) console.log({Erro: err});
            res.should.status(200);
            done();
        })
    });
});