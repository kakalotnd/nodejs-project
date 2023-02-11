'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ungtien_tb', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // iduser: DataTypes.STRING,
            // sotien: DataTypes.STRING,
            // ghichu: DataTypes.STRING,
            // ngayung: DataTypes.STRING
            iduser: {
                type: Sequelize.STRING
            },
            sotien: {
                type: Sequelize.STRING
            },
            ghichu: {
                type: Sequelize.STRING
            },
            ngayung: {
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
        await queryInterface.dropTable('ungtien_tb');
    }
};