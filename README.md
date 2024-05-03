# API de Pagamentos

Uma API de pagamentos construída com o NestJS, um framework progressivo para construção de aplicações eficientes e escaláveis do lado do servidor.

## Descrição

Esta é uma API para processamento de pagamentos, construída com o NestJS, que permite realizar diversas operações relacionadas a pagamentos, como criar um novo pagamento, buscar todos os pagamentos e encontrar um pagamento específico pelo ID.

## Endpoints

A seguir estão os endpoints disponíveis na API:

### Criar um novo pagamento

POST /payments

Cria um novo pagamento com as informações fornecidas no corpo da requisição.

Exemplo de corpo da requisição:
{
  "amount": 50.00
  "description": "Compra de produto",
}

### Listar todos os pagamentos

GET /payments

Retorna uma lista de todos os pagamentos realizados.

### Buscar um pagamento pelo ID

GET /payments/:id

Retorna as informações de um pagamento específico com base no ID fornecido na URL.

Exemplo de resposta:
{
  "id": "1",
  "amount": 50.00,
  "description": "Compra de produto",
  "status": "completed"
}