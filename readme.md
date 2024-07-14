Este projeto serve para gerenciar o fluxo de uma livraria, utilizando o CRUD para criar, pesquisar, atualizar e deletar registro no banco de dados.

Foram criados 3 atributos:
    titulo  --> Nome do livro, é uma atribuito que não pode ser nulo;
    autor   --> Nome do autor do livro, é um atributo opcional;
    editora --> Nome da editora do livro, é um atributo opcional;

    id      --> é criado pelo banco de dados ao inserir um novo registro, é a chave pela qual será realizado pesquisa, alteração ou deleção.

A API foi criada utilizando as seguintes tecnologias:

    * Node.js:
        Instalar o express;
        Instalar o datenv;

    * MongoDB Atlas como banco de dados:
        Para acessar a base de dados é necessário logar na conta no MongoDB Atlas utilizando o link abaixo:
        https://cloud.mongodb.com/v2/668884d80e1fa22658d84fa5#/metrics/replicaSet/6688850a18348e40bad4485c/explorer/Livraria/livros/find

    * Postman para realizar os testes dos endpoints criados.

        Utilize os seguintes metódos para: 

        Get: http://localhost:3000/livros - para buscar todos os livros;
        Get: http://localhost:3000/livros/Id - para buscar um livro especifico através do ID.

        Post: http://localhost:3000/livros, - para criar um novo registro

            No body formato Json incluir:
            {
                "titulo": "",
                "autor": "",
                "editora": ""
            }

        Put: http://localhost:3000/livros/Id, - para atualizar qualquer atributo 
        
            No body formato Json incluir um dos atributos que deseja alterar, sendo eles:
            {
                "titulo": "",
                "autor": "",
                "editora": ""
            }
        
        Delete: http://localhost:3000/livros/Id, para deletar um livro especifico utilizado o ID.


    
