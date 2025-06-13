import express from "express";
import cors from 'cors';
import RouterAPI from "./routes/index.js";
import {logErrors, errorHandler, BoomErrorHandler} from "./middlewares/ErrorHandler.js";

const app= express()
const port= 3000

app.use(express.json())

app.use(cors())
app.get("/", (req,res)=>(
  res.send("Hola")
))

RouterAPI(app)
app.use(logErrors)
app.use(BoomErrorHandler)
app.use(errorHandler)


app.listen(port, ()=>{
  console.log("Escucando desde el puerto",port)
})
