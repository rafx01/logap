Este arquivo serve como anotação dos fluxos que eu fiz e das decisões que tomei, sendo mais informal, apenas para informá-los.

Inicialmente, criei o projeto em um monorepo (turborepo), justamente com a intenção de unificar back e o front num mesmo local, facilitando também a possibilidade de dockerização do projeto.

Eu optei por fazer o front-end em Next + React, sendo assim, o Spring vai apenas disponibilizar as rotas do CRUD.

Depois, criei o projeto spring boot com o Initializr, com Maven, Spring Boot 4.1.1, enpacotamento .jar, e Java 21 (era o que eu já possuía instalado na minha máquina). Para dependências, adicionei o Tomcat.

Depois de criado o projeto, com os apps de back e front definidos, criei a dockerização do mesmo, com o docker-compose subindo os dois serviços.
