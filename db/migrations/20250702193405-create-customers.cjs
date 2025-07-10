'use strict';

const { CUSTOMERS_SCHEMAS, CUSTOMERS_TABLE }= require( "../models/CustomerModel.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(CUSTOMERS_TABLE,CUSTOMERS_SCHEMAS)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CUSTOMERS_TABLE)
  }
};
