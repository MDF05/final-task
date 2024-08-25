const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/db")

const Kabupaten = sequelize.define(
  'Kabupaten',
  {
    id: {
      allowNull: false,
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    provinsi_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: "Provinsis",
        },
        key: "id",
      },
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
  {
    tableName : 'Kabupatens'
  }
);


module.exports = Kabupaten