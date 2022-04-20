const db = require("../database");
const { DataTypes } = require("sequelize");
const Cliente = require("./Cliente.js");

const Cliente = db.define(
    "Cliente", 
    {
        id_cliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_cliente: {
            type: DataTypes.STRING,
        },
        email_cliente: {
            type: DataTypes.STRING,
        },
        cpf_cliente:{
            type: DataTypes.INTEGER,
        },
        senha_cliente:{
            type: DataTypes.STRING,
        },  
        data_aniversario: {
            type: DataTypes.DATE,
        },
        
        
        
    },{ 

        
    
    tableName: "cliente",
    timestamps: false,
    }
);

module.exports = Cliente;