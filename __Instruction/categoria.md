### Categoria:
- Exemplo de busca de todas as categorias: 

       Requisição GET:  http://127.0.0.1:80/categoria
       
- Exemplo de busca de categorias pela descrição(substituir o :description pela descrição a ser buscada.): 

       Requisição GET:  http://127.0.0.1:80/categoria/description/:description

- Exemplo de cadastro de nova categoria:

        Requisição POST:  http://127.0.0.1:80/categoria
    
    Enviada no corpo da requisição os valores de 'Description' e 'type', sendo type 0 para recebimento e 1 para pagamento, como o exemplo:  
    {
    	"description": "gelo",
        "type": "1"
    }

- Exemplo de exclusão do pagamento(substituir o :id pelo id do recebimento a ser excluído.):

        Requisição DELETE:  http://127.0.0.1:80/categoria/:id