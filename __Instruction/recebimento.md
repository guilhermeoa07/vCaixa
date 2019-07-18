### Recebimentos:

- Exemplo de busca por todos os recebimentos: 

       Requisição GET:  http://127.0.0.1:80/recebimento

- Exemplo de busca por Descrição (substituir o :date pela data a ser buscada.):

        Requisição GET: http://127.0.0.1:port/recebimento/date/:date

- Exemplo de novo recebimento:

        Requisição POST:  http://127.0.0.1:80/recebimento
    
    Enviada no corpo da requisição os valores de 'Description', 'valor' e categoria, como o exemplo:  
     {
        "description": "Recebimento de boleto",
        "valor": "10.33",
        "categoria": "gelo"
    }
- Exemplo de exclusão do recebimento(substituir o :id pelo id do recebimento a ser excluído.):

        Requisição DELETE:  http://127.0.0.1:80/recebimento/:id