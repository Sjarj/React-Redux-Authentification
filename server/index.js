const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressServer = express();
const router = require("./routes");
const http = require("http");

expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({ type: "*/" }));

const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);
server.listen(port);
console.log("le serveur écoute sur le port : ", port);
// mongodb+srv://Sjarj:<password>@cluster0-l1jes.mongodb.net/test?retryWrites=true&w=majority
