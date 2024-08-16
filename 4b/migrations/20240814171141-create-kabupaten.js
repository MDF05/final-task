"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Kabupatens", {
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
            provinsi_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName :  "provinsis"
                    },
                    key: "id",
                },
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName : "users"
                    },
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
