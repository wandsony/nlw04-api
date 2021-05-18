<h1 align="center">
 NPS-NLW04-API
</h1>

<p align="center">
  <img alt="API" src="./preview.png" width="100%">
</p>

## 📝 Sobre o Projeto
O <strong>NPS-NLW-API</strong> é uma API Restful para Net Promoter Score de empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS.

Esse projeto foi desenvolvido durante a trilha de <strong>NodeJS Back-end</strong>, na quarta edição da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/). Aprendemos conceitos sobre o que é um API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail.

## 🔶 Diagrama

<img src="./diagrama.png" alt="Diagrama da aplicação" />

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [nodemailer](https://nodemailer.com/about/)
- [uuid](https://www.npmjs.com/package/uuid)
- [Yup](https://github.com/jquense/yup)

## ⤵ Comandos para começar

Foram implementados testes de integração.

```bash
- git clone https://github.com/wandsony/nlw04-api
- cd nlw04-api
```

Instalando dependências

```bash
- npm install
```

ou

```bash
- yarn install
```

Gerar o arquivo de database.sqlite do Sqlite3, onde ficaram armazenados as tabelas da API

```bash
- yarn devDB
```

Criando as migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script configurado no package.json)

```bash
- yarn dev
```

## ⤵ Testes

Para testar se a aplicação passa em todos os testes de integração, utilize o comando:

```bash
- yarn test
```
A aplicação pode ser acessada em:
```
http://localhost:3333
```

## 🔗 Links do projeto

### Notion

- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Aula 1](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Aula 2](https://www.notion.so/danileao/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Aula 3](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-o-6b517e6d081241258009c640f7032cde)
- [Aula 4](https://www.notion.so/danileao/Dia-4-Envio-de-e-mail-1b85cb36f0a84e5e90a43e3acbce5674)
- [Aula 5](https://www.notion.so/Dia-5-Finalizando-nossa-api-com-valida-es-1f972c0e73a548fc84217ddf79fb7d90)

---
   >Este projeto foi desenvolvido com ❤️ por **[@Wandson Gomes](https://www.linkedin.com/in/wandsony/)**, com a instrutora **[@Daniele Leão](https://www.linkedin.com/in/daniele-le%C3%A3o-evangelista-5540ab25)**, durante a **[Next Level Week](https://rocketseat.com.br/)** na **[Rocketseat](https://www.linkedin.com/school/rocketseat/about/)** 💜. <br> 
---
