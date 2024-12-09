# Desafio Node + MySQL com Nginx (Proxy Reverso) usando Docker

Desafio proposto pelo time da Full Cycle afim de montar um ambiente isolado do Node para Desenvolvimento onde a aplicação deverá ser acessada por um proxy reverso (via Nginx)!

## Como funciona?

Como o desafio propõe, usar o **Node + MySQL** acessando a aplicação via **Proxy Reverso (Nginx)**, de modo qualquer alteração efetuada na aplicação em **Node** tem reflexo automático, uma vez, que através do pacote: `nodemon` podemos monitorar qualquer mudança no arquivos e uma vez que o `nodemon` detecte as mesmas é executado um _hot reload_ da aplicação dando uma nova dinâmica no desenvolvimento!
Os _healthchecks_ implementados garantem que os recursos que possuem dependência entre sí só sejam iniciados quando o container _exigido_ esteja com o estado **healthy**!

## Como executar?

No diretório raiz do projeto execute o comando:

> docker compose up -d

A aplicação estará disponível no endereço

> http://localhost:8080