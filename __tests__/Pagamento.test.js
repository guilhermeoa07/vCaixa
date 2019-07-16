const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const Pagamento = require('../src/Pagamento/models/modelPagamentos');
const User = require('../src/Users/models/modelUser');
const should = chai.should();

chai.use(chaiHttp);
var token = '';

describe('Pagamento', ()=>{
    before((next) =>{
        Pagamento.remove({}, (err)=>{ 
            next();
        });
        const user = {
            username: 'guilherme',
            password: '1234',
          }; 
    });
    it ('adiquirir token', ()=>{
        chai.request(server)
        .post('/user/authenticate')
        .send(user)
        .end((err, res) => {
            res.should.status(200);
            token = res.body.User.Token;
            var id = res.body.User.Id;
            done();
        });     
       })
console.log('====' + token);
    const pagamento = {
        description: "pagamento de boleto",
        valor: "103.31"
    }

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
    })
});