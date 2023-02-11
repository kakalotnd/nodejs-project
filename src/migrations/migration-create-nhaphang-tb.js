'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('nhaphang_tb', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // idnguoiban: DataTypes.STRING,
            // idnguoimua: DataTypes.STRING,
            // soluong: DataTypes.STRING,
            // mahanghoa: DataTypes.STRING,
            // dongia: DataTypes.STRING,
            // thanhtien: DataTypes.STRING,
            // ghichu: DataTypes.STRING
            idnguoiban: {
                type: Sequelize.STRING
            },
            idnguoimua: {
                type: Sequelize.STRING
            },
            soluong: {
                type: Sequelize.STRING
            },
            mahanghoa: {
                type: Sequelize.STRING
            },
            dongia: {
                type: Sequelize.STRING
            },
            thanhtien: {
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
        await queryInterface.dropTable('nhaphang_tb');
    }
};