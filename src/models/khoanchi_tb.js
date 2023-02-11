'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class khoanchi_tb extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    khoanchi_tb.init({
        makhoanchi: DataTypes.STRING,
        tenkhoanchi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'khoanchi_tb',
    });
    return khoanchi_tb;
};