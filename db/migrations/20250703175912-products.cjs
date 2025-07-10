'use strict';

const { PRODUCT_SCHEMA,PRODUCT_TABLE }= require( "../models/ProductModel.js");
const { CATEGORY_SCHEMA,CATEGORY_TABLE }= require( "../models/CategoryModel.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(CATEGORY_TABLE,CATEGORY_SCHEMA)
   await queryInterface.createTable(PRODUCT_TABLE,PRODUCT_SCHEMA)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
  }
};
