const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db')

const Provinsi = sequelize.define(
  'Provinsi',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    nama: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    diresmikan: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    photo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pulau: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: "Users",
        },
        key: "id",
      },
    },
  },
);



module.exports = Provinsi

