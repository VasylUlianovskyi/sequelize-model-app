'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Complete project documentation',
          description:
            'Write and organize all the project documentation for the final review.',
          deadline: '2024-11-25',
          is_done: false,
          priority: 'medium',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
