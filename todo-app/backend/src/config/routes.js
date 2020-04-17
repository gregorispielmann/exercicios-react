// quando pega o express independente do arquivo sempre pega a mesma instancia por ser singleton
const express = require("express");

//recebe o server como parametro quando chamado pelo loader
module.exports = function (server) {
  //API Routes
  const router = express.Router();

  //sempre que digitar barra api esse router será chamado
  server.use("/api", router);

  //TODO Routes
  const todoService = require("../api/todo/todoServise");

  //registra nas rota /todos para usar os get, put, delete....
  todoService.register(router, "/todos");
};
