const db = require("../../database");
const { DataTypes } = require("sequelize");
const Cliente = require("../Cliente/Cliente");

const Pedido = db.define(
    "Pedido", 
    {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total_bruto: {
            type: DataTypes.DOUBLE,
        },
        desconto: {
            type: DataTypes.DOUBLE,
        },
        total_pedido:{
            type: DataTypes.DOUBLE,
        },
        data_pedido:{
            type: DataTypes.DATE,
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente,
                key: 'id',
        }},
              
        
        
    },{ 

        
    
    tableName: "pedido",
    timestamps: false,
    }
);

module.exports = Pedido;