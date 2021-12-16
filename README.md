# BitBankNegociacoes
A aplicação consiste em armazenar os dados de uma negociação tanto na tabela HTML quanto no servidor atendendo as seguintes regras de negócio:

- Uma negociação deve conter os campos válidos para: Data, Quantidade e Valor.
- Uma vez criada, a negociação não pode ser alterada.

![BitBankNegociacoes](https://user-images.githubusercontent.com/3083215/146387928-0a10f3c1-82fc-4742-aba0-0555a18bf5b4.JPG)

## :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Validação dos dados de entrada através do HTML5.
- `Funcionalidade 2`: Inserir uma nova negociação na tabela com manipulação do DOM com JavaScript.
- `Funcionalidade 3`: Inserir uma nova negociação no servidor através de uma requisição HTTP POST.
- `Funcionalidade 4`: Importar do servidor as negociações da semana atual, semana passada, semana retrasada ou todas elas de uma só vez.
- `Funcionalidade 4`: Apagar todas as negociações da tabela.
- `Funcionalidade 5`: Ordenar as negociações da tabela por ordem crescente/decrescente através da coluna da tabela.

## ✔️ Técnicas e tecnologias utilizadas

- ``HTML``
- ``CSS``
- ``Javascript``
- ``AJAX com Promisses utilizando a biblioteca Axios``
- ``NodeJS para criar o servidor web e de dados da aplicação (não foi utilizado banco de dados)``
- ``Padrões de projeto utilizados na aplicação: MVC, Proxy, Data Bind``

## 📁 Acesso ao projeto
Você pode acessar os arquivos do projeto clicando [aqui](https://github.com/rafast/BitBankNegociacoes).
