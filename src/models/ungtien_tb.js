'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ungtien_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    ungtien_tb.init({
        iduser: DataTypes.STRING,
        sotien: DataTypes.STRING,
        ghichu: DataTypes.STRING,
        ngayung: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ungtien_tb',
    });
    return ungtien_tb;
};