'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('users', {
      fields: ['birthday'],
      type: 'check',
      name: 'check_birthday_users',
      where: {
        birthday: {
          [Sequelize.Op.lte]: Sequelize.literal('CURRENT_DATE'),
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('users', 'check_birthday_users');
  },
};
