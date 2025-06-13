import express from "express";
import { faker } from '@faker-js/faker'

const UsersRouter = express.Router()

UsersRouter.get("/" , (req,res) => {
  const {limit, offset}= req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send("no hay parametros")
  }
})

export default UsersRouter
