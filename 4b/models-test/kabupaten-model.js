const { DataTypes, INTEGER } = require("sequelize")
const sequelize = require("./db")

const Kabupaten = sequelize.define(
    "Kabupaten",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        Nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provinsi_id: {
            type: DataTypes.INTEGER,
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
    },
    {
        tableName: "kabupaten_tb",
    },
)

module.exports = Kabupaten
