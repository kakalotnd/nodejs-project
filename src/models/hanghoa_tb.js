'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class hanghoa_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    hanghoa_tb.init({
        mahanghoa: DataTypes.STRING,
        tenhanghoa: DataTypes.STRING,
        ghichu: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'hanghoa_tb',
    });
    return hanghoa_tb;
};