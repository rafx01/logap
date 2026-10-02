Para a execução do projeto, é necessário ter Docker (docker compose) instalado na máquina.

Para rodar o mesmo, basta executar `docker compose up -d` e os containers subirão.

O Front irá rodar na porta 8666 e o back na porta padrão 8080, o banco na 5432 e o pgadmin na 5050.

Coloquei o .env no gitignore, mas o .env.example está versionado e não está apenas o exemplo propositalmente, pode copiá-lo e inserir no arquivo .env.
