### Pagamentos:

- Exemplo de busca por todos os pagamentos: 

       Requisição GET:  http://127.0.0.1:80/pagamento

- Exemplo de busca por Descrição (substituir o :date pela data a ser buscada.):

        Requisição GET: http://127.0.0.1:port/pagamento/date/:date

- Exemplo de novo pagamento:

        Requisição POST:  http://127.0.0.1:80/pagamento
    
    Enviada no corpo da requisição os valores de 'Description', 'valor' e categoria, como o exemplo:  
     {
        "description": "Pagamento de boleto",
        "valor": "10.33",
        "categoria": "gelo"
    }
- Exemplo de exclusão do pagamento(substituir o :id pelo id do recebimento a ser excluído.):

        Requisição DELETE:  http://127.0.0.1:80/pagamento/:id
