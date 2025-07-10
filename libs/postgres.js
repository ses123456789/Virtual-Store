import { Client } from "pg"
import DBconfig from "../config/config.js"

async function GetConnection() {
  const client= new Client({
  host: DBconfig.dbHost,
  port: DBconfig.dbPort,
  user: DBconfig.dbUser,
  password: DBconfig.dbPassword,
  database: DBconfig.dbName
})
  await client.connect()
  return client
}

export default GetConnection
