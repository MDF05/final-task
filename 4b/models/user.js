const { DataTypes } = require("sequelize");
const Kabupaten = require("./kabupaten");
const Provinsi = require("./provinsi");
const sequelize = require("../db/db");

const User = sequelize.define(
  "User",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
  {
    tableName: "Users",
  }
);

User.hasMany(Provinsi, { foreignKey: "user_id" });
Provinsi.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Kabupaten, { foreignKey: "user_id" });
Kabupaten.belongsTo(User, { foreignKey: "user_id" });

Provinsi.hasMany(Kabupaten, { foreignKey: "provinsi_id" });
Kabupaten.belongsTo(Provinsi, { foreignKey: "provinsi_id" });

module.exports = User;
