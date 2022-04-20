const db = require("../database");
const { DataTypes } = require("sequelize");
const Categoria = require("./Categoria.js");

const Categoria = db.define(
    "Categoria", 
    {
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_categoria: {
            type: DataTypes.STRING,
        },     
                
    },{ 

            
    tableName: "categoria",
    timestamps: false,
    }
);

module.exports = Categoria;