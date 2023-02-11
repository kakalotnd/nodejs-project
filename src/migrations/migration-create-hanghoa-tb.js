'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hanghoa_tb', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // mahanghoa: DataTypes.STRING,
            // tenhanghoa: DataTypes.STRING,
            // ghichu: DataTypes.STRING,
            mahanghoa: {
                type: Sequelize.STRING
            },
            tenhanghoa: {
                type: Sequelize.STRING
            },
            ghichu: {
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
        await queryInterface.dropTable('hanghoa_tb');
    }
};