"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Kabupatens", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue : Sequelize.UUIDV4
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
            provinsiID: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model:  "Provinsis",
                    key: "id",
                },
            },
            userId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model:  "Users",
                    key: "id",
                },
            },
            createdAt: {
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
        await queryInterface.dropTable("Kabupatens")
    },
}
