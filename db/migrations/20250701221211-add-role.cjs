'use strict';
const { USERS_SCHEMAS, USERS_TABLE }= require ( "../models/UserModel.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.addColumn(USERS_TABLE, "role", USERS_SCHEMAS.role)
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(USERS_TABLE, "role")
  }
};
