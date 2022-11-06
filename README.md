# Loja do Leo

> Título: Blueprint (Modelo) de um E-Commerce Genérico\
> Autor: LEONARDO CALIL BARRIATTO\
> Framework/arquitetura: MERN Stack
> Lajeado, Rio Grande do Sul\
> Novembro de 2022\
> Professor Orientador: Robson da Motta\
> Linha de pesquisa: Desenvolvimento de Software (sistema WEB)


Projeto entregue ao Curso EaD de Bacharelado em Engenharia de Software como pré-requisito obrigatório à obtenção do título de Bacharel em Engenharia de Software.

## Versão externa funcional (exemplo de uso)
....

## Características

- Carrinho de compras completo
- Avaliações e classificações de produtos
- Paginação dos produtos
- Recurso de pesquisa de produtos
- Perfil do usuário com pedidos
- Gerenciamento de produtos administrativos
- Gerenciamento de usuários administrativos
- Página de detalhes do pedido de administrador
- Marcar pedidos como opção entregue
- Processo de checkout (envio, forma de pagamento, etc)
- Integração PayPal/cartão de crédito
- 'Seeder' de banco de dados (produtos e usuários)

## Uso

### Variáveis Env 

Crie um arquivo .env no diretório principal (root) e adicione o seguinte

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Instalar dependências (frontend & backend)

```
npm install
cd frontend
npm install
```

### Rodar a aplicação

```
# Rodar frontend (:3000) & backend (:5000)
npm run dev

# Rodar somente o backend
npm run server
```

## Build & Deploy

```
# Criar uma build de produção
cd frontend
npm run build
```

### Banco de dados (seed)

Você pode usar os seguintes comandos para iniciar o banco de dados com alguns usuários e produtos de amostra, bem como destruir todos os dados.

```
# Importar dados
npm run data:import

# Destruir todos os dados
npm run data:destroy
```

```
Exemplos de usuários

admin@lojadoleo.com.br (Admin)
123456

raquel@lojadoleo.com.br (Cliente)
123456

marlon@lojadoleo.com.br (Cliente)
123456
```


## Lincença

The MIT License

Copyright (c) 2022 - Loja do Leo Barriatto.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
