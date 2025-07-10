import express from "express";
import OrderServices from "../Services/OrderServices.js";
import { ValidatorHandler } from "../middlewares/ValidatorHandle.js";
import { CreateOrderSchema, GetOrderSchema, AddItemSchema } from "../schemas/OrderSchema.js";

const OrderRouter = express.Router()
const OrderService = new OrderServices();

OrderRouter.get("/:id",ValidatorHandler(GetOrderSchema, "params"), async (req,res,next) =>{
try {
   const {id} = req.params
const order= await OrderService.findOne(id)
res.json(order)
} catch(error){
  next(error)
}
})

OrderRouter.post('/',ValidatorHandler(CreateOrderSchema, "body"), async (req, res,next) => {
  try {
    const body = req.body;
  const newOrder = await OrderService.create(body)
  res.status(201).json(newOrder);
  } catch (error) {
    next(error)
  }
});

OrderRouter.post('/add-item',ValidatorHandler(AddItemSchema, "body"), async (req, res,next) => {
try {
    const body = req.body;
  const addItem= await OrderService.additem(body)
  res.status(201).json(addItem);
} catch (error) {
  next(error)
}
});

export default OrderRouter
