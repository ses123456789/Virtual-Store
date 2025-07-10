'use strict';

const { ORDER_PRODUCT_SCHEMAS, ORDER_PRODUCT_TABLE }= require( "../models/Order-ProductsModel.js");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(ORDER_PRODUCT_TABLE, ORDER_PRODUCT_SCHEMAS)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)

  }
}
