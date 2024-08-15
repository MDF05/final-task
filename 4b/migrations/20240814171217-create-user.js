"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                primaryKey: true,
                type: Sequelize.STRING,
            },
            password: {
                primaryKey: true,
                type: Sequelize.STRING,
            },
            email: {
                primaryKey: true,
                type: Sequelize.STRING,
            },
            imageUrl: {
                primaryKey: true,
                type: Sequelize.STRING,
            },
            createdAt: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users")
    },
}
