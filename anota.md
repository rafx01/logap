Este arquivo serve como anotação dos fluxos que eu fiz e das decisões que tomei, sendo mais informal, apenas para informá-los.

Inicialmente, criei o projeto em um monorepo (turborepo), justamente com a intenção de unificar back e o front num mesmo local, facilitando também a possibilidade de dockerização do projeto.

Eu optei por fazer o front-end em Next + React, sendo assim, o Spring vai apenas disponibilizar as rotas do CRUD, sem servir o HTML.

Depois, criei o projeto spring boot com o Initializr, com Maven, Spring Boot 4.1.1, enpacotamento .jar, e Java 21 (era o que eu já possuía instalado na minha máquina). Para dependências, adicionei o Tomcat.

Depois de criado o projeto, com os apps de back e front definidos, criei a dockerização do mesmo, com o docker-compose subindo os dois serviços.

Simultaneamente fui criando o o back e o front-end do dashboard, utilizando o tanstack query (anteriormente react query) para fazer o tratamento das requisições por parte do front-end, e no back-end eu seguia o fluxo de criação dto->repository->service->controller.
