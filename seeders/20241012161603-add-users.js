'use strict';

const bcrypt = require('bcrypt');

const SALT_RAUNDS = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nickname: 'test',
          email: 'mail@mail',
          tel: '+380123456789',
          passw_hash: bcrypt.hashSync('1234', SALT_RAUNDS),
          birthday: '2000-05-06',
          gender: 'male',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
