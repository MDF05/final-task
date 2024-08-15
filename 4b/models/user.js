const {  DataTypes } = require('sequelize');
const sequelize = require('../db/db')

const User = sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
   email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageUrl: {
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
  },  
);

module.exports = User