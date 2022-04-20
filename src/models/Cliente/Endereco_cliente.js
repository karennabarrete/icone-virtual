const db = require("../../database");
const { DataTypes } = require("sequelize");
const Cliente = require("./Cliente");

const Endereco_cliente = db.define(
    "Endereco_cliente", 
    {
        endereco_cliente: {
            type: DataTypes.STRING,
        },
        cep_cliente: {
            type: DataTypes.STRING,
        },
        cidade_cliente:{
            type: DataTypes.STRING,
        },
        estado_cliente:{
            type: DataTypes.STRING,
        },  
        id_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente,
                key: 'id',
        }},        
        
        
    },{ 

        
    
    tableName: "endereco_cliente",
    timestamps: false,
    }
);

module.exports = Endereco_cliente;