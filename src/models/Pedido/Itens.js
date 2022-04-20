const db = require("../database");
const { DataTypes } = require("sequelize");
const Itens = require("./Itens.js");

const Itens = db.define(
    "Itens", 
    {
        nome_produto: {
            type: DataTypes.STRING,
        },
        preco_produto: {
            type: DataTypes.DOUBLE,
        },
        preco_promocional:{
            type: DataTypes.DOUBLE,
        },
        quantidade:{
            type: DataTypes.INTEGER,
        },
        valor_total: {
            type: DataTypes.DOUBLE,
        },  
        id_produto: {
            type: DataTypes.INTEGER,
            references: {
                model: Produto,
                key: 'id',
        }},
        id_pedido: {
            type: DataTypes.INTEGER,
            references: {
                model: Pedido,
                key: 'id',
        }},        
        
        
    },{ 

        
    
    tableName: "itens",
    timestamps: false,
    }
);

module.exports = Itens;