//tera os principais arquivos da aplicação
// https://github.com/baugarten/node-restful
const server = require("./config/server");
require("./config/database");

//passando o server como parametro
require("./config/routes")(server);
