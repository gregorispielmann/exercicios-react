const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);

// new: receber o retorno da atualização do registro atualizado
//runValidators: valida os campos no update... não faz por padrão
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
