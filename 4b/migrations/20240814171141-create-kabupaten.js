"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Kabupatens", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            provinsi_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Provinsis",
                    },
                    key: "id",
                },
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Kabupatens")
    },
}
