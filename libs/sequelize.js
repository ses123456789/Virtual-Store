import { Sequelize } from "sequelize";
import DBconfig from "../config/config.js"
import setupModels from "../db/models/index.js";

const USER= encodeURIComponent(DBconfig.dbUser)
const PASSWORD= encodeURIComponent(DBconfig.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${DBconfig.dbHost}:${DBconfig.dbPort}/${DBconfig.dbName}`;
const sequelize= new Sequelize(URI,{
  dialect: "postgres",
  logging: true
})
// mysql
// const URI = `mysql://${USER}:${PASSWORD}@${DBconfig.dbHost}:${DBconfig.dbPort}/${DBconfig.dbName}`;
// const sequelize= new Sequelize(URI,{
//   dialect: "mysql",
//   logging: true
// })
setupModels(sequelize)

export default sequelize
