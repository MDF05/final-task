"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Kabupaten extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Kabupaten.init(
        {
            provinsi_id: DataTypes.INTEGER,
            nama: DataTypes.STRING,
            diresmikan: DataTypes.STRING,
            photo: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Kabupaten",
        },
    )
    return Kabupaten
}
