const db = require("../../database");
const { DataTypes } = require("sequelize");

const Categoria = db.define(
    "Categoria", 
    {
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            id: true,
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