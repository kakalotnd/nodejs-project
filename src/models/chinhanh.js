'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chinhanh_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    chinhanh_tb.init({
        machinhanh: DataTypes.STRING,
        tenchinhanh: DataTypes.STRING,
        diachi: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'chinhanh_tb',
    });
    return chinhanh_tb;
};