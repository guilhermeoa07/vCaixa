const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');
const User = require('../src/Users/models/modelUser');
const should = chai.should();

chai.use(chaiHttp);

describe('Usuario', () =>{
    before((next) =>{
        User.remove({}, (err)=>{ 
            next();
        });
    });
    const Default = {
        "login": "guilherme" ,
        "password": "1234" 
    }
    it('Teste de cadastro - POST',  (done)=>{
        chai.request(server)
        .post('/user')
        .send(Default)
        .end((err, res) =>{
            if(err) console.log({Erro: err});
            res.should.status(201);
            done();
        });
    });
    it('Teste de login - Authenticate', (done)=>{
        chai.request(server)
        .post('/user/authenticate')
        .send(Default)
        .end((err, res) => {
            res.should.status(200);
            done();
        });     
    });
});