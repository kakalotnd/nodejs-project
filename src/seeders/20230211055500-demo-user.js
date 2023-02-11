'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Duc',
      email: 'ducnguyen@example.com',
      tel: '0915610828',
      pass: '1234',
      roleid: 'admin',
      machinhanh: 'CNAD1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
