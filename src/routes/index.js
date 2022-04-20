const express = require("express");
const produtoController = require("../controllers/produtoController.js");
const routes = express.Router();


routes.post("/produto/criar", produtoController.cadastrarProduto);

module.exports = routes;
