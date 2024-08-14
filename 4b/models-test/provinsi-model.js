const { DataTypes } = require("sequelize")
const sequelize = require("./db")

const Provinsi = sequelize.define(
    "Provinsi",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        diresmikan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pulau: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "provinsi_tb",
    },
)

module.exports = Provinsi
