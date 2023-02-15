'use strict';
/** @type {import('sequelize-cli').Migration} */

// function khoi tao table ban dau

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       // name: DataTypes.STRING,
//       // email: DataTypes.STRING,
//       // tel: DataTypes.STRING,
//       // pass: DataTypes.STRING,
//       // roleid: DataTypes.STRING,
//       // machinhanh: DataTypes.STRING,
//       // token: DataTypes.STRING
//       name: {
//         type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       tel: {
//         type: Sequelize.STRING
//       },
//       pass: {
//         type: Sequelize.STRING
//       },
//       roleid: {
//         type: Sequelize.STRING
//       },
//       machinhanh: {
//         type: Sequelize.STRING
//       },
//       token: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Users');
//   }
// };


// function add colum
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Users',
        'token',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Users', 'token', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};