/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [{
    title: 'O Poderoso Chefão',
    author: 'Mario Puzzo',
    pageQuantity: '400',
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  }], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
