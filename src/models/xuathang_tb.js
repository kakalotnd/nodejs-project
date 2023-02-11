'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class xuathang_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    xuathang_tb.init({
        idnguoiban: DataTypes.STRING,
        idnguoimua: DataTypes.STRING,
        soluong: DataTypes.STRING,
        mahanghoa: DataTypes.STRING,
        dongia: DataTypes.STRING,
        thanhtien: DataTypes.STRING,
        ghichu: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'xuathang_tb',
    });
    return xuathang_tb;
};