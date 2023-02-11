'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('chinhanh_tb', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // machinhanh: DataTypes.STRING,
            // tenchinhanh: DataTypes.STRING,
            // diachi: DataTypes.STRING,
            machinhanh: {
                type: Sequelize.STRING
            },
            tenchinhanh: {
                type: Sequelize.STRING
            },
            diachi: {
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
        await queryInterface.dropTable('chinhanh_tb');
    }
};