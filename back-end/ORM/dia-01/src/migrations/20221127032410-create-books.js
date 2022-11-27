'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('books', {
       // id: deve ser do tipo integer, não pode ser nula e ser a chave 
       // primária da tabela com auto incremento;
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,
       },
       // title: deve ser do tipo string e não pode ser nulo;
       title: {
         allowNull: false,
         type: Sequelize.STRING,
       },
       // author: deve ser do tipo string e não pode ser nulo;
       author: {
         allowNull: false,
         type: Sequelize.STRING,
       },
       // pageQuantity: deve ser do tipo integer e pode ser nulo;
       pageQuantity: {
         allowNull: false,
         type: Sequelize.INTEGER,
       },
       // createdAt: deve ser do tipo date e não pode ser nulo;
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       // updatedAt: deve ser do tipo date e não pode ser nulo;
       updateAt: {}
     })
   },
 
   down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('books');
   }
 };
