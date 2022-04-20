const db = require("../../database");
const { DataTypes } = require("sequelize");
const Categoria = require("./Categoria.js");
const Fornecedor = require("./Fornecedor.js");

const Produto = db.define(
    "Produto", 
    {
        id_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_produto: {
            type: DataTypes.STRING,
        },
        descricao_produto: {
            type: DataTypes.STRING,
        },
        preco_produto:{
            type: DataTypes.DOUBLE,
        },
        preco_promocional:{
            type: DataTypes.DOUBLE,
        },
        estoque_produto:{
            type: DataTypes.INTEGER,
        },
        link_foto:{
            type: DataTypes.STRING,
        },  
        id_categoria: {
            type: DataTypes.INTEGER,
            references: {
                model: Categoria,
                key: 'id',
        }},
        id_fornecedor: {
            type: DataTypes.INTEGER,
            references: {
                model: Fornecedor,
                key: 'id',
        }},        
        
        
    },{ 

        
    
    tableName: "produto",
    timestamps: false,
    }
);

module.exports = Produto;