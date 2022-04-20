const db = require("../database");
const { DataTypes } = require("sequelize");
const Fornecedor = require("./Fornecedor.js");

const Fornecedor = db.define(
    "Fornecedor", 
    {
        id_fornecedor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_fornecedor: {
            type: DataTypes.STRING,
        },
        contato_fornecedor: {
            type: DataTypes.STRING,
        },     
                
    },{ 

            
    tableName: "fornecedor",
    timestamps: false,
    }
);

module.exports = Fornecedor;