const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const PORT = 3000;

const db = require("./src/database");

const app = express();

db.hasConection();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando na porta 3000"));
