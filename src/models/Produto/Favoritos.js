const db = require("../database");
const { DataTypes } = require("sequelize");
const Favoritos = require("./Favoritos.js");

const Favoritos = db.define(
    "Favoritos", 
    {
        nome_produto: {
            type: DataTypes.STRING,
        },
        descricao_produto: {
            type: DataTypes.STRING,
        },
        link_foto:{
            type: DataTypes.STRING,
        },  
        id_produto: {
            type: DataTypes.INTEGER,
            references: {
                model: Produto,
                key: 'id',
        }},
        id_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente,
                key: 'id',
        }},        
        
        
    },{ 

        
    
    tableName: "favoritos",
    timestamps: false,
    }
);

module.exports = Favoritos;