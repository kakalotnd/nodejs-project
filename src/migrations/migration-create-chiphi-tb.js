'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('chiphi_tb', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // iduser: DataTypes.STRING,
            // makhoanchi: DataTypes.STRING,
            // sotien: DataTypes.STRING,
            // ghichu: DataTypes.STRING,
            // ngaythang: DataTypes.STRING
            iduser: {
                type: Sequelize.STRING
            },
            makhoanchi: {
                type: Sequelize.STRING
            },
            sotien: {
                type: Sequelize.STRING
            },
            ghichu: {
                type: Sequelize.STRING
            },
            ngaythang: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('chiphi_tb');
    }
};