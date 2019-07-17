const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const Recebimento = require('../src/Recebimento/models/modelRecebimentos');
require('./User.test');
const should = chai.should();

chai.use(chaiHttp);

describe('Recebimento', ()=>{
    const recebimento = {
        description: "Recebimento de boleto",
        valor: "103.31",
        categoria: "gelo"
    };
    before((next) =>{
        Recebimento.remove({}, (err)=>{ 
            next();
        });
    });
    it('Lançamento de Recebimento - POST', (done)=>{
        chai.request(server)
        .post('/recebimento')
        .set('Authorization', 'Bearer '+ token)
        .send(recebimento)
        .end((err, res) =>{
            if(err) console.log({Erro: err});
            res.should.status(201);
            done();
        })
    });
    it('Busca de Recebimento - GET', (done) =>{
        chai.request(server)
        .get('/recebimento')
        .set('Authorization', 'Bearer '+ token)
        .end((err, res) =>{
            if(err) console.log({Erro: err});
            res.should.status(200);
            done();
        })
    });
});