'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class nhaphang_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    nhaphang_tb.init({
        idnguoiban: DataTypes.STRING,
        idnguoimua: DataTypes.STRING,
        soluong: DataTypes.STRING,
        mahanghoa: DataTypes.STRING,
        dongia: DataTypes.STRING,
        thanhtien: DataTypes.STRING,
        ghichu: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'nhaphang_tb',
    });
    return nhaphang_tb;
};