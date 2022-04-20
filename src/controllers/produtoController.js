const Produto = require ("../models/Produto/Produto");
const Favoritos = require ("../models/Produto/Favoritos");


const produtoController = {
   

    async cadastrarProduto(req,res) {
        const {nome_produto, descricao_produto, preco_produto, preco_promocional, estoque_produto, link_foto, id_categoria, id_fornecedor} = req.body;

        const novoProduto = await Produto.create({
            nome_produto, 
            descricao_produto, 
            preco_produto, 
            preco_promocional, 
            estoque_produto, 
            link_foto,
            id_categoria,
            id_fornecedor,

        });
        res.json (novoProduto);
    },




};

module.exports = produtoController;