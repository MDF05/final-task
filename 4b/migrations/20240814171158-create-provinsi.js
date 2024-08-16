"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Provinsis", {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement : true,
                type: Sequelize.INTEGER,
            },
            nama: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            diresmikan: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            photo: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            pulau: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model:  "users",
                    key: "id",
                },
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Provinsis")
    },
}
