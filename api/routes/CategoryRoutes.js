import express from "express";
import { faker } from '@faker-js/faker'

const CategoriesRouter = express.Router()
CategoriesRouter.get("/:Categoryid/products/:Productid", (req,res) =>{
const {Categoryid, Productid}=req.params
res.json({
  Categoryid,
  Productid
})
})

export default CategoriesRouter
