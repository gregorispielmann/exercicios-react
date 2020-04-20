//startar o servidor e configurações dele
const port = 3003;

const bodyParser = require("body-parser"); // fazer o parse para gente
const express = require("express");
const server = express();
const allowCors = require("./cors");
//todas as requisições passarão por esse midwares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
