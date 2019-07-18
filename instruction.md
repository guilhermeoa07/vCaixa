# Instructions

## Dependencias:

### Instale antecipadamente:
- Versão v10.10.0 ou superior do Node.js
- Versão 6.9.0 ou superior do NPM.
- MongoDB versão v4.0.8 ou superior


## Iniciando projeto. 

- Iniciar com o comando:
        
        npm install

- Configurar caminho do mongoDB:

        Abrir a pasta /config, localize o DatabaseConfig.ini
        Se necessario alterar o caminho da Collection.

- Definir a porta padrão.

        Definir a porta no arquivo DatabaseConfig.ini na pasta /config. Alterando o campo Config-> Porta.

- Após a instalação e configuração dos pacotes apropriados:

        npm start

## Rotas:

    Se necessario alterar a porta do caminho previamente.

### Users

- Exemplo de cadastro de novo usuario:
        Requisição POST:  http://127.0.0.1:80/user
     
    Enviada no corpo da requisição os valores de 'login' e 'password', como o exemplo:  
    {
	    "login": "guilherme",
	    "password": "1234"
    }

- Exemplo de login de novo usuario:
        Requisição POST:  http://127.0.0.1:80/user/authenticate

    Enviada no corpo da requisição os valores de 'login' e 'password', como o exemplo:  
    {
	    "login": "guilherme",
	    "password": "1234"
    }

## Todos os metodos a partir desse ponto exigem que o token gerado pelo no cadastro do user seja enviado como parâmetro 'authorization' acompanhado de 'Bearer'. 
- Exemplo:
        
        authorization: Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMmI2YzQ3MmFmOGQ2MzU5ODRmYmViYyIsImlhdCI6MTU2MzEyNjg1NSwiZXhwIjoxNTYzNTU4ODU1fQ.C3CmhPtdFLBL-Adnr4mln5v5rBxQRfaGTnnKPw0wv1c

## ---------------------------------------------------------------------

## Rotas
 
### [Recebimento](__Instruction/pagamento.md)

### [Pagamento](__Instruction/pagamento.md)

### [Categoria](__Instruction/categoria.md)

### [Caixa](__Instruction/caixa.md)

