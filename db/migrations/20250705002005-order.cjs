'use strict';

const { ORDER_SCHEMA, ORDER_TABLE }= require( "../models/OrderModel.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(ORDER_TABLE, ORDER_SCHEMA)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE)

  }
};
