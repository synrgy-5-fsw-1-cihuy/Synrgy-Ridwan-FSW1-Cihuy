'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('superadmin123', saltRounds);
      await queryInterface.bulkInsert('Users', [{
        email: 'superadmin@gmail.com',
        password: hashedPassword,
        role: 'SUPERADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
