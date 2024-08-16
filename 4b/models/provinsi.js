"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Provinsi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Provinsi.hasMany(models.Kabupaten, {foreignKey : "provinsiID"})
        }
    }
    Provinsi.init(
        {
            nama: DataTypes.STRING,
            diresmikan: DataTypes.STRING,
            photo: DataTypes.STRING,
            pulau: DataTypes.STRING,
            userId: DataTypes.UUID,
        },
        {
            sequelize,
            modelName: "Provinsi",
        },
    )
    return Provinsi
}
