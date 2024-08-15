const { Sequelize } = require("sequelize")

const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password, {
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: process.env.db_dialect,
    // logging: process.env.db_logging === "development" ? (...msg) => console.log(msg) : false,
    // dialectOptions: {
    //     requestTimeout: 30000,
    //     encrypt: true,
    // },
})

module.exports = sequelize
