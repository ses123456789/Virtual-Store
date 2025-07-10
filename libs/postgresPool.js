import { Pool} from "pg"
import DBconfig from "../config/config.js"

const USER= encodeURIComponent(DBconfig.dbUser)
const PASSWORD= encodeURIComponent(DBconfig.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${DBconfig.dbHost}:${DBconfig.dbPort}/${DBconfig.dbName}`;
  const pool= new Pool({connectionString: URI})

export default pool


