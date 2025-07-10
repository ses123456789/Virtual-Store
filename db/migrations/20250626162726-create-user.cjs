'use strict';

const { USERS_SCHEMAS, USERS_TABLE }= require( "../models/UserModel.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(USERS_TABLE,USERS_SCHEMAS)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USERS_TABLE)
  }
};
