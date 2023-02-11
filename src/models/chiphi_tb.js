'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chiphi_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    chiphi_tb.init({
        iduser: DataTypes.STRING,
        makhoanchi: DataTypes.STRING,
        sotien: DataTypes.STRING,
        ghichu: DataTypes.STRING,
        ngaythang: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'chiphi_tb',
    });
    return chiphi_tb;
};