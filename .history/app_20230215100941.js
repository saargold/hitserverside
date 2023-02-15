const express = require('express');
const http = require("http");

const app = express();


app.use(express.json());

const server = http.createServer(app);
let port = process.env.PORT ||"3000";

server.listen(port);